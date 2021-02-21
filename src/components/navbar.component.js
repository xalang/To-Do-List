import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      
      <nav className="navbar navbar-expand-lg" style={{marginBottom: -60, marginTop: 50}}>
        <style>@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');</style>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link" style= {{marginLeft: 150,fontFamily: 'Indie Flower',fontSize: 20,color: 'black'}}>Todos</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link" style= {{marginLeft: 525,fontFamily: 'Indie Flower',fontSize: 20,color: 'black'}}>Create Todo Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link" style= {{marginLeft: 25,fontFamily: 'Indie Flower',fontSize: 20,color: 'black'}}>Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}