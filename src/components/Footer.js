import React, { Component } from 'react';
import styled from 'styled-components';

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
`;

const ClearCompletedStyled = styled.a`
    &:hover {
        text-decoration: underline;        
    }
`;

// State: which category is selected

const Footer = () => (
    <FooterStyled>
        <div>0 items left</div>
        <div>
            <FilterCategoryStyled href="#">All</FilterCategoryStyled>
            <FilterCategoryStyled href="#">Active</FilterCategoryStyled>
            <FilterCategoryStyled href="#">Completed</FilterCategoryStyled>
        </div>
        <ClearCompletedStyled href="#">
            Clear completed
        </ClearCompletedStyled>
    </FooterStyled>
);

export default Footer;