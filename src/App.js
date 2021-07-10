// main React component for website

import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

// import components
import TopNavbar from './components/navbar/navbar';
import Cover from './components/cover/cover';
import Welcome from './components/welcome/welcome';
import FAQs from './components/faqs/faqs'
import ContactUs from './components/contact-us/contact-us';
import Events from './components/events/events';

class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <TopNavbar />
                <Cover />
                <Welcome />
                <FAQs />
                <ContactUs />
            </>
        )
    }
}

class EventsPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <TopNavbar />
                <Events />
                <ContactUs />
            </>
        )
    }
}

class POWPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <TopNavbar />
                <ContactUs />
            </>
        )
    }
}

class ConstitutionPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <TopNavbar />
                <ContactUs />
            </>
        )
    }
}

class ContactUsPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <TopNavbar />
                <ContactUs />
            </>
        )
    }
}

export default class App extends Component {

    render() {
        return (
            <Router forceRefresh={true}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={HomePage}
                        key={Math.random()} 
                    />
                    <Route
                        exact
                        path="/events"
                        component={EventsPage}
                        key={Math.random()} 
                    />
                    <Route
                        exact
                        path="/problems-of-the-week"
                        component={POWPage}
                        key={Math.random()} 
                    />
                    <Route
                        exact
                        path="/constitution"
                        component={ConstitutionPage}
                        key={Math.random()} 
                    />
                    <Route
                        exact
                        path="/contact-us"
                        component={ContactUsPage}
                        key={Math.random()} 
                    />
                </Switch>
            </Router>
        );
    }

}