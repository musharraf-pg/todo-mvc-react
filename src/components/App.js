import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import ToDoList from './ToDoList';
import PropTypes from 'prop-types';
import { Filter } from '../constants';
import { uniqueId, difference } from 'lodash';

const TodoAppStyled = styled.div`
  margin: 0 auto;
  max-width: 550px;    
  margin-top: .5em;
  padding-top: .5em;
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

const App = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { title: "Learn React", completed: true, editing: false, id: uniqueId() },
        { title: "Sample App", completed: false, editing: false, id: uniqueId() },
        { title: "Team Lunch", completed: false, editing: false, id: uniqueId() },
      ],
      selectedFilter: Filter.ALL
    }
  };

  onEnterNewTodo = (title) => {
    this.setState({
      todos: this.state.todos.concat([{ title: title, completed: false, editing: false, id: uniqueId() }])
    });
  };

  onDeleteToDo = (todo) => {
    this.setState({
      todos: difference(this.state.todos, [todo])
    });
  };

  // onToggleToDoComplete = (todo) => {
  //   const newTodos = [ ...this.state.todos ];
  //   const newTodo = newTodos.find((item) => item.id === todo.id);
  //   newTodo.completed = !newTodo.completed;

  //   this.setState({
  //     todos: newTodos
  //   });
  // };

  onUpdateToDo = (oldTodo, newTodo) => {
    const newTodos = [ ...this.state.todos ];
    newTodos[this.state.todos.indexOf(oldTodo)] = newTodo;

    this.setState({
      todos: newTodos
    });
  };

  onUpdateSelectedFilter = (selectedFilter) => {
    this.setState({
      selectedFilter
    })
  };

  onUpdateAllCompletedTo = (newCompletedStatus) => {
    this.setState({
      todo: this.state.todos.map(todo => ({...todo, completed: newCompletedStatus}))
    });
  }

  render() {
    const {todos, selectedFilter} = this.state;

    const filteredTodos = filterTodos(todos, selectedFilter);
    const todosRemainingCount = (selectedFilter === Filter.ACTIVE ? filteredTodos : filterTodos(todos, Filter.ACTIVE)).length;

    return (
      <TodoAppStyled>
        <AppTitleStyled>
          <h1>todos</h1>
        </AppTitleStyled>

        <ContentStyled>
          <Header onEnterNewTodo={this.onEnterNewTodo} onUpdateAllCompletedTo={this.onUpdateAllCompletedTo}/>
          <ToDoList todos={filteredTodos} onDeleteToDo={this.onDeleteToDo} onToggleToDoComplete={this.onToggleToDoComplete} onEditToDo={this.onEditToDo} onStartEditTodo={this.onStartEditTodo} onUpdateToDo={this.onUpdateToDo}/>
          <Footer todosRemainingCount={todosRemainingCount} selectedFilter={selectedFilter} onUpdateSelectedFilter={this.onUpdateSelectedFilter} onUpdateAllCompletedTo={this.onUpdateAllCompletedTo}/>
        </ContentStyled>
      </TodoAppStyled>
    );
  }
};

export default App;