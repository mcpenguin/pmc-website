// React component class for events section
import React, { Component } from 'react';

// import stylesheet
import './events.scss';

// class for prof talk
// props:
// - type = pm | am | co
// - talkTitle: title of talk (as string)
// - talkSpeaker: speaker of talk (as string)
// - talkDate: date of talk (eg Thursday, 21st February 2021) (as string)
// - talkTime: time of talk (4:00-5:00 PM) (as string)
// - talkLocation: location of talk (eg MC 4040) (as string)
class ProfTalk extends Component {

    name = {
        pm: "Pure Math Talk",
        am: "Applied Math Talk",
        co: "C&O Talk"
    }[this.props.type]

    render() {
        return (
            <div className={`prof-talk ${this.props.type}`}>
                <div className='sub'>
                    <div>
                        <p className='type'>{this.name}</p>
                        <h4>{this.props.talkTitle}</h4>
                    </div>
                    <div>
                        <h6><i className='icon fas fa-user'></i>{this.props.talkSpeaker}</h6>
                        <h6><i className='icon fas fa-calendar-alt'></i>{this.props.talkDate}</h6>
                        <h6><i className='icon fas fa-clock'></i>{this.props.talkTime}</h6>
                        <h6><i className='icon fas fa-building'></i>{this.props.talkLocation}</h6>
                    </div>
                </div>
            </div>
        )
    }
}

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
                <div className='prof-talks-container'>
                    <ProfTalk
                        type='pm'
                        talkTitle='Deciding Digraph Homomorphisms'
                        talkSpeaker='Ross Willard'
                        talkDate='Thursday, March 12th'
                        talkTime='4:30 - 5:30 PM'
                        talkLocation='MC 5501'
                    />
                    <ProfTalk
                        type='am'
                        talkTitle='Information Geometry: an overview'
                        talkSpeaker='Paul Marriott'
                        talkDate='Thursday, March 21st'
                        talkTime='4:00 - 5:00 PM'
                        talkLocation='MC 4040'
                    />
                    <ProfTalk
                        type='co'
                        talkTitle='Crypto Gossip: Elliptic Curve Cryptography and the NSA'
                        talkSpeaker='Alfred Menezes'
                        talkDate='Wednesday, April 1st'
                        talkTime='4:30 - 5:30 PM'
                        talkLocation='MC 5417'
                    />
                </div>
            </section>
        );
    }
}