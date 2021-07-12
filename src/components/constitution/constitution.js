// React component class for constitution section
import React, { Component } from 'react';

// import markdown parser
import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';
// import constitution md file
import constitution from './constitution.md';

// import stylesheet
import './constitution.scss';

export default class Constitution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            constContent: "",
        }
    }

    componentDidMount() {
        fetch(constitution)
            .then(r => r.text())
            .then(txt => this.setState({
                constContent: txt,
            }));
    }
    render() {
        let md = new MarkdownIt();
        return (
            <section id='constitution'>
                <div className='sub'>
                    <div className='constitution-container'>
                        {parse(md.render(this.state.constContent))}
                    </div>
                </div>
            </section>
        );
    }
}