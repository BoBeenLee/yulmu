import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import WorkImage from './images/work1/work1.gif';
import PhoneImage from './images/work1/phone1.png';

const Root = styled('div') `
    grid-column: 1;
    grid-row: 2/4;
    display: inline-block;
    color: ${ props => props.theme.secondaryColor};
    background-color: #c9d2db;
`;

const Divider = styled('div') `
    height: 2px;
    background-color: #fff;
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

const PhoneContentBox = styled('img') `
    position: absolute;
    width: 218px;
    top: 51px;
    left: 14px;
`;

const PhoneBox = styled('img') `
    
`;

class Work1 extends Component {
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
            <WorkBox>
                <PhoneContentBox src={WorkImage} alt='work' />
                <PhoneBox src={PhoneImage} alt="phone" />
            </WorkBox>
        </Root>);
    }
}

export default Work1;
