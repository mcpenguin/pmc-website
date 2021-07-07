// React component class for navbar section
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import TypeWriterEffect from 'react-typewriter-effect';

// import stylesheet
import './navbar.scss';

// import logo
import logo from './pmamco.png';

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

    constructor(props) {
        super(props);
        this.state = {
            matches: window.matchMedia("(max-width: 480px)").matches
        };
    }

    componentDidMount() {
        const handler = e => this.setState({ matches: e.matches });
        window.matchMedia("(max-width: 480px)").addListener(handler);
    }

    render() {
        return (
            <section id="top-navbar" className="section-top-navbar">
                <Navbar expand="lg" variant="light">
                    <Navbar.Brand href="/" className="navbar-brand">
                        <img src={logo} id="navbar-img" />
                        <span>
                            {
                                // this.state.matches ? "PMC" : "The Pure Math Club"
                                "The Pure Math Club"
                            }
                            {/* <TypeWriterEffect 
                            startDelay={200}
                            multiText={[
                                "The Pure Math Club",
                                "The PMAMCO Club",
                                "PMC"
                            ]}
                        /> */}
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="my-navbar" />
                    <Navbar.Collapse>
                        <Nav id="my-navbar" className="ml-auto">
                            <NavbarLink id="events" title="Events" />
                            <NavbarLink id="problems-of-the-week" title="Problem of the Week" />
                            <NavbarLink id="constitution" title="Constitution" />
                            <NavbarLink id="contact-us" title="Contact Us" />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="navbar-bottom-borders">
                    <div className="border-1"></div>
                    <div className="border-2"></div>
                </div>
            </section>
        )
    }
}