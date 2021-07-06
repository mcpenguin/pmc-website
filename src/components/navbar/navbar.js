// React component class for navbar section
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import logo
import logo from './pmamco.png';

// import stylesheet
import './navbar.scss';

class NavbarLink extends Component {
    render() {
        const str = `#${this.props.id}`;
        return (
            <Nav.Item>
                <Link to={`/${this.props.id}`} className="nav-item">
                    {this.props.title}
                </Link>
            </Nav.Item>
        )
    }
}

export default class TopNavbar extends Component {

    render() {
        return (
            <section className="section-header">
                <Navbar expand="lg" variant="dark">
                    <Navbar.Brand href="/" className="navbar-brand">
                        <img src={logo} id="navbar-img" /> The Arctic Blog
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="my-navbar" />
                    <Navbar.Collapse>
                        <Nav id="my-navbar" className="ml-auto">
                            <NavbarLink id="projects" title="Projects" />
                            <NavbarLink id="experience" title="Experience" />
                            <NavbarLink id="education" title="Education" />
                            <NavbarLink id="achievements" title="Achievements" />
                            <NavbarLink id="notes" title="Notes" />
                            <NavbarLink id="credits" title="Credits" />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </section>
        )
    }
}