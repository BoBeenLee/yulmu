import React, { Component } from "react";
import styled from 'react-emotion';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import WorkImage from './images/work5/iot_main.png';
import WorkVideo from './images/work5/iot_opening.gif';
import DesktopImage from './images/work5/iot_mac.png';
import WorkRecap from './WorkRecap';
import { mq } from '../../utils/StyleUtils';


const Root = styled('div') `
    grid-column: 1;
    width: 100%;
    ${ mq.desktop`
        grid-column: 1/3;
        grid-row: 5;
    `}
    display: flex;
    flex-direction: column;
    ${ mq.desktop`
        flex-direction: row;
    `}
    color: ${ props => props.theme.secondaryColor};
    background-color: #f0a0a0;
    padding-top: 40px;
    padding-bottom: 25px;
`;

const Divider = styled('div') `
    height: 2px;
    background-color: ${ props => props.theme.secondaryColor};
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
  margin-bottom: 33px;
`;

const WorkBox = styled('div') `
    margin: auto 82px;
`;

const DesktopContentBox = styled('img') `
    max-width: 510px;
    padding-top: 18px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 123px;
    cursor: pointer;
    /* &:hover {
        animation: fade-In 0.6s ease-out;
        transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: scale3D(1.04, 1.04, 1);
    } */
`;

const DesktopBox = styled('div') `
    background-image: url(${DesktopImage});
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    ${ mq.desktop`
        margin-left: 84px;
    `}
`;

class Work5 extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root {...this.props}>
            <WorkRecap
                style={{ paddingTop: 0 }}
                color="#fff"
                noDivider
                title="Interactive web design"
                content={`Team project\nUX UI design, 3d design`}
            />

            <DesktopBox>
                <a href="internet/main.html" target="_blank">
                    <DesktopContentBox src={WorkVideo} alt="work" />
                </a>
            </DesktopBox>
        </Root>);
    }
}

// https://www.youtube.com/watch?v=ysz5S6PUM-U
export default Work5;
