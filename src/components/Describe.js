import React, { Component } from 'react'

export default class Describe extends Component {
    render () {
        const { album, name } = this.props;
        return (
            <div>
                <p>{ name }</p>
                <p>{ album }</p>
            </div>
        )
    }
}
