import React, { Component } from 'react'
import { connect } from 'react-redux'
import './../public/css/bg.css'
class Bg extends Component {
    render () {
        const { musicList, index } = this.props;
        const { imgUrl } = musicList ? { imgUrl: musicList[index].album.picUrl } : {};
        return (
            <div className="main-bg" style={{
                backgroundImage: `url(${imgUrl})`,
            	backgroundRepeat: 'no-repeat',
            	backgroundPosition: 'center center',
            	backgroundSize: 'cover'
            }}></div>
        )
    }
}

export default connect(function(state) {
	return { musicList: state.list.posts }
})(Bg);