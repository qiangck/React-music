import React, { Component } from 'react'
import './../public/css/button.css'
export default class Button extends Component {
    render () {
        const { onPlay, statePlay } = this.props;
        return (
            <ul className="playerControl">
                <li><a href="#" className="_back" onClick={onPlay.bind(this, 'back')} ><i></i></a></li>
                <li><a href="#" className={statePlay ? '_pause' : '_play'} onClick={onPlay.bind(this, 'play')} ><i></i></a></li>
                <li><a href="#" className="_go" onClick={onPlay.bind(this, 'go')} ><i></i></a></li>
            </ul>
        )
    }
}