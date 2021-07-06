// React component class for cover section
import React, { Component } from 'react';

// import stylesheet
import './cover.scss';

// import images
import pure_math from './pure_math_bg.png';
import applied_math from './applied_math_bg.png';
import combo from './combo_bg.png';

export default class Cover extends Component {

    render() {
        return (
            <section id='cover'>
                <div>
                    <div className='cover-image'>
                        <img src={combo} />
                        <div className="description combo-description">
                            <h2>Combinatorics & Optimization</h2>
                        </div>
                    </div>
                    <div className='cover-image'>
                        <img src={applied_math} />
                        <div className="description applied-math-description">
                            <h2>Applied Mathematics</h2>
                        </div>
                    </div>
                    <div className='cover-image'>
                        <img src={pure_math} />
                        <div className="description pure-math-description">
                            <h2>Pure Mathematics</h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}