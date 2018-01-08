import React, { Component } from 'react';
import styled from 'styled-components';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';
import ToDoType from '../types/ToDoType';

const ToDoListStyled = styled.ul`
    margin: 1em 0;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ToDoList = ({ todos }) => (
    <ToDoListStyled>
        {todos.map(todo => (
            <ToDoItem key={todo.id} todo={todo} />
        ))}
    </ToDoListStyled>
);

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(ToDoType).isRequired
};

export default ToDoList;