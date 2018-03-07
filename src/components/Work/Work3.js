import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import AsianaImage from './images/work3/asiana_main.png';
import WorkImage from './images/work3/asiana_bg.png';

import WorkRecap from './WorkRecap';
import { mq } from '../../utils/StyleUtils';

const Root = styled('div') `
    grid-column: 1;
    width: 100%;
    ${ mq.desktop`
        grid-column: 2;
        grid-row: 1/3;
    ` }
    position: relative;
    display: inline-block;
    /* max-width: 411px; */
    color: #848484;
    background-color: #f5f2ed;
`;

const WorkBox = styled('img') `
    width: 100%;
`;

const AsianaBox = styled('img') `
    position: absolute;
    width: 100%;
    bottom: 95px;
`;

class Work3 extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root {...this.props}>
            <WorkRecap
                color="#848484"
                title="App game"
                content={`Team project\nUX UI design, Motion design`}
            />
            <AsianaBox src={AsianaImage} alt="work1" />
            <WorkBox src={WorkImage} alt="work" />
        </Root>);
    }
}

export default Work3;
