// main React component for website

import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import TopNavbar from './components/navbar/navbar';

class HomePage extends Component {
    render() {
        return (
            <>
                <TopNavbar />
            </>
        )
    }
}

class EventsPage extends Component {
    render() {
        return (
            <>
                <TopNavbar />
            </>
        )
    }
}

class POWPage extends Component {
    render() {
        return (
            <>
                <TopNavbar />
            </>
        )
    }
}

class ConstitutionPage extends Component {
    render() {
        return (
            <>
                <TopNavbar />
            </>
        )
    }
}

class ContactUsPage extends Component {
    render() {
        return (
            <>
                <TopNavbar />
            </>
        )
    }
}

export default class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/events" component={EventsPage} />
                    <Route exact path="/problems-of-the-week" component={POWPage} />
                    <Route exact path="/constitution" component={ConstitutionPage} />
                    <Route exact path="/contact-us" component={ContactUsPage} />
                </Switch>
            </Router>
        );
    }

}