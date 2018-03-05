import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Root = styled('p') `
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 16px;
    line-height: 26px;
`;

class WorkIntroduction extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root {...this.props}>Hello. My name is Yuri-OH.<br />
            I design useful and enjoyable<br />
            experiences for the app and web user.<br />
            I love people, design, trip and learning.</Root>);
    }
}

export default WorkIntroduction;
