import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listMusic } from './../action'
import Button from './Button'
import Info from './Info'
import Progress from './Progress'
import Bg from './Bg'
import $ from 'jquery'

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            progressState: 30,//播放进度
            currentTrackLen: 0, //歌单歌曲数
            currentTrackIndex: 0, //当前播放的歌曲索引，默认加载第一首歌
            currentTotalTime: 0, //当前歌曲的总时间
            playStatus: true, //true为播放状态，false为暂停状态
        }
    }
    componentDidMount () {
        const { dispatch } = this.props;
        $.get('hello.json').then((result) => {
            const { dataType } = JSON.parse(result);
            dispatch(listMusic(dataType));
            this.setState({ currentTrackLen: dataType.length });
        },(error) => {
            console.log(error)
        });
        $.postCORS("http://box.gm.163.com/cgi-bin/csa/csa_self_help_dispatch.py",{ x : 1 }).done(function(obj){
              console.log(obj)
        }).fail(function(){
            alert("Error!");
        });
        $.ajax({
            url: 'http://box.gm.163.com/cgi-bin/csa/csa_self_help_dispatch.py',
            header: {
                'Access-Control-Allow-Origin':'*'
            },
            data: {
                target:'box_tools',
                from:'pc_box_tools',
                paper_id:2831,
                act:'skill_calculate',
                xls_name:'xyq_box_tools.xlsx',
                sheet_name:'bangpaijineng',
                max_val:160,
                min_val:0,
                from_val:12,
                to_val:12,
                type:3
            },
            xhrFields: {
                withCredentials: true
            },
            dataType: 'json',
            type: 'post',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Access-Control-Allow-Origin','*');
                xhr.setRequestHeader("Content-type", "application/json");
            }
        }).then((data) => {
            console.log(data)
        })
    }
    render () {
        const { progress, currentTrackIndex } = this.state;
        return (
            <div className="main">
                {/* 播放器专辑背景  */}
                <Bg index={currentTrackIndex} />
                <div className="box">
                    {/* 播放器信息  */}
                    <Info index={currentTrackIndex} />
                    {/* 播放器进度  */}
                    <Progress progress={progress}></Progress>
                    {/* 播放器控制器  */}
                    <Button index={currentTrackIndex}></Button>
                </div>
            </div>
        )
    }
}
export default connect()(Main);