// React component class for welcome section
import React, { Component } from 'react';

// import stylesheet
import './welcome.scss';

export default class Welcome extends Component {
    render() { 
        return (
            <section id='welcome'>
                <div class='typewriter-effect'>
                    <h5>Welcome to the</h5>
                    <h3>
                        <span className='logo-letter'>P</span>ure <span className='logo-letter'>M</span>athematics, <span className='logo-letter'>A</span>pplied <span className='logo-letter'>M</span>athematics, 
                        and <span className='logo-letter'>C</span>ombinatorics <span className='logo-letter'>&</span> <span className='logo-letter'>O</span>ptimization
                    </h3>
                    <h5>
                        club!
                    </h5>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, but also the 
                        leap into electronic typesetting, remaining essentially unchanged. It was 
                        popularised in the 1960s with the release of Letraset sheets containing Lorem 
                        Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </p>
                </div>
            </section>
        ); 
    }
}