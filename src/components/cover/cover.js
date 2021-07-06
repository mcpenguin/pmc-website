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
                    </div>
                    <div className='cover-image'>
                        <img src={applied_math} />
                    </div>
                    <div className='cover-image'>
                        <img src={pure_math} />
                    </div>
                </div>
            </section>
        );
    }
}