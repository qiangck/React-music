import React, { Component } from 'react'
import { connect } from 'react-redux'

class Button extends Component {
    constructor (props) {
        super(props);
        this.state = {
            btnState: props.isPlay
        }
    }
    static defaultProps = {
        isPlay: false
    }
    _palyState (text) {
        const { btnState } = this.state;
        const { audio } = this.refs;
        console.log(audio)
        if (btnState) {
            console.log('暂停');
            audio.pause();
        } else {
            console.log('播放');
            audio.play();
        }
        this.setState({ btnState: !btnState });
    }
    _handlerClick = (text, e) => {
        e.preventDefault();
        switch (text) {
            case 'back':
                console.log('后退');
                break;
            case 'play':
                this._palyState(text);
                break;
            case 'go':
                console.log('前进');
                break;
            default:
                return false;
        }
    }
    render () {
        const { musicList, index } = this.props;
        const { musicUrl } = { musicUrl: musicList[index] ? musicList[index].mp3Url : {} };
        return (
            <div className="playerControl">
                <a href="#" className="_back" onClick={this._handlerClick.bind(this, 'back')} ><i></i>后退</a>
                <a href="#" className="_play" onClick={this._handlerClick.bind(this, 'play')} ><i></i>播放/暂停</a>
                <a href="#" className="_next" onClick={this._handlerClick.bind(this, 'go')} ><i></i>前进</a>
                <audio src={musicUrl} ref="audio"></audio>
            </div>
        )
    }
}

export default connect(function(state) {
    return { musicList: state.list }
})(Button);