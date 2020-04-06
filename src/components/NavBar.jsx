import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import main from '../styles/main.scss'

export default class NavBar extends Component {
    render() {
        return (
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary nav-bar-height custom-background">
                        <a className="navbar-brand" href="#">SurfSpotter</a>
                    </nav>
        )
    }
}
