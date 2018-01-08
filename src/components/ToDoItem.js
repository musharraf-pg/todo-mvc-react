import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const ToDoItemStyled = styled.li`
    font-size: 1.5em;
    padding: .5em 0;
    border-top: 1px #ededed solid;
    display: flex;
    align-items: center;
`;

const CompleteToggleStyled = styled.input.attrs({
    type: "checkbox"
}) `
    width: 40px;
    height: 40px;
    display: block;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    margin-right: 1em;

    &::after {
        content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
    }
    &:checked::after {
        content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
    }
`;

const ToDoItemLabelStyled = styled.label`
    flex: 1;
`;

const ToDoDeleteStyled = styled.a`
    display: none;
    background-image: url(x.png);
    width: 20px;
    height: 20px;
    margin-right: .5em;
    cursor: pointer;

    ${ToDoItemStyled}:hover & {
        display: block;
    }
`;

const ToDoEditStyled = styled.input.attrs({
    type: 'text'
}) `
    flex: 1;
    font-size: 1em;
    display: block;
`;

const ToDoItem = ({ todo }) => {
    let elem;

    if (todo.editing) {
        elem = <ToDoEditStyled value={todo.title} />
    } else {
        elem =
            <Fragment>
                <CompleteToggleStyled checked={todo.completed} />
                <ToDoItemLabelStyled>
                    {todo.title}
                </ToDoItemLabelStyled>
                <ToDoDeleteStyled></ToDoDeleteStyled>
            </Fragment>
    }

    return (
        <ToDoItemStyled>
            {elem}
        </ToDoItemStyled>
    )
};

export default ToDoItem;