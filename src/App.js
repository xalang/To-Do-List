import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from "./components/navbar.component";
import TodoList from "./components/todo-list.component";
import EditTodo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.component";
import CreateUser from "./components/create-user.component";



function App() {
  return (
    <Router>
      <style>@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');</style>
      <h1 style={{marginLeft: 20,marginTop: 10,marginBottom:-50, fontFamily: "Julius Sans One", fontSize: 12, fontWeight: 'bold'}}>Created By: Andy Lang</h1>
      <div className = "container">
      <Navbar/>
      <br/>
      <Route path = "/" exact component={TodoList} />
      <Route path = "/edit/:id" component={EditTodo} />
      <Route path = "/create" component={CreateTodo} />
      <Route path = "/user" component={CreateUser} />
      </div>
    </Router>

  );
}

export default App;
