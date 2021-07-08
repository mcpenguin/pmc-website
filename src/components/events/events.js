// React component class for events section
import React, { Component } from 'react';

// import stylesheet
import './events.scss';

export default class Events extends Component {
    render() {
        return (
            <section id='events'>
                <div className='events-header'>
                    <div className='gradient'>
                        <div className='title'>
                            <h2>Our Events</h2>
                            <h4>
                                At the PMC, we hold a variety of events throughout the year,
                                including prof talks, student seminars, competitions and member-exclusive
                                socials.
                            </h4>
                            <h4>
                                Scroll down to see details for this term's events. Click the event
                                to learn more about it.
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='prof-talks-title'>
                    <h3>Prof Talks</h3>
                    <h6>
                        Every term, the PMC organizes a small talk (30-45 minutes long) 
                        to be given by a professor in each of the three departments 
                        about their field of study. These are usually self-contained 
                        or require only minimal exposure to the topic. 
                        Free Snacks are provided.
                    </h6>
                </div>
            </section>
        );
    }
}