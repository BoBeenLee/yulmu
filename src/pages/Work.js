import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import { Work1, Work2, Work3, Work4, Work5, WorkIntroduction } from '../components/Work';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
import { mq } from '../utils/StyleUtils';

const Root = styled('div') `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 213px;
`;

const IntroBox = styled('div') `
    height: 284px;
`;

const WorkBox = styled('div') `
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    ${ mq.desktop`
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 36px;
    ` }
`;

const Divider = styled('div') `
    grid-column: 1/3;
    height: 2px;
    background-color: #eee;
    margin-top: 81px;
`;

class Work extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root>
            {/* <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1, { stiffness: 1 }) }}>
            {style => <div style={style}>1</div>}
          </Motion> */}
            <Introduction />
            <WorkBox>
                <WorkIntroduction />
                <Work1 />
                <Work2 />
                <Work3 />
                <Work4 />
                <Work5 />
                <Divider />
            </WorkBox>
            <Footer />
        </Root>);
    }
}

export default Work;
