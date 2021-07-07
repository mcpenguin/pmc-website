// React component class for welcome section
import { findByDisplayValue } from '@testing-library/react';
import React, { Component } from 'react';

// import stylesheet
import './welcome.scss';

export default class Welcome extends Component {
    render() {
        return (
            <section id='welcome'>
                <div className='title'>
                    <h5>Welcome to the</h5>
                    <h3>
                        <span className='logo-letter'>P</span>ure <span className='logo-letter'>M</span>athematics, <span className='logo-letter'>A</span>pplied <span className='logo-letter'>M</span>athematics,
                        and <span className='logo-letter'>C</span>ombinatorics <span className='logo-letter'>&</span> <span className='logo-letter'>O</span>ptimization
                    </h3>
                    <h5>
                        club!
                    </h5>
                </div>
                {/* <hr /> */}
                {/* <div className='subtitle'>
                    <h6>Or the Pure Math Club.</h6>
                    <h6>Or PMC.</h6>
                    <h6>Whichever you prefer.</h6>
                </div>
                <hr /> */}
                <div className='about'>
                    <p>
                        The Pure Mathematics, Applied Mathematics and Combinatorics & Optimization
                        club, also called the Pure Math Club or PMC, is simply a group of people who know how to 
                        define a group. Don't know what a group is yet? Drop by to find out!
                    </p>
                    <p>
                        As a club under the Mathematics Society we are located at MC 3033. Our members are interested in various areas of mathematics and if 
                        you enjoy being surrounded by people who share a passion 
                        for mathematics you might just belong here!
                    </p>
                </div>
            </section>
        );
    }
}