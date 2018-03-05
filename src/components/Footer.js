import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import FbIcon from './images/fb.png';
import InstaIcon from './images/insta.png';
import MailIcon from './images/mail.png';

import { breakpoints } from '../utils/StyleUtils';

const Root = styled('div') `
    max-width: ${ breakpoints.desktop}px;
    margin: 0 auto;
    margin-top: 45px;
    margin-bottom: 106px;
`;

const CopyrightBox = styled('div') `
    font-size: 12px;
    text-align: center;
    margin-bottom: 27px;
    color: ${ props => props.theme.lineColor};
`;

const ContactBox = styled('div') `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ContactIcon = styled('img') `
    margin: 0 14px;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
        transition: opacity 0.4s ease-in-out;
    }
`;

class Footer extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root>
            <CopyrightBox>
                Copyright © 2018, Yuri OH.
            </CopyrightBox>
            <ContactBox>
                <a href="https://www.facebook.com/ohyuri55" target="_blank" ><ContactIcon src={FbIcon} alt="fb" /></a>
                <a href="https://www.instagram.com/o.newwwri/?hl=ko" target="_blank"><ContactIcon src={InstaIcon} alt="insta" /></a>
                <a href="#"><ContactIcon src={MailIcon} alt="mail" /></a>
            </ContactBox>
        </Root>);
    }
}

export default Footer;
