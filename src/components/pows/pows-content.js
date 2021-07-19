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

const replaceSpoiler = txt => {
    console.log(txt);
    return txt.toString().replace("!!-", "<span class='spoiler'>").replace("-!!", "</span>")
};

// spoiler tag
// props: text
class Spoiler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        }
    }

    handleClick() {
        this.setState({ isVisible: !this.state.isVisible });
    }

    render() {
        return (
            <span className={this.state.isVisible ? "show-spoiler" : "spoiler"}>
                {this.props.text}
            </span>
        )
    }
}

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

    render() {
        const md = new MarkdownIt();
        md.use(MarkdownItSpoiler);

        console.log(md.render(
            contentData[this.powNo]
        ));

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
                            {/* <MathJax.Provider input="tex"> */}
                            {
                                // parse the html content into JSX
                                // parse(
                                //     // render markdown into HTML string
                                //     md.render(
                                //         contentData[this.powNo]
                                //     )

                                //     // replace spoiler tags
                                //     // .replace("!!-", "<span class='spoiler'>")
                                //     // .replace("-!!", "</span>")
                                // )
                                <ReactMarkdown
                                    components={{
                                        // parse p tags
                                        p: ({ node, children }) => {
                                            // const children = node.children;
                                            // console.log(child.value);
                                            console.log(children);

                                            // parse spoiler tags (!! ... !!)
                                            // check for !! and !! at start and end of the string
                                            // if (child.value.match(/^[!][!](.*)[!][!]$/gim)) {
                                            // for (let i in node.children) {
                                            //     // get all spoiler tags within the value
                                            //     // console.log(node.children[i].value, node.children[i].value && node.children[i].value.match(/[!][!](.*)[!][!]/gim));
                                            //     console.log(node.children[i].value);
                                            //     let regex = /[!][!](.*)[!][!]/gim;
                                            //     if (node.children[i].value) {
                                            //         let res = node.children[i].value;
                                            //         let spoilers = node.children[i].value.match(regex);
                                            //         for (let i in spoilers) {
                                            //             res = res.replace(spoilers[i], `<span class='spoiler'>${spoilers[i]}</span>`)
                                            //         }
                                            //         console.log(node.children[i].value);
                                            //         return (
                                            //             // <span className="spoiler">
                                            //             //     {children[i].value}
                                            //             // </span>

                                            //             parse(
                                            //                 node.children[i].value
                                            //                     .replace("!!-", "<span class='spoiler'>")
                                            //                     .replace("-!!", "</span>")
                                            //             )

                                            //         )
                                            //     }
                                            // }

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
                                            // map for spoiler tags
                                            return <p>{children}</p>
                                            // return <p>{
                                            //     children.map(child =>
                                            //         typeof child !== 'object'
                                            //             ? child || replaceSpoiler(child)
                                            //             : {
                                            //                 ...child, props: {
                                            //                     ...child.props, children: child.props.children.map(replaceSpoiler)
                                            //                 }
                                            //             }
                                            //     )
                                            // }</p>;
                                        },
                                    }}
                                    remarkPlugins={[remarkMath, gfm]}
                                    rehypePlugins={[rehypeKatex, rehypeRaw]}
                                    children={contentData[this.powNo]}
                                />
                            }
                            {/* </MathJax.Provider> */}
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