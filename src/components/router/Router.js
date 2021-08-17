import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getCurrentPath = () => {
    const path = document.location.pathname;
    return path.substring(path.lastIndexOf('/'));
};

export class Router extends Component {
    state = {
        route: getCurrentPath()
    };
    handleLinkClick = (route) => {
        this.setState({
            route
        });
        history.pushState(null, '', route);
    };

    static childContextTypes = {
        route: PropTypes.string,
        linkHandler: PropTypes.func
    };

    getChildContext() {
        return {
            route: this.state.route,
            linkHandler: this.handleLinkClick
        };
    }
    //window.onpopstate fires when back or forward browser button is hit
    // this allows for back/forward to .../active -> ../complete -> .../whatever
    // URL to have the properly filtered TODO list items!
    componentDidMount() {
        window.onpopstate = () => {
            this.setState({ route: getCurrentPath() });
        };
    }
    render() {
        return <div>{this.props.children}</div>;
    }
}
