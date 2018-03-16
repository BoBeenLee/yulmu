import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { mq } from '../../utils/StyleUtils';

const Root = styled('div') `
    padding-top: 15px;
    padding-left: 10px;
    color: ${ props => props.color};

    /* &:hover {
        animation: fade-In 0.6s ease-out;
        transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: scale3D(1.00, 1.20, 1);
    } */
    ${ mq.desktop`
        padding-top: 36px;
        padding-left: 38px;
    `}
`;

const Divider = styled('div') `
    height: 2px;
    background-color: ${ props => props.color};
    margin-top: 10px;
    margin-bottom: 0px;
    display: ${ props => props.noDivider ? 'none' : 'block'};
`;

const Title = styled('div') `
   display: inline-block;
`;

const Content = styled('div') `
  font-size: 15px;
  font-style: oblique;
  line-height: 25px;
  margin-bottom: 33px;
`;

class WorkRecap extends Component {
    static propTypes = {
    }
    static defaultProps = {
        noDivider: false
    }
    render() {
        const { title, content, color, noDivider, ...rest } = this.props;
        return (<Root {...rest} color={color}>
            <Title>
                {title}
                <Divider noDivider={noDivider} color={color} />
            </Title>
            <Content>
                <pre>
                    {content}
                </pre>
            </Content>
        </Root>);
    }
}

export default WorkRecap;
