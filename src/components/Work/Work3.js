import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import AsianaImage from './images/work3/asiana_main.png';
import WorkImage from './images/work3/asiana_bg.png';

const Root = styled('div') `
    grid-column: 2;
    grid-row: 1/3;
    position: relative;
    display: inline-block;
    /* max-width: 411px; */
    color: #848484;
    background-color: #f5f2ed;
`;

const Divider = styled('div') `
    height: 2px;
    background-color: #848484;
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

const WorkBox = styled('img') `
    width: 100%;
`;

const AsianaBox = styled('img') `
    position: absolute;
    left: 22px;
    bottom: 95px;
`;

class Work3 extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root {...this.props}>
            <Recap>
                <Title>
                    App game
                    <Divider />
                </Title>
                <Content>
                    <p>
                        Team project.<br />
                        UX UI design, Motion design<br />
                    </p>
                </Content>
            </Recap>
            <AsianaBox src={AsianaImage} alt="work1" />
            <WorkBox src={WorkImage} alt="work" />
        </Root>);
    }
}

export default Work3;
