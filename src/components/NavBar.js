import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import main from '../styles/main.scss'

export default class NavBar extends Component {
    render() {
        return (
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary nav-bar-height custom-background">
                        <a className="navbar-brand" href="#">SurfSpotter</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
        )
    }
}
