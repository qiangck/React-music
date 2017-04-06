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
    }
    render () {
        return (
            <div className="main">
                <div className="main-bg"></div>
                <div className="box">
                    <div className="playerInfo">
                        <div className="face">
                            <div className="time">10:00</div>
                        </div>
                        <div className="name">asdasdsa</div>
                        <div className="artist">asdasdasd</div>
                    </div>
                    <div className="playerProgress">asdasdas</div>
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