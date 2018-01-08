import React, { Component } from 'react';
import styled from 'styled-components';
import { Filter } from './App';

const FooterStyled = styled.div`
    padding: 10px 16px;
    background-color: white;
    border-top: 1px #ededed solid;
    color: #777;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);    
`;

const FilterCategoryStyled = styled.a.attrs({
    href: "#"
}) `
    display: inline-block;
    padding: 4px 8px;
    text-align: center;

    ${ props => props.selected && `
        border: 1px solid rgba(175, 47, 47, 0.2);
        border-radius: 3px;
    ` }
`;

const ClearCompletedStyled = styled.a.attrs({
    href: "#"
}) `
    &:hover {
        text-decoration: underline;        
    }
`;

const Footer = ({ todosRemainingCount, activeFilter }) => (
    <FooterStyled>
        <div>{todosRemainingCount} items left</div>
        <div>
            <FilterCategoryStyled selected={activeFilter === Filter.ALL}>All</FilterCategoryStyled>
            <FilterCategoryStyled selected={activeFilter === Filter.ACTIVE}>Active</FilterCategoryStyled>
            <FilterCategoryStyled selected={activeFilter === Filter.COMPLETED}>Completed</FilterCategoryStyled>
        </div>
        <ClearCompletedStyled>
            Clear completed
        </ClearCompletedStyled>
    </FooterStyled>
);

export default Footer;