// React component class for pows section
import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

// import stylesheet
import './pows.scss';

import Title from './pows/pow-1/title.jpg';

import * as images from './export-images';

// react class for pows
// props:
// - powNo: number of the pow
// - powName: name of the pow (eg Collatz DIY Conjecture)
// - powDate: date of the pow (eg 7th Jul 2021)
class POW extends Component {

    render() {

        return (
            <div className='problem' style={{
                background: `url(${images[`img${this.props.powNo}`]})`,
                backgroundRepeat: "norepeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
                <div className='gradient' style={{
                    background: `hsla(${this.props.powNo * 70}, 70%, 70%, 0.7)`,
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
                    </div>
                </div>
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