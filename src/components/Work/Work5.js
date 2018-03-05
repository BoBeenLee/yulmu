import React, { Component } from "react";
import styled from 'react-emotion';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import WorkImage from './images/work5/iot_main.png';
import WorkVideo from './images/work5/iot_opening.gif';
import DesktopImage from './images/work5/iot_mac.png';
import { mq } from '../../utils/StyleUtils';


const Root = styled('div') `
    grid-column: 1/3;
    grid-row: 5;
    display: flex;
    flex-direction: row;
    color: ${ props => props.theme.secondaryColor};
    background-color: #f0a0a0;
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
    position: relative;
    margin: auto 82px;
`;

const DesktopContentBox = styled('img') `
    max-width: 510px;
    position: absolute;
    top: 60px;
    left: 20px;
`;

const DesktopBox = styled('img') `
    padding-top: 40px;
    padding-bottom: 25px;
`;

class Work5 extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root {...this.props}>
            <Recap>
                <Title>
                    Interactive web design
                </Title>
                <Content>
                    <p>
                        Team project.<br />
                        UX UI design, 3d design<br />
                    </p>
                </Content>
            </Recap>
            <WorkBox>
                <DesktopContentBox src={WorkVideo} alt="work" />
                <DesktopBox src={DesktopImage} alt="desktop" />
            </WorkBox>
        </Root>);
    }
}

// https://www.youtube.com/watch?v=ysz5S6PUM-U
export default Work5;
