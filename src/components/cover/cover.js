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
                            <p>
                                Combinatorics is an area of mathematics primarily concerned with counting, 
                                both as a means and an end in obtaining results, and certain 
                                properties of finite structures.
                            </p>
                            <p>
                                Mathematical Optimization, or mathematical programming, is the selection of a best element, 
                                with regard to some criterion, from some set of available alternatives.
                            </p>
                        </div>
                    </div>
                    <div className='cover-image'>
                        <img src={applied_math} />
                        <div className="description applied-math-description">
                            <h2>Applied Mathematics</h2>
                            <p>
                                Applied Mathematics is the application of mathematical methods by different
                                fields such as physics, engineering, medicine, biology, finance, business,
                                computer science, and industry. Thus, applied mathematics is a combination
                                of mathematical science and specialized knowledge.
                            </p>
                        </div>
                    </div>
                    <div className='cover-image'>
                        <img src={pure_math} />
                        <div className="description pure-math-description">
                            <h2>Pure Mathematics</h2>
                            <p>
                                Pure Mathematics is the study of mathematical concepts independently of any application
                                outside mathematics. These concepts may originate in real-world concerns,
                                and the results obtained may later turn out to be useful for practical
                                applications, but pure mathematicians are not primarily motivated by
                                such applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}