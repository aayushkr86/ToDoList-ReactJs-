import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './main';
import './app.css';

var tasklist = ["Task 1","Task 2","Task 3"];

var tasks = localStorage.getItem('storedTasks');

if(tasks){
   tasklist = JSON.parse(tasks);
}

ReactDOM.render(<Todo tasks={tasklist} />, document.getElementById('todo'));
