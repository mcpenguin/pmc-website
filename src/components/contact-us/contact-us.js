// React component class for contact-us section
import React, { Component } from 'react';

// import stylesheet
import './contact-us.scss';

// class for single contact me link
// props:
// - logoIcon: name of font awesome icon for link (eg fas fa-address-book)
// - link: link for the contact me (optional)
// - desc: "description" of the link (eg room number, link to discord etc) (as JSX)
class ContactMeIcon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isElementVisible: false,
        }
    }

    // get intersection observer to see whether element is in view
    observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                this.setState({
                    isElementVisible: entry.isIntersecting,
                })
            })
        },
        {
            rootMargin: '0px',
            // percentage of the windwo you need to see for the animation to start
            threshold: 0.8,
        }
    )

    componentDidMount() {
        this.observer.observe(document.querySelector('#contact-us'));
    }

    render() {
        // start animation if section is in view
        return (
            <div className='logo'>
                <div className={`logo-icon ${this.state.isElementVisible ? 'start-logo-icon-animation' : ''}`}>
                    <i className={this.props.logoIcon}></i>
                </div>
                <div className={`logo-link ${this.state.isElementVisible ? 'start-logo-link-icon-animation' : ''}`}>
                    <a href={this.props.link}>
                        {this.props.desc}
                    </a>
                </div>
            </div>
        )
    }
}

export default class ContactUs extends Component {

    render() {
        return (
            <section id='contact-us'>
                <div className="line red-line"></div>
                <div className="line orange-line"></div>
                <h2>Contact Us</h2>
                <div className='logo-container'>
                    <ContactMeIcon
                        logoIcon="fas fa-envelope"
                        link="mailto:pmclub@gmail.com"
                        desc="pmclub@gmail.com"
                    />
                    <ContactMeIcon
                        logoIcon="far fa-building"
                        desc="MC 3033"
                    />
                    <ContactMeIcon
                        logoIcon="fas fa-phone"
                        desc="519-888-4567 x36139"
                    />
                    <ContactMeIcon
                        logoIcon="fab fa-discord"
                        link="https://discord.gg/6m9Jw9UCVF"
                        desc="https://discord.gg/6m9Jw9UCVF"
                    />
                    <ContactMeIcon
                        logoIcon="fab fa-instagram"
                        link="https://www.instagram.com/uwpmclub/"
                        desc="@uwpmclub"
                    />
                    <ContactMeIcon
                        logoIcon="fab fa-facebook"
                        link="https://www.facebook.com/groups/uwpmc"
                        desc="www.facebook.com/groups/uwpmc"
                    />
                    <ContactMeIcon
                        logoIcon="fab fa-youtube"
                        link="https://www.youtube.com/user/pmamcoclub"
                        desc="www.youtube.com/user/pmamcoclub"
                    />
                </div>
            </section>
        );
    }
}