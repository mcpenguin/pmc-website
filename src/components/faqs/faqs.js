// React component class for faqs section
import React, { Component } from 'react';

// import stylesheet
import './faqs.scss';

// import images
import images from './images/import_images';

// data for faqs
const data = [
    {
        image: 'mandelbrot',
        question: "What events does the PMC organize?",
        answer: <>
            <p>
                We organize various academic and social events. On the academic side, we organize talks by
                professors and students. Have some interesting math to share? Sign up
                for a slot at our termly SASMS (Shart Attention Span Math Seminars).
                Some terms, we also organize math contests!
            </p>
            <p>
                Contrary to the stereotype of mathematicians being too shy to 
                socialize, when we are not chilling at our office we often meetup 
                for food and board games at events we uninspiringly call BOT/MOT/EOT 
                (beginning / middle / end of term). Food at these events tend to be 
                free or at least have a free component!
            </p>
        </>
    },
    {
        image: 'complex_analysis',
        question: "You guys sound like my kind of people! How do I get involved?",
        answer: <>
            <p>
                To join, just show up to the club office and pay the MathSoc mandated fee. 
                We hold a termly Disorganizational Meeting (DisOrg for short) where we elect 
                execs and assign termly responsibilities. Show up and volunteer (or sometimes get 
                voluntold) for positions. You can run for President, VP Finance, VP for PMATH, 
                AMATH or CO, VP Contests, Secretary.
            </p>
        </>
    },
    {
        image: 'fluid_dynamics',
        question: "You guys have a sick blackboard/whiteboard in your office, can I work in there?",
        answer: <>
            <p>
                We often work on our assignments together at our office. 
                It's a nice space with a blackboard/whiteboard, reference 
                books and a computer for music and WolframAlpha! Be warned 
                though, it's hard to be productive when your friends are around!
            </p>
        </>
    },
    {
        image: 'office',
        question: "Why the focus on PM on your short names?",
        answer: <>
            <p>
                PMC and Pure Math Club somehow became our more popular short names 
                over the years, but we also use PMAMCO club sometimes if that 
                makes you happier. But all short forms including AMC, COC 
                and AMCOPM club are valid according to our constitution!
            </p>
        </>
    },
];

// class for one faq
// props:
// - image: the image (variable name) corresponding to the faq
// - question: question being asked (string)
// - answer: answer to the question (JSX)
class FAQ extends Component {
    render() {
        return (
            <div className="faq">
                <img src={this.props.image} />
                <div>
                    <h2>{this.props.question}</h2>
                    {this.props.answer}
                </div>
            </div>
        )
    }
}

export default class FAQs extends Component {
    render() {
        return (
            <section id='faqs'>
                {
                    data.map(faq_data =>
                        <FAQ
                            image={images[faq_data['image']]}
                            question={faq_data['question']}
                            answer={faq_data['answer']}
                        />
                    )
                }
            </section>
        );
    }
}