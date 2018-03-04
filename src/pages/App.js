import React, { Component } from 'react';
import Lottie from 'react-lottie';
import styled from 'react-emotion';
import { Motion, spring } from 'react-motion';
import AOS from 'aos';

import * as squareData from '../lotties/square.json';
import Header from '../components/Header';

// import './App.css';

const Root = styled('div') `
  height: 1500px;
  background: #eee;
`;


const Content = styled('div') `

`;

const ItemBox = styled('div') `
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 700px;
`;

const FirstItem = styled('div') `
  width: 300px;
  height: 300px;
  background: skyblue;
`;


class App extends Component {
  state = { isStopped: false, isPaused: false };

  constructor(props) {
    super(props);
    AOS.init();
  }

  componentDidMount() {

  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: squareData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <Root>
        <Header />
        <Content>
          {/* <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1, { stiffness: 1 }) }}>
            {style => <div style={style}>1</div>}
          </Motion> */}
          <ItemBox>Hello World</ItemBox>

          <ItemBox>2</ItemBox>
          <ItemBox>3</ItemBox>
          <ItemBox>
            <div data-aos="fade-up">Hello World</div>
          </ItemBox>
          <ItemBox>4</ItemBox>

        </Content>
      </Root>
    );
  }
}

export default App;
