import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listMusic } from './../action'
/*import Cover from './Cover'
import Describe from './Describe'
import Button from './Button'*/
import $ from 'jquery'

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    componentDidMount () {
        const { dispatch } = this.props;
        $.get('hello.json').then((result) => {
            dispatch(listMusic(JSON.parse(result).dataType[0]));
            this.setState({ data: JSON.parse(result).dataType[0] });
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
        return (
            <div className="main">
                <div className="main-bg"></div>
                <div className="box">
                    <div className="playerInfo">
                        <div className="face">
                            <span className="time">10:00</span>
                        </div>
                        <div className="name">asdasdsa</div>
                        <div className="artist">asdasdasd</div>
                    </div>
                    <div className="playerProgress"><span></span></div>
                    <div className="playerControl">
                        <a href="#"><i></i>后退</a>
                        <a href="#"><i></i>播放/暂停</a>
                        <a href="#"><i></i>前进</a>
                    </div>
                </div>
                <audio id="audio"></audio>
            </div>
        )
    }
}
export default connect(function (state) {
    return { list: state.list }
})(Main);