// React component class for individual pows
import React, { Component } from 'react';

// import html string to markdown parser and latex formatting
import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';
import MathJax from 'react-mathjax';

import TopNavbar from '../navbar/navbar';
import ContactUs from '../contact-us/contact-us';

// import data
import * as data from './export';
import contentData from './content.json';

// import stylesheet
import './pows-content.scss';

class POWContent extends Component {

    powNo = this.props.match.params.powId;

    constructor(props) {
        super(props);
        this.state = {
            title: data[`details${this.powNo}`]['name'],
            date: data[`details${this.powNo}`]['date'],
            content: "",
        }
    }

    componentDidMount() {
        // load content
        const content = data[`content${this.powNo}`];
        fetch(content)
            .then(res => res.text())
            .then(content => this.setState({ content }));
    }

    render() {
        const md = new MarkdownIt();

        return (
            <>
                <TopNavbar />
                <section className='pow-content'>
                    <div className='sub'>
                        <h1 className='title'>POW #{this.powNo}: {this.state.title}</h1>
                        <h2 className='date'>{this.state.date}</h2>
                        <hr className='line' />
                        <span className='description'>
                            <MathJax.Provider input="tex">
                                {parse(md.render(contentData[this.powNo]))}
                            </MathJax.Provider>
                        </span>
                    </div>
                </section>
                <ContactUs />
            </>
        );
    }
}

export default (props) => <POWContent {...props} />;