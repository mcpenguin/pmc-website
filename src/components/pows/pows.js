// React component class for pows section
import React, { Component } from 'react';

// import stylesheet
import './pows.scss';

import Title from './pows/pow-1/title.jpg';

// react class for pows
// props:
// - powNo: number of the pow
// - powName: name of the pow (eg Collatz DIY Conjecture)
// - powDate: date of the pow (eg 7th Jul 2021)
// - powImage: image for pow background
class POW extends Component {
    render() {
        return (
            <div className='problem'>
                <div className='sub' style={{
                    background: `url(${Title})`,
                    backgroundRepeat: "norepeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
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
                    <POW
                        powNo={1}
                        powName="Collatz DIY Conjecture"
                        powDate={"27th June 2021"}
                        powImage={<Title />}
                    />
                </div>
            </section>
        );
    }
}