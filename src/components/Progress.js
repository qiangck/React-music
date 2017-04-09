import React, { Component } from 'react'
import './../public/css/progress.css'

export default class Progress extends Component {
    render () {
        const { progress } = this.props;
        return (
            <div className="playerProgress">
                <div className="_line"><span className="_linePlay" style={{width: `${progress}%`}}></span></div>
                <span className="_circle" style={{left: `${progress}%`}}></span>
            </div>
        )
    }
}

