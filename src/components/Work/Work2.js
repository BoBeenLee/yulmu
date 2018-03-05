import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import DesktopImage from './images/work2/aroma_mac.png';
import BackgroundImage from './images/work2/aroma_bg.png';


const Root = styled('div') `   
    grid-column: 1;
    grid-row: 4;
    position: relative;
    display: inline-block;
    color: ${props => props.theme.primaryColor};
    background-image: url(${BackgroundImage});
    background-size: contain;

    background-repeat: no-repeat;
    background-color: #c5dfce;
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

const WorkBox = styled('img') `
    margin: auto 20px;
`;



class Work2 extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root {...this.props}>
            <Recap>
                <Title>
                    Web Renewal
                    <Divider />
                </Title>
                <Content>
                    <p>
                        Personal Project.
                    </p>
                </Content>
            </Recap>
            <WorkBox src={DesktopImage} alt="desktop" />
        </Root>);
    }
}

export default Work2;
