import React, { Component } from "react";
import styled from 'react-emotion';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import Thank from './images/thanks.png';
import { mq } from '../utils/StyleUtils';

const Root = styled('div') `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 250px;
    margin: 0 auto;
`;

const Title = styled('div') `
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
`;

const ContactBox = styled('div') `
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${ mq.desktop`
        flex-direction: row;
    `}
`;

const ContactItem = styled('div') `
    padding: 3px 15px;
    font-size: 20px;
    font-weight: 300;
`;

const BackgroundBox = styled('img') `
    position: absolute;
    width: 100%;
    max-width: 650px;
`;

class Contact extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root>
            <BackgroundBox src={Thank} alt="thank" />
            <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1, { stiffness: 4, damping: 15 }) }}>
                {interpolatingStyle => <div style={{ zIndex: 10, ...interpolatingStyle }}>
                    <Title>Contact /</Title>
                    <ContactBox>
                        <ContactItem>mobile: 010-4145-6425</ContactItem>
                        <ContactItem>mail: yulmu0923@naver.com</ContactItem>
                    </ContactBox> </div>}
            </Motion>
        </Root>);
    }
}

export default Contact;