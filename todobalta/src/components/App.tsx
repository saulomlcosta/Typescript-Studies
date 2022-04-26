import React from 'react';
import Navbar from './Navbar';
import TodoContext from '../contexts/TodoContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AddTodo from "../routes/AddTodoRoute";
import TodoListRoute from "../routes/TodoListRoute";



const App = () => {
  return (
    <TodoContext>
      <BrowserRouter>
        <Navbar></Navbar>
        <br />
        <div className="uk-container">
          <Routes>
            <Route path="/" element={<TodoListRoute />}></Route>
            <Route path="create" element={<AddTodo />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </TodoContext>
  );
}

export default App;