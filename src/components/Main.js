import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listMusic } from './../action'
import Button from './Button'
import Info from './Info'
import Progress from './Progress'
import Bg from './Bg'
import $ from 'jquery'
import './../public/css/main.css'
class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            progressState: 0,//播放进度
            currentTrackLen: 0, //歌单歌曲数
            currentTrackIndex: 0, //当前播放的歌曲索引
            playStatus: false, //播放状态
        }
    }
    componentDidMount () {
        const { dispatch } = this.props;
        const { audio } = this.refs;
        // 初始化请求数据
        $.get('hello.json').then((result) => {
            const { dataType } = JSON.parse(result);
            dispatch(listMusic(dataType));
            this.setState({ currentTrackLen: dataType.length });
        },(error) => {
            console.log(error)
        });
        // 初始化音频监听事件
        audio.addEventListener('loadedmetadata',() =>{
            //获取音频时长
            const timeLong = audio.duration;
            audio.addEventListener('timeupdate',() =>{
                this.setState({
                    //进度条长度转换
                    progressState: (audio.currentTime/timeLong*100).toFixed(2)
                });
            });
            audio.addEventListener('ended',() => {
                this._palySwitch('back');
            });
        });
    }
    // 播放回调
    _palyState (text) {
        const { playStatus } = this.state;
        const { audio } = this.refs;
        if (text === 'play') {
            if (playStatus) {
                console.log('暂停');
                audio.pause();
            } else {
                console.log('播放');
                audio.play();
            }
            this.setState({ playStatus: !playStatus });
        } else {
            this.setState({ playStatus: true });
            audio.play();
        }
    }
    // 切换回调
    _palySwitch (text) {
        const { currentTrackIndex, currentTrackLen } = this.state;
        let number = currentTrackIndex;
        switch (text) {
            case 'back':
                number = number > 0 ? number - 1 : currentTrackLen - 1
                break;
            case 'go':
                number = number < currentTrackLen - 1 ? number + 1 : 0
                break;
            default:
                return false;
        }
        this.setState({currentTrackIndex: number}, () => {
            this._palyState();
        });
    }
    // 控制器回调
    _handlerClick = (text, e) => {
        e.preventDefault();
        switch (text) {
            case 'back':
                console.log('后退');
                this._palySwitch(text);
                break;
            case 'play':
                this._palyState(text);
                break;
            case 'go':
                console.log('前进');
                this._palySwitch(text);
                break;
            default:
                return false;
        }
    }
    render () {
        const { progressState, currentTrackIndex, playStatus } = this.state;
        const { musicList } = {
            musicList: this.props.musicList.length > 0 ? this.props.musicList[currentTrackIndex] : ''
        }
        return (
            <div className="main">
                {/* 播放器专辑背景  */}
                <Bg index={currentTrackIndex} />
                <div className="box">
                    {/* 播放器信息  */}
                    <Info index={currentTrackIndex} />
                    {/* 播放器进度  */}
                    <Progress progress={progressState}></Progress>
                    {/* 播放器控制器  */}
                    <Button index={currentTrackIndex} onPlay={this._handlerClick} statePlay={playStatus}></Button>
                </div>
                <audio src={ musicList.mp3Url } ref="audio"></audio>
            </div>
        )
    }
}
export default connect(function (state) {
    return { musicList: state.list }
})(Main);