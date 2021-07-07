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