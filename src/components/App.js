import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import ToDoList from './ToDoList';

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

const BodyStyled = styled.div`
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

class App extends Component {
  render() {
    return (
      <TodoAppStyled>
        <AppTitleStyled>
          <h1>todos</h1>
        </AppTitleStyled>

        <BodyStyled>
          <Header />
          <ToDoList />
          <Footer />
        </BodyStyled>
      </TodoAppStyled>

    );
  }
}

export default App;
