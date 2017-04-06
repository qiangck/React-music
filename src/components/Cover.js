import React, { Component } from 'react'

export default class Cover extends Component {
    render () {
        const { imgUrl } = this.props;
        return (
            <div>
                <img src={ imgUrl } style={{
                    width: '50px',
                    height: '50px'
                }} alt=""/>
            </div>
        )
    }
}
