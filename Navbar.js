import React from 'react'
import PropTypes from 'prop-types'
// import { a } from "react-router-dom";



export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><b>{props.title}</b></a>
                <a className="navbar-toggler" type="a" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                </div>
                <div className="form-check form-switch mt-2">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                    <label className={`form-check-label text-${props.text === "Enable Dark Mode" ? "black" : "white"}`} htmlFor="flexSwitchCheckDefault"><b>{props.text}</b></label>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}