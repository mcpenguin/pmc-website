// React component class for pows section
import React, { Component } from 'react';

// import stylesheet
import './pows.scss';

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
                                when looking at its layout. The point of using Lorem Ipsum is that it 
                                has a more-or-less normal distribution of letters, as opposed 
                                to using 'Content here, content here', making it look 
                                like readable English.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}