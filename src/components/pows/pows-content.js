// React component class for individual pows
import React, { Component } from 'react';

// import html string to markdown parser and latex formatting
import MarkdownIt from 'markdown-it';
import MarkdownItSpoiler from '@traptitech/markdown-it-spoiler';
import parse from 'html-react-parser';
import MathJax from 'react-mathjax';

import ReactMarkdown from 'react-markdown'

// remark plugins
// GitHub Friendly Markdown: strikethrough, tables, tasklists, URLs
import gfm from 'remark-gfm'
// latex
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
// render syntax highlighting for code blocks
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
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
                                            console.log(image);
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
                                    code: ({ node, inline, className, children, ...props }) => {
                                        const match = /language-(\w+)/.exec(className || '')
                                        return !inline && match ? (
                                            <SyntaxHighlighter style={theme} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
                                        ) : (
                                            <code className={className} {...props}>
                                                {children}
                                            </code>
                                        )
                                    }
                                }}
                                // renderers={{ code: reactSyntaxHighlighter }}
                                remarkPlugins={[remarkMath, gfm]}
                                rehypePlugins={[rehypeKatex, rehypeRaw]}
                            // children={contentData[this.powNo]}
                            // source={test}
                            >
                                {contentData[this.powNo]}
                            </ReactMarkdown>
                        </span>
                    </div>
                </section>
                <ContactUs />

                {
                    // give functionality to spoiler tags
                    document.querySelectorAll('.spoiler').forEach(element => {
                        element.onclick = () => {
                            if (element.classList.contains('spoiler')) {
                                element.classList.replace('spoiler', 'show-spoiler');
                            }
                            else {
                                element.classList.replace('show-spoiler', 'spoiler');
                            }
                        }
                    })
                }
            </>
        );
    }
}

export default (props) => <POWContent {...props} />;