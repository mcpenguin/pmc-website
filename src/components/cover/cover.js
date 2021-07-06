// React component class for cover section
import React, { Component } from 'react';

// import stylesheet
import './cover.scss';

// import images
import graph from './graph_carousel.png';
import notes from './notes_carousel.jpg';
import penguin from './penguin_carousel.png';

export default class Cover extends Component {

    render() {
        return (
            <section id='cover'>
                <div>
                    <img src={notes} className="img1" />
                    <img src={penguin} className="img2" />
                    <img src={graph} className="img3" />
                    {/* <img src={graph} className="img4" /> */}
                </div>
            </section>
        );
    }
}