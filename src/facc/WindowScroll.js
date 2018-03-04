import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Root = styled('div') `
`;

class WindowScroll extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }

    state = {
        y: undefined
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = (event) => {
        console.log('the scroll things', event)
        this.setState({ y: window.scrollY });
    };
    render() {
        return this.props.children({ scrollY: this.state.y });
    }
}

export default WindowScroll;