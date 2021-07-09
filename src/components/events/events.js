// React component class for events section
import React, { Component } from 'react';

// import stylesheet
import './events.scss';

// component for prof talk
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

// component for student talk (SASMS)
// props:
// - talkTitle: title of talk (as string)
// - talkSpeaker: speaker of talk (as string)
// - talkSpeakerProgram: program of speaker (eg 3A Pure Mathematics) (as string)
class SASMSTalk extends Component {
    render() {
        return (
            <div className='sasms-talk'>
                <h4>{this.props.talkTitle}</h4>
                <p><span>{this.props.talkSpeaker}</span> | <span>{this.props.talkSpeakerProgram}</span></p>
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
                <div className='sasms-title'>
                    <h3>SASMS</h3>
                    <h6>
                        Short Attention Span Math Seminars, or SASMS for short, comprises the PMC's biggest
                        event of the term, where undergraduate students can
                        sign up to give a short talk (20 - 25 minutes)
                        about a subject of their choice, usually related to
                        Pure Math, Applied Math or Combinatorics & Optimization.
                        Snacks along with dinner are provided.
                    </h6>
                </div>
                <div className='sasms-container'>
                    <div className='title'>
                        <h3>This Term's Talks</h3>
                    </div>
                    <div className='talks'>
                        <SASMSTalk
                            talkTitle="Lagrange Multipliers and Graph Theory"
                            talkSpeaker="Roger Fu"
                            talkSpeakerProgram="3B Combinatorics & Optimization"
                        />
                        <SASMSTalk
                            talkTitle="We've Got Fun and Game Theory"
                            talkSpeaker="Josue Kurke"
                            talkSpeakerProgram="2A Applied Mathematics"
                        />
                        <SASMSTalk
                            talkTitle="Commutators equals to the identity"
                            talkSpeaker="Junqiao Lin"
                            talkSpeakerProgram="4A Pure Mathematics"
                        />
                        <SASMSTalk
                            talkTitle="Introduction to Combinatorial Optimization and LP Methods via the Travelling Salesman"
                            talkSpeaker="Logan Christopher Grout"
                            talkSpeakerProgram="3B Combinatorics & Optimization"
                        />
                        <SASMSTalk
                            talkTitle="The many ways to solve for $Ax = b$"
                            talkSpeaker="Joey Yu"
                            talkSpeakerProgram="3B Pure Mathematics"
                        />
                    </div>
                    <div className='details'>

                    </div>
                </div>
            </section>
        );
    }
}