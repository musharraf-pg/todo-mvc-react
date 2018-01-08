import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import xPng from '../static/x.png';
import checkedSvg from '../static/checked.svg';
import uncheckedSvg from '../static/unchecked.svg';
import PropTypes from 'prop-types';
import ToDoType from '../types/ToDoType';

const ToDoItemStyled = styled.li`
    font-size: 1.5em;
    padding: .5em 0;
    border-top: 1px #ededed solid;
    display: flex;
    align-items: center;
`;

const CompleteToggleStyled = styled.input`
    width: 40px;
    height: 40px;
    display: block;
    appearance: none;
    outline: none;
    margin-right: 1em;

    &::after {
        content: url(${uncheckedSvg});
    }
    &:checked::after {
        content: url(${checkedSvg});
    }
`;

const ToDoItemLabelStyled = styled.label`
    flex: 1;
`;

const ToDoDeleteStyled = styled.a`
    display: none;
    background-image: url(${xPng});
    width: 20px;
    height: 20px;
    margin-right: .5em;
    cursor: pointer;

    ${ToDoItemStyled}:hover & {
        display: block;
    }
`;

const ToDoEditStyled = styled.input`
    flex: 1;
    font-size: 1em;
    display: block;
`;

const ToDoItem = ({ todo }) => {
    let todoItem;

    if (todo.editing) {
        todoItem = <ToDoEditStyled type="text" value={todo.title} />
    } else {
        todoItem =
            <Fragment>
                <CompleteToggleStyled type="checkbox" checked={todo.completed} />
                <ToDoItemLabelStyled>
                    {todo.title}
                </ToDoItemLabelStyled>
                <ToDoDeleteStyled />
            </Fragment>
    }

    return (
        <ToDoItemStyled>
            {todoItem}
        </ToDoItemStyled>
    )
};

ToDoItem.propTypes = {
    todo: ToDoType.isRequired
};

export default ToDoItem;