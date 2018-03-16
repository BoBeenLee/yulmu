import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import AsianaImage from './images/work3/asiana_main.png';
import WorkImage from './images/work3/asiana_bg.png';

import WorkRecap from './WorkRecap';
import { mq } from '../../utils/StyleUtils';
import urls from '../../constants/urls';

const Root = styled('a') `
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
    text-decoration: none;
`;

const WorkBox = styled('img') `
    width: 100%;
`;

const AsianaBox = styled('img') `
    position: absolute;
    bottom: 5px;
    left: -40px;
    min-width: 680px;
    width: 100%;
`;

class Work3 extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }

    render() {
        return (<Root {...this.props} href={urls.asiana} target="_blank">
            <WorkRecap
                color="#848484"
                title="AVOD Renewal"
                content={`Team Project.\nUX UI design, GUI design`}
            />
            <AsianaBox src={AsianaImage} alt="work1" />
            <WorkBox width="381" src={WorkImage} alt="work" />
        </Root>);
    }
}

export default Work3;
