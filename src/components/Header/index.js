import React, { Component } from 'react'
import styled from 'react-emotion'
import { theme } from '../../themes/theme'
import Link from '../Link'

import Icon from '../../images/fin-icon.svg'

const Header = props => {
    return (
        <Wrapper href={props.url} target="_blank">
            <DefinitionTitle>
                <h1>{props.title}</h1>
            </DefinitionTitle>
            <Brand>
                <Read> read on finimize </Read> <Logo src={Icon} width="34" alt="finimize" />
            </Brand>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.a`
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    flex-shrink: 0;
    padding: 8px 24px;
    text-decoration: none;
    display: flex;
    color: #999;
    font-size: 18px;
    background-color: #f6f9fc;
    z-index: 999;
    font-weight: 700;
    align-items: center;
    box-sizing: border-box;
    flex-wrap: wrap;
    @media (max-width: 400px) {
        padding: 8px 12px;
    }
`

const DefinitionTitle = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        ${props => props.theme.fonts.style.h6};
        align-self: center;
        display: block;
        margin: 0;
        padding: 0;
    }
`

const Brand = styled.div`
    align-items: center;
    margin-left: auto;
    display: flex;
    box-sizing: border-box;
    align-self: center;
    padding: 4px 0;
`

const Logo = styled.img`
    margin-left: 10px;

    @media (max-width: 320px) {
        ${Wrapper}:hover & {
            display: none;
        }
    }
`

const Read = styled.div`
    ${props => props.theme.fonts.style.normal};
    transition: 100ms linear;
    opacity: 0;
    transform: translate(0px, 5px);
    color: ${props => props.theme.colors.fmzBrandM};
    font-weight: 400;
    line-height:21px;

    ${Wrapper}:hover & {
        opacity: 1;
        transform: translate(0px, 0px);
    }

     @media (max-width: 320px) {
         display:none;
        ${Wrapper}:hover & {
            display: block;
        }
`
