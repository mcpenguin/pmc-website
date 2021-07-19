// React component class for individual pows
import React, { Component } from 'react';

// import html string to markdown parser and latex formatting
import MarkdownIt from 'markdown-it';
import MarkdownItSpoiler from '@traptitech/markdown-it-spoiler';
import parse from 'html-react-parser';
import MathJax from 'react-mathjax';

import ReactMarkdown from 'react-markdown'
// remark plugins
// strikethrough, tables, tasklists, URLs
import gfm from 'remark-gfm'
// latex
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
// render html
import rehypeRaw from 'rehype-raw';

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

        return (
            <>
                <TopNavbar />
                <section className='pow-content'>
                    <div className='sub'>
                        <h1 className='title'>POW #{this.powNo}: {this.state.title}</h1>
                        <h2 className='date'>{this.state.date}</h2>
                        <img src={data[`img${this.powNo}`]} />
                        <hr className='line' />
                        <span className='description'>
                            <ReactMarkdown
                                components={{
                                    // parse p tags
                                    p: ({ node, children }) => {

                                        // parsing images
                                        if (node.children[0].tagName === "img") {
                                            const image = node.children[0];
                                            return (
                                                <div className={"image"}>
                                                    <img
                                                        src={`/pow-pictures/pow-${this.powNo}/${image.properties.src}`}
                                                        alt={image.properties.alt}
                                                    />
                                                </div>
                                            );
                                        }
                                        // Return default child if it's not an image
                                        return <p>{children}</p>
                                    },
                                }}
                                remarkPlugins={[remarkMath, gfm]}
                                rehypePlugins={[rehypeKatex, rehypeRaw]}
                                children={contentData[this.powNo]}
                            />
                        </span>
                    </div>
                </section>
                <ContactUs />
            </>
        );
    }
}

export default (props) => <POWContent {...props} />;