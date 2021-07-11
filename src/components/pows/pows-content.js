// React component class for individual pows
import React, { Component } from 'react';

// import markdown parser
import MarkdownIt from 'markdown-it';
// import html string to html parser
import ReactMarkdown from 'react-markdown';

import TopNavbar from '../navbar/navbar';
import ContactUs from '../contact-us/contact-us';

// import data
import * as data from './export';

import test from './pows/pow-1/content.md';

// import stylesheet
import './pows-content.scss';
import { testElement } from 'domutils';

class POWContent extends Component {

    md = new MarkdownIt();
    powNo = this.props.match.params.powId;

    constructor(props) {
        super(props);
        this.state = {
            title: data[`title${this.powNo}`],
            date: data[`date${this.powNo}`],
            content: "",
        }
    }

    componentDidMount() {
        const content = data[`content${this.powNo}`];
        
        fetch(content).then(res => res.text()).then(content => this.setState({content}));

    }

    render() {

        return (
            <>
                <TopNavbar />
                <section className='pow-content'>
                    <div className='description'>
                        <h1>POW #{this.powNo}: {this.state.title}</h1>
                        <h2>{this.state.date}</h2>
                        <ReactMarkdown>{this.state.content}</ReactMarkdown>
                    </div>
                </section>
                <ContactUs />
            </>
        );
    }
}

export default (props) => <POWContent {...props} />;