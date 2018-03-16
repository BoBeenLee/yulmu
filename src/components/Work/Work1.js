import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import WorkImage from './images/work1/work1.gif';
import PhoneImage from './images/work1/phone1.png';
import WorkRecap from './WorkRecap';
import { mq } from '../../utils/StyleUtils';

const Root = styled('a') `
    grid-column: 1;
    width: 100%;
    ${ mq.desktop`
        grid-column: 1;
        grid-row: 2/4;
    ` }
    display: inline-block;
    color: ${ props => props.theme.secondaryColor};
    background-color: #c9d2db;
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

class Work1 extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root {...this.props} href="https://drive.google.com/open?id=1SmCBVjgWwUXdyzPIl5y9RulmFtl2Cyd-" target="_blank">
            <WorkRecap
                color="#fff"
                title="App game"
                content={`Team project.\nUX UI design, Motion design`}
            />
            <PhoneBox>
                <PhoneContentBox src={WorkImage} alt='work' />
            </PhoneBox>
        </Root>);
    }
}

export default Work1;
