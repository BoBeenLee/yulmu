import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import DesktopImage from './images/work2/aroma_mac.png';
import BackgroundImage from './images/work2/aroma_bg.png';

import WorkRecap from './WorkRecap';
import { mq } from '../../utils/StyleUtils';


const Root = styled('a') `
    grid-column: 1;
    width: 100%;
    ${ mq.desktop`
        grid-column: 1;
        grid-row: 4;
    ` }
    position: relative;
    display: inline-block;
    color: ${props => props.theme.primaryColor};
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #c5dfce;
    text-decoration: none;
`;

const Divider = styled('div') `
    height: 2px;
    background-color: ${props => props.theme.primaryColor};
    margin-top: 10px;
    margin-bottom: 0px;
`;

const Recap = styled('div') `
    padding-top: 36px;
    padding-left: 38px;
`;

const Title = styled('div') `
   display: inline-block;
`;

const Content = styled('div') `
  font-size: 15px;
  font-style: oblique;
  margin-bottom: 25px;
`;

const DesktopContentBox = styled('img') `
`;

const WorkBox = styled('div') `
    text-align: center;
`;



class Work2 extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root {...this.props} href="/pdf/aroma.pdf" target="_blank">
            <WorkRecap
                color="#4a4a4a"
                title="Web Renewal"
                content={`Personal Project.`}
            />
            <WorkBox>
                <DesktopContentBox width="411" src={DesktopImage} alt="desktop" />
            </WorkBox>
        </Root>);
    }
}

export default Work2;
