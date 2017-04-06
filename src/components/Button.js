import React, { Component } from 'react'

export default class Button extends Component {
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
        const { musicUrl } = this.props;
        return (
            <div>
                <a href="#" onClick={this._handlerClick.bind(this, 'back')}>后退</a><br/>
                <a href="#" onClick={this._handlerClick.bind(this, 'play')}>播放/暂停</a><br/>
                <a href="#" onClick={this._handlerClick.bind(this, 'go')}>前进</a><br/>
                <audio src={musicUrl} ref="audio"></audio>
            </div>
        )
    }
}
