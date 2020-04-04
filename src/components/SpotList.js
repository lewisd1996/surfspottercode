import React, { Component } from 'react'
import axios from 'axios';

export default class SpotList extends Component {

    constructor(props){
        super()
        this.state = {
            spots: []
        }
        this.setState({
            spots: this.state.spots.concat(props)
          })
    }

    render() {
        return (
            window.alert(this.state.spots.length)
        )
    }
}
