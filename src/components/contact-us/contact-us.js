// React component class for contact-us section
import React, { Component } from 'react';

// import stylesheet
import './contact-us.scss';

// class for single contact me link
// props:
// - logoIcon: name of font awesome icon for link (eg fas fa-address-book)
// - desc: "description" of the link (eg room number, link to discord etc)
class ContactMeIcon extends Component {
    render() {
        return (
            <div className='logo'>
                <div className='logo-icon'>
                    <i className={this.props.logoIcon}></i>
                </div>
                <div className='logo-link'>
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