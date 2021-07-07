// React component class for contact-us section
import React, { Component } from 'react';

// import stylesheet
import './contact-us.scss';

// class for single contact me link
// props:
// - logoIcon: name of font awesome icon for link (eg fas fa-address-book)
// - desc: "description" of the link (eg room number, link to discord etc)
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
                    {this.props.desc}
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
                        logoIcon="fas fa-address-book"
                        desc="www.facebook.com/groups/uwpmc1"
                    />
                    <ContactMeIcon
                        logoIcon="fas fa-address-book"
                        desc="www.facebook.com/groups/uwpmc2"
                    />
                    <ContactMeIcon
                        logoIcon="fas fa-address-book"
                        desc="www.facebook.com/groups/uwpmc3"
                    />
                    <ContactMeIcon
                        logoIcon="fas fa-address-book"
                        desc="www.facebook.com/groups/uwpmc4"
                    />
                    <ContactMeIcon
                        logoIcon="fas fa-address-book"
                        desc="www.facebook.com/groups/uwpmc5"
                    />
                    <ContactMeIcon
                        logoIcon="fas fa-address-book"
                        desc="www.facebook.com/groups/uwpmc6"
                    />
                    <ContactMeIcon
                        logoIcon="fas fa-address-book"
                        desc="www.facebook.com/groups/uwpmc7"
                    />
                </div>
            </section>
        );
    }
}