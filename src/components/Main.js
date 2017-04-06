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
            <section className="main">
                <div className="main-bg"></div>
                <div className="box">
                    {/*<Cover imgUrl={data.imgUrl}/>
                    <Describe album={data.des} name={data.name}/>
                    <Button musicUrl={data.musicUrl} isPlay={data.isPlay}/>
                    */}
                </div>
            </section>
        )
    }
}
export default connect(function (state) {
    return { list: state.list }
})(Main);