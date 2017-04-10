import React, { Component } from 'react'
import { connect } from 'react-redux'
import './../public/css/info.css'
class Info extends Component {
    render () {
    	const { musicList, index } = this.props;
		const { name, artists, imgUrl } = musicList[index] ? {
			name: musicList[index].name,
			artists: musicList[index].artists.name,
			imgUrl: musicList[index].album.picUrl
		} : {}
        return (
            <div className="playerInfo">
                <div className="_face" style={{
                	backgroundImage: `url(${imgUrl})`,
                	backgroundRepeat: 'no-repeat',
                	backgroundPosition: 'center center',
                	backgroundSize: 'cover'
                }}></div>
                <div className="_name">{ name }</div>
                <div className="_artist">{ artists }</div>
            </div>
        )
    }
}

export default connect(function(state) {
	return { musicList: state.list }
})(Info);

