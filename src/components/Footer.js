import React, { Component } from 'react';
import styled from 'styled-components';
import { Filter } from '../constants';
import PropTypes from 'prop-types';

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

const FilterCategoryStyled = styled.a`
    display: inline-block;
    padding: 4px 8px;
    text-align: center;

    ${props => props.selected && `
        border: 1px solid rgba(175, 47, 47, 0.2);
        border-radius: 3px;
    `}
`;

const ClearCompletedStyled = styled.a`
    &:hover {
        text-decoration: underline;        
    }
`;

const Footer = ({ todosRemainingCount, selectedFilter }) => (
    <FooterStyled>
        <div>{todosRemainingCount} {`item${todosRemainingCount === 1 ? '' : 's'}`} left</div>
        <div>
            <FilterCategoryStyled href="#" selected={selectedFilter === Filter.ALL}>All</FilterCategoryStyled>
            <FilterCategoryStyled href="#" selected={selectedFilter === Filter.ACTIVE}>Active</FilterCategoryStyled>
            <FilterCategoryStyled href="#" selected={selectedFilter === Filter.COMPLETED}>Completed</FilterCategoryStyled>
        </div>
        <ClearCompletedStyled href="#">
            Clear completed
        </ClearCompletedStyled>
    </FooterStyled>
);

Footer.propTypes = {
    todosRemainingCount: PropTypes.number.isRequired,
    selectedFilter: PropTypes.string.isRequired
};

export default Footer;