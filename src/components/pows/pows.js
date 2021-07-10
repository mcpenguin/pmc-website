// React component class for pows section
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import stylesheet
import './pows.scss';

import * as images from './export-images';

// react class for pows
// props:
// - powNo: number of the pow
// - powName: name of the pow (eg Collatz DIY Conjecture)
// - powDate: date of the pow (eg 7th Jul 2021)
class POW extends Component {

    render() {

        return (
            <div
                className='problem'
                style={{
                    background: `url(${images[`img${this.props.powNo}`]})`,
                    backgroundRepeat: "norepeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                {/* <Link exact to={`/problems-of-the-week/${this.props.powNo}`}> */}
                <div className='gradient' style={{
                    background: `linear-gradient(0deg, hsla(${this.props.powNo * 70}, 70%, 60%, 0.7) 0%, #f5f5f5cc 100%)`,
                }}
                >
                    <div className='sub'>
                        <div className='number'>
                            <p>#{this.props.powNo}</p>
                        </div>
                        <div className='date'>
                            <p>{this.props.powDate}</p>
                        </div>
                        <div className='title'>
                            <h5>{this.props.powName}</h5>
                        </div>
                        <div className='view-more'>
                            <Link exact to={`/problems-of-the-week/${this.props.powNo}`}>
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

export default class POWS extends Component {

    render() {
        return (
            <section id='pows'>
                <div className='pows-cover'>
                    <div className='sub'>
                        <div className='description'>
                            <h2>Problem of the Week</h2>
                            <p>
                                Problems of the Week description goes here. It is a long established fact
                                that a reader will be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='pows-container'>
                    {
                        (Array.from(Array(5).keys())).map(n => <POW
                            powNo={5 - n}
                            powName="Collatz DIY Conjecture"
                            powDate={"27th June 2021"}
                        />)
                    }
                </div>
            </section>
        );
    }
}