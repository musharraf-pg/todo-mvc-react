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

class ToDoItem extends Component {
    state = {
        editText: this.props.todo.title,
    };

    onEditKeyPress = (event) => {
        if (event.which === 13) {
            const newTodo = { ...this.props.todo, title: this.state.editText, editing: false };
            this.props.onUpdateToDo(this.props.todo, newTodo);
        }
    }

    render() {
        const { todo, onDeleteToDo, onUpdateToDo } = this.props;

        let todoItem;

        if (todo.editing) {
            todoItem = <ToDoEditStyled type="text" autoFocus value={this.state.editText} onChange={(event) => this.setState({ editText: event.target.value })} onKeyPress={this.onEditKeyPress}/>
        } else {
            todoItem =
                <Fragment>
                    <CompleteToggleStyled type="checkbox" checked={todo.completed} onChange={() => onUpdateToDo(todo, { ...todo, completed: !todo.completed})} />
                    <ToDoItemLabelStyled onDoubleClick={() => {onUpdateToDo(todo, {...todo, editing: true})}}>
                        {todo.title}
                    </ToDoItemLabelStyled>
                    <ToDoDeleteStyled onClick={() => onDeleteToDo(todo)}/>
                </Fragment>
        }

        return (
            <ToDoItemStyled>
                {todoItem}
            </ToDoItemStyled>
        )
    }
};

ToDoItem.propTypes = {
    todo: ToDoType.isRequired,
    onDeleteToDo: PropTypes.func.isRequired,
    onUpdateToDo: PropTypes.func.isRequired,
};

export default ToDoItem;