import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import WorkImage from './images/work4/pidget.gif';
import PhoneImage from './images/work1/phone1.png';

import WorkRecap from './WorkRecap';
import { mq } from '../../utils/StyleUtils';

const Root = styled('a') `
    grid-column: 1;
    width: 100%;
    ${ mq.desktop`
        grid-column: 2;
        grid-row: 3/5;
    `}
    display: inline-block;
    color: ${ props => props.theme.secondaryColor};
    background-color: #ac9ce2;
    text-decoration: none;
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
  line-height: 25px;
  margin-bottom: 33px;
`;

const PhoneContentBox = styled('img') `
    width: 220px;
    padding-top: 54px;
    padding-left: 0px;
    padding-right: 36px;
    padding-bottom: 83px;
`;

const PhoneBox = styled('div') `
    background-image: url(${PhoneImage});
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
`;

class Work4 extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root {...this.props} href="https://drive.google.com/file/d/1mMtKoHO9dGGJSe0GY9tqtQA-bdniHhHD/view" target="_blank">
            <WorkRecap
                color="#fff"
                title="App game"
                content={`Team project\nGUI design, Interaction design`}
            />
            <PhoneBox>
                <PhoneContentBox src={WorkImage} alt='work' />
            </PhoneBox>
        </Root>);
    }
}

export default Work4;
