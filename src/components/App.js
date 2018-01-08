import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import ToDoList from './ToDoList';
import PropTypes from 'prop-types';
import { Filter } from '../constants';
import _ from 'lodash';

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
      return todos.filter(todo => todos.completed);
    default:
      return todos;
  }
}

// Defaults
const todos = [
  { title: "Learn React", completed: true, editing: false, id: _.uniqueId() },
  { title: "Sample App", completed: false, editing: false, id: _.uniqueId() },
  { title: "Team Lunch", completed: false, editing: false, id: _.uniqueId() },
];
const selectedFilter = Filter.ALL;

const App = () => {
  const filteredTodos = filterTodos(todos, selectedFilter);
  const todosRemainingCount = (selectedFilter === Filter.ACTIVE ? filteredTodos : filterTodos(todos, Filter.ACTIVE)).length;

  return (
    <TodoAppStyled>
      <AppTitleStyled>
        <h1>todos</h1>
      </AppTitleStyled>

      <ContentStyled>
        <Header />
        <ToDoList todos={filteredTodos} />
        <Footer todosRemainingCount={todosRemainingCount} selectedFilter={selectedFilter} />
      </ContentStyled>
    </TodoAppStyled>
  );
};

export default App;