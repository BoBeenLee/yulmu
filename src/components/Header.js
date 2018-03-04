import React, { Component } from "react";
import styled from 'react-emotion';
import Headroom from "react-headroom";
import PropTypes from 'prop-types';

const Root = styled('div') `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 100px;
    background: #fff;
`;

const MenuItem = styled('div') `
    margin-right: 30px;
`;

class Header extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Headroom>
            <Root>
                <MenuItem>Portfolio</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Root>
        </Headroom>);

    }
}

export default Header;
