import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { spring, AnimatedRoute } from 'react-router-transition';

import styled from 'react-emotion';
import Helmet from "react-helmet";
import { ThemeProvider } from 'emotion-theming';
import AOS from 'aos';

import * as squareData from '../lotties/square.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Work from '../pages/Work';
import Contact from '../pages/Contact';
import { breakpoints } from '../utils/StyleUtils';
import theme from '../constants/theme';

const Root = styled('div') `

`;

const Content = styled('div') `
  max-width: ${ breakpoints.desktop}px;
  margin: 0 auto;
  background: ${props => props.theme.backgroundColor};
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
      <ThemeProvider theme={theme}>
        <Router>
          <Root>
            {this._renderHelmet()}
            <Header />

            <Content>
              <AnimatedRoute
                atEnter={{ opacity: 0, }}
                atLeave={{ opacity: spring(0) }}
                atActive={{ opacity: spring(1) }}
                exact path="/" component={Work} />
              <AnimatedRoute
                atEnter={{ opacity: 0, }}
                atLeave={{ opacity: spring(0) }}
                atActive={{ opacity: spring(1) }}
                exact path="/contact" component={Contact} />
            </Content>
          </Root>
        </Router>
      </ThemeProvider>
    );
  }


  _renderHelmet = () => {
    return <Helmet
      title="Yulmu"
      description="Yulmu" keywords="design" />;
  };
}

export default App;
