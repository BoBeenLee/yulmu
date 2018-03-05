import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { mq } from '../utils/StyleUtils';

const Root = styled('div') `
    padding-top: 174px;
    margin: 0 auto;
`;

const Title = styled('div') `
    color: ${props => props.theme.primaryColor};
    font-size: 35px;
    font-weight: bold;
    text-align: center;
`;

const ContactBox = styled('div') `
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${ mq.desktop`
        flex-direction: row;
    `}
`;

const ContactItem = styled('div') `
    color: ${props => props.theme.lineColor};
    padding: 3px 15px;
    font-size: 20px;
    font-weight: 300;
`;

class Contact extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root>
            <Title>Contact /</Title>
            <ContactBox>
                <ContactItem>mobile: 010-4145-6425</ContactItem>
                <ContactItem>mail: yulmu0923@naver.com</ContactItem>
            </ContactBox>
        </Root>);
    }
}

export default Contact;