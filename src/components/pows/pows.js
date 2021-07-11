// React component class for pows section
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from 'react-router-dom';

import TopNavbar from '../navbar/navbar';
import ContactUs from '../contact-us/contact-us';

// import stylesheet
import './pows.scss';

import * as data from './export';
import contentData from './content.json';

// react class for pows
// props:
// - powNo: number of the pow
// - powName: name of the pow (eg Collatz DIY Conjecture)
// - powDate: date of the pow (eg 7th Jul 2021)
class POW extends Component {

    render() {
        let obj = data[`details${this.props.powNo}`] || {};

        return (
            <div
                className='problem'
                style={{
                    background: `url(${data[`img${this.props.powNo}`]})`,
                    backgroundRepeat: "norepeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                {/* <Link exact to={`/problems-of-the-week/${this.props.powNo}`}> */}
                <div className='gradient' style={{
                    background: `linear-gradient(0deg, hsla(${this.props.powNo * 70}, 70%, 60%, 1) 0%, #f5f5f5dd 70%, #f5f5f5 95%)`,
                }}
                >
                    <div className='sub'>
                        <div className='number'>
                            <p>#{this.props.powNo}</p>
                        </div>
                        <div className='date'>
                            <p>{obj['date']}</p>
                        </div>
                        <div className='title'>
                            <h5>{obj['name']}</h5>
                        </div>
                        <div className='view-more'>
                            <Link to={`/problems-of-the-week/${this.props.powNo}`}>
                                <h5><i className='fas fa-chevron-right'></i></h5>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* </Link> */}
            </div>
        )
    }
}

// class for pow content
class POWContent extends Component {
    render() {
        return (
            <section className='pow-content'>
                <p>Hello World {this.props.powNo}</p>
            </section>
        )
    }
}

// section for POW
export default class POWS extends Component {
    // create the pows
    createPOWs = () => {
        let result = [];
        for (let i = 1; i <= Object.keys(data).length / 2; i++) {
            result.push(<POW
                powNo={i}
            />);
        }
        return result.reverse();
    }

    render() {
        return (
            <section id='pows'>
                <div className='pows-cover'>
                    <div className='sub'>
                        <div className='description'>
                            <h2>Problem of the Week</h2>
                            <p>
                                Every week, the PMC releases a new maths problem, affectionately
                                named the "Problem of the Week". Everyone who submits a correct answer
                                will be in the running to win a prize at the end of the week.
                            </p>
                            <p>
                                For each problem, click the right arrow to find out more.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='pows-container'>
                    {
                        this.createPOWs()
                    }
                </div>
            </section>
        )
    }
}