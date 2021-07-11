// React component class for individual pows
import React, { Component } from 'react';

export default function POWContent(props) {
    return (
        <section className='pow-content'>
            <p>Hello World! {props.match.params.powId}</p>
        </section>
    );
}