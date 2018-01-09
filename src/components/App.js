import React, { Component } from 'react';
import styled from 'styled-components';
import { uniqueId, difference } from 'lodash';
import Header from './Header';
import Footer from './Footer';
import ToDoList from './ToDoList';
import { Filter } from '../constants';

const TodoAppStyled = styled.div`
    margin: 0 auto;
    max-width: 550px;
    margin-top: 0.5em;
    padding-top: 0.5em;
`;

const AppTitleStyled = styled.div`
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    font-weight: 100;
    font-size: 3em;
`;

const ContentStyled = styled.div`
    background: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

function filterTodos(todos, filter) {
    switch (filter) {
        case Filter.ACTIVE:
            return todos.filter(todo => !todo.completed);
        case Filter.COMPLETED:
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}

class App extends Component {
    state = {
        todos: [
            { title: 'Learn React', completed: true, editing: false, id: uniqueId() },
            { title: 'Sample App', completed: false, editing: false, id: uniqueId() },
            { title: 'Team Lunch', completed: false, editing: false, id: uniqueId() },
        ],
        selectedFilter: Filter.ALL,
    };

    onEnterNewTodo = (title) => {
        this.setState(({ todos }) => ({
            todos: todos.concat([{ title, completed: false, editing: false, id: uniqueId() }]),
        }));
    };

    onDeleteToDo = (todo) => {
        this.setState(({ todos }) => ({
            todos: difference(todos, [todo]),
        }));
    };

    onUpdateToDo = (oldTodo, newTodo) => {
        this.setState(({ todos }) => {
            const newTodos = [...todos];
            newTodos[todos.indexOf(oldTodo)] = newTodo;

            return {
                todos: newTodos,
            };
        });
    };

    onUpdateSelectedFilter = (selectedFilter) => {
        this.setState({ selectedFilter });
    };

    onUpdateAllCompletedTo = (newCompletedStatus) => {
        this.setState(({ todos }) => ({
            todos: todos.map(todo => ({ ...todo, completed: newCompletedStatus })),
        }));
    };

    onClearCompleted = () => {
        this.setState(({ todos }) => ({
            todos: filterTodos(todos, Filter.ACTIVE),
        }));
    };

    areAllToDosComplete = () =>
        this.state.todos.length && this.state.todos.every(todo => todo.completed);

    render() {
        const { todos, selectedFilter } = this.state;

        const filteredTodos = filterTodos(todos, selectedFilter);
        const todosRemainingCount = (selectedFilter === Filter.ACTIVE
            ? filteredTodos
            : filterTodos(todos, Filter.ACTIVE)
        ).length;

        return (
            <TodoAppStyled>
                <AppTitleStyled>
                    <h1>todos</h1>
                </AppTitleStyled>

                <ContentStyled>
                    <Header
                        onEnterNewTodo={this.onEnterNewTodo}
                        onUpdateAllCompletedTo={this.onUpdateAllCompletedTo}
                        markAllCompleteChecked={this.areAllToDosComplete()}
                    />
                    <ToDoList
                        todos={filteredTodos}
                        onDeleteToDo={this.onDeleteToDo}
                        onUpdateToDo={this.onUpdateToDo}
                    />
                    <Footer
                        todosRemainingCount={todosRemainingCount}
                        selectedFilter={selectedFilter}
                        onUpdateSelectedFilter={this.onUpdateSelectedFilter}
                        onUpdateAllCompletedTo={this.onUpdateAllCompletedTo}
                        onClearCompleted={this.onClearCompleted}
                    />
                </ContentStyled>
            </TodoAppStyled>
        );
    }
}

export default App;
