import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0,0.004);
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
`;

const MarkAllCompleteStyled = styled.input`
    -webkit-appearance: none;
    font-size: 0px;
    outline: none;
    color: #e6e6e6;

    &:checked {
        color: #737373;
    }

    &::after {
        -webkit-appearance: none;
        content: '⌄';
        font-size: 3rem;
        display: block;
        line-height: 0;
        transform: translateY(-.05em);
        padding: 0 .5rem;
    }
`;

const NewTodoFieldStyled = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    font-size: 1.5em;
    font-weight: 100;
    background-color: unset;
    padding: 16px;
    border: none;
    outline: none;
    flex: 1;

    &::-webkit-input-placeholder {
        opacity: .2;
        font-style: italic;        
    }
`;

const Header = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newToDoTitle: ''
        }
    }

    onInputChange = (event) => {
        this.setState({newToDoTitle: event.target.value});
    };

    onKeyPress = (event) => {
        if (event.which === 13) {
            this.props.onEnterNewTodo(this.state.newToDoTitle); 

            // Clear input
            this.setState({ newToDoTitle: ''});
        }
    };

    render() {
        return (
            <HeaderStyled>
                <MarkAllCompleteStyled type="checkbox" checked={this.props.markAllCompleteChecked} onChange={() => this.props.onUpdateAllCompletedTo(!this.props.markAllCompleteChecked)}/>
                <NewTodoFieldStyled type="text" placeholder="What needs to be done?" value={this.state.newToDoTitle} onChange={this.onInputChange} onKeyPress={this.onKeyPress}/>
            </HeaderStyled>
        );
    }
};

export default Header;