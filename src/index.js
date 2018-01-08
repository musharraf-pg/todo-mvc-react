import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Filter } from './components/App';
import registerServiceWorker from './registerServiceWorker';

const todos = [
    { title: "Learn React", completed: true, editing: false, id: Date.now() },
    { title: "Sample App", completed: false, editing: false, id: Date.now() + 1 },
    { title: "Team Lunch", completed: true, editing: false, id: Date.now() + 2 },
];

ReactDOM.render(<App todos={todos} selectedFilter={Filter.ALL} />, document.getElementById('root'));
registerServiceWorker();
