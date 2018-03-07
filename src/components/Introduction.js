import React, { Component, Fragment } from "react";
import styled from 'react-emotion';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

import Hello from './images/hello.png';

const Root = styled('div') `
    position: relative;
    max-width: 581px;
    height: 198px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 275px;
`;

const Title = styled('div') `
  font-size: 35px;
  font-weight: bold;
  z-index: 100;
`;

const Content = styled('div') `
  margin-top: 10px;
  font-size: 20px;
  font-weight: 300;
  z-index: 100;
  text-align: center;
`;

const BackgroundBox = styled('img') `
    position: absolute;
    width: 100%;
`;

class Introduction extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        // , { stiffness: 3, damping: 40 }
        return (<Root {...this.props}>
            <BackgroundBox src={Hello} alt="hello" />
            <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1, { stiffness: 4, damping: 40 }) }}>
                {interpolatingStyle => (<Fragment>
                    <Title style={interpolatingStyle}>I’m Yuri - OH</Title>
                    <Content style={interpolatingStyle}>I’m having a fun and colorful with user experience design.</Content>
                </Fragment>)}
            </Motion>
        </Root>);
    }
}

export default Introduction;

