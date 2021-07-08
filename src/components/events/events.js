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
                            <h6>
                                At the PMC, we hold a variety of events throughout the year,
                                including prof talks, student seminars, competitions and member-exclusive
                                socials.
                            </h6>
                            <h6>
                                Scroll down to see details for this term's events. Click the event
                                to learn more about it.
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}