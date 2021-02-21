import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    
    <tr style = {{tableLayout: 'fixed', width: 100}}>

      <style>@import url('https://fonts.googleapis.com/css2?family=Electrolize&display=swap');</style>
      <td style = {{fontFamily:'Electrolize',color: '#0080ff',fontSize: 16,textAlign: 'center'}}>{props.todo.name}</td>
      <td style = {{fontFamily:'Electrolize',color: '#A157EF',fontSize: 20,width: 100, textAlign: 'center'}}>{props.todo.todoItem}</td>
      <td style={{fontFamily:'Electrolize',color: '#A157EF',fontSize: 16,textAlign: 'center'}}>
        <Link to={"/edit/"+props.todo._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteTodo(props.todo._id) }}>Delete</a>
      </td>
    </tr>
  )

export default class todoList extends Component {

    constructor(props) {
        super(props);

        this.deleteTodo = this.deleteTodo.bind(this);

        this.state= {todos: []};

    }

    componentDidMount() {
        axios.get('http://localhost:5000/todos/')
            .then(response => {
                this.setState({todos: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteTodo(id) {
        axios.delete('http://localhost:5000/todos/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
            //searches array of todos, returns all the elements not having the id of the one being deleted
          todos: this.state.todos.filter(el => el._id !== id)
        })
      }

      todoList() {
        return this.state.todos.map(currenttodo => {
          return <Todo todo={currenttodo} deleteTodo={this.deleteTodo} key={currenttodo._id}/>;
        })
      }

      render() {
        return (
          <div>
             <style>@import url('https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap');</style>
             <style>@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');</style>
            <h3 style={{color: '#0080ff',marginLeft: 400,width: 300,border: '2px solid skyblue', textDecoration: 'underline',borderRadius: '10px',fontFamily: 'Indie Flower',fontSize: 36,textAlign: 'center',marginBottom: 25, marginTop: -25}}>Logged Todos</h3>
            <table className="table">
              <thead style={{background: '#BEFFC4'}}>
                <tr style={{border: '2px solid #73FE81', borderRadius: '20px'}}>
                  <th style={{fontFamily: 'Hachi Maru Pop',textAlign: 'center',width: 50}}>Name</th>
                  <th style={{fontFamily: 'Hachi Maru Pop',textAlign: 'center',width: 600}}>Description</th>
                  <th style={{fontFamily: 'Hachi Maru Pop',textAlign: 'center',width: 100}}>Actions</th>
    
                </tr>
              </thead>
              <tbody>
                { this.todoList() }
              </tbody>
            </table>
          </div>
        )
      }
    }