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
                <h4>⭐ {this.props.talkTitle}</h4>
                {/* <p><span>{this.props.talkSpeaker}</span> | <span>{this.props.talkSpeakerProgram}</span></p> */}
                <p><span>{this.props.talkSpeaker}</span> | {this.props.time}</p>
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
                        talkTitle='Homomorphism-Homogeneous Graphs'
                        talkSpeaker='Nickolas Rollick'
                        talkDate='July 19th 2021'
                        talkTime='5:00 PM EST'
                        talkLocation='Online'
                    />
                    <ProfTalk
                        type='am'
                        talkTitle='Modelling Motility of Microorganisms and Microrobots'
                        talkSpeaker='Henry Shum'
                        talkDate='July 7th 2021'
                        talkTime='6:00 PM EST'
                        talkLocation='Online'
                    />
                    <ProfTalk
                        type='co'
                        talkTitle='Crypto Gossip: Elliptic Curve Cryptography and the NSA'
                        talkSpeaker='Alfred Menezes'
                        talkDate='Wednesday, Apr 1st'
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
                    <div className='sub'>
                        <div className='talks'>
                            <SASMSTalk
                                talkTitle="An Introduction to Vinogradov's Mean Value Theorem"
                                talkSpeaker="Josue Kurke"
                                time="Wednesday, November 24 @ 7:00 PM"
                            />
                            <SASMSTalk
                                talkTitle="Introduction to Mathematical Lion Hunting and a Topological Application"
                                talkSpeaker="Leon Burkhardt"
                                time="Wednesday, November 24 @ 7:30 PM"
                            />
                            <SASMSTalk
                                talkTitle="Abstract Applications of the Weingarten Function to Finite Free Probability"
                                talkSpeaker="Gavin Orok"
                                time="Wednesday, November 24 @ 8:30 PM"
                            />
                            <SASMSTalk
                                talkTitle="Introduction to Algebraic Topology"
                                talkSpeaker="Leon Yao"
                                time="Wednesday, November 24 @ 9:00 PM"
                            />
                            <SASMSTalk
                                talkTitle="Generating Combinatorial Constructions with Reinforcement Learning"
                                talkSpeaker="Parsa Salimi"
                                time="Thursday, November 25 @ 7:00 PM"
                            />
                            <SASMSTalk
                                talkTitle="How to Multiply"
                                talkSpeaker="Kavin Satheeskumar"
                                time="Thursday, November 25 @ 7:30 PM"
                            />
                            <SASMSTalk
                                talkTitle="Drawing Random Lines is Math, Right?"
                                talkSpeaker="Shannon Jeffries"
                                time="Thursday, November 25 @ 8:30 PM"
                            />
                            <SASMSTalk
                                talkTitle="How *Not* To Prove Fermat's Last Theorem"
                                talkSpeaker="Nicholas Priebe"
                                time="Thursday, November 25 @ 9:00 PM"
                            />
                        </div>
                        <div className='details'>
                            <div>
                                <h6><i className='icon fas fa-calendar-alt'></i>November 24 & 25</h6>
                                <h6><i className='icon fas fa-clock'></i>7 - 9:30 PM</h6>
                                <h6><i className='icon fas fa-building'></i>MC 4021</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='other-events-title'>
                    <h3>Our Other Events</h3>
                    <h6>
                        The PMC also hosts other events other than student and prof talks, including a
                        termly math competition and member-exclusive socials. Scroll down to find out more.
                    </h6>
                </div>
                <div className='other-events-container'>
                    <div className='sub'>
                        <div className='math-competition-container'>
                            <div className='inner'>
                                <div className='description'>
                                    <h4>Over 9000!</h4>
                                    <p>
                                        "Over 9000!" is one of the contests regularly hosted by the PMC. Here, participants 
                                        answer questions of the form "Is $x$ over 9000?", where $x$ is defined differently 
                                        each time. Usually, free snacks and dinner are provided, along with prizes for both 
                                        winners and losers. Prizes, what snacks are provided, what is served 
                                        for dinner, and the exact rules are at the host's discretion and 
                                        will be explained at the beginning of the event.
                                    </p>
                                </div>
                                <div className='details'>
                                    <h6><i className='icon fas fa-calendar-alt'></i>August 6 2021</h6>
                                    <h6><i className='icon fas fa-clock'></i>10:00 PM EST</h6>
                                    <h6><i className='icon fas fa-building'></i>Online</h6>
                                </div>
                            </div>
                        </div>
                        <div className='socials-container'>
                            <div className='inner'>
                                <div className='description'>
                                    <h4>MOT & EOT Socials</h4>
                                    <p>
                                        Middle and End of Term Socials are gatherings for club members 
                                        to chat and eat pizza. Contrary to all of our other events 
                                        which are open to all students, these are only exclusive to the 
                                        club members. An email is sent to inform members of 
                                        the socials' dates in advance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
