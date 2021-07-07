// React component class for welcome section
import React, { Component } from 'react';

// import stylesheet
import './welcome.scss';

export default class Welcome extends Component {
    render() { 
        return (
            <section id='welcome'>
                <div>
                    <h5>Welcome to the...</h5>
                    <h3>
                        Pure Mathematics, Applied Mathematics and Combinatorics & Optimization
                    </h3>
                    <h5>
                        ...club!
                    </h5>
                </div>
            </section>
        ); 
    }
}