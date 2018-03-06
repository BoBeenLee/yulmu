import React, { Component } from "react";
import styled from 'react-emotion';
import Headroom from "react-headroom";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { mq } from '../utils/StyleUtils';

const Root = styled('div') `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-top: 20px;
    padding-right: 30px;

    ${ mq.desktop`
        padding-top: 77px;
        padding-right: 80px;
    ` }
`;

const MenuItem = styled(NavLink) `
    position: relative;
    color: ${ props => props.theme.primaryColor};
    text-decoration: none;
    margin-left: 40px;
    text-decoration-color: ${ props => props.theme.primaryColor};

    &:hover {
        /* opacity: 0.6; */
        /* transition: opacity 0.4s ease-in-out; */
        text-decoration: line-through;
    }
`;

const StrokeBox = styled('div') `
    height: 2px;
    background-color: ${ props => props.theme.primaryColor};
`;

class Header extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root>
            <MenuItem
                exact
                strict
                activeStyle={{ "textDecoration": 'line-through' }} to="/">Work</MenuItem>
            <MenuItem
                strict
                activeStyle={{ "textDecoration": 'line-through' }} to="/contact">Contact</MenuItem>
        </Root>);
    }
}

export default Header;
