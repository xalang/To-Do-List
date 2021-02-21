import React, {Component} from 'react';
import axios from 'axios';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeTodoItem = this.onChangeTodoItem.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            todoItem: '',
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/todos/'+this.props.match.params.id)
        .then(response => {
          this.setState({
            name: response.data.name,
            todoItem: response.data.todoItem,
          })   
        })

        .catch(function (error) {
          console.log(error);
        })
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState ({
                        users: response.data.map(user => user.username),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeUsername(e) {
        this.setState({
            name: e.target.value
        });
    }

    
    onChangeTodoItem(e) {
        this.setState({
            todoItem: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const todo = {
            name: this.state.name,
            todoItem: this.state.todoItem

        }

        console.log(todo)

        axios.post('http://localhost:5000/todos/update/'+this.props.match.params.id, todo)
         .then(res => console.log(res.data));
  

        window.location = '/';
    }

    render() {
        return (
            <div>
                <style>@import url('https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap');</style>
                <style>@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');</style>
                <style>@import url('https://fonts.googleapis.com/css2?family=Electrolize&display=swap');</style>
                <h3 style={{color: '#0080ff',marginLeft: 350,width: 350,border: '2px solid skyblue', textDecoration: 'underline',borderRadius: '10px',fontFamily: 'Indie Flower',fontSize: 36,textAlign: 'center',marginBottom: 25, marginTop: -25}}>Edit Todo Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label style={{fontFamily: 'Hachi Maru Pop'}}>Username: </label>
                    <select ref="userInput"
                        required
                        style={{fontFamily:'Electrolize', color:'#0080ff'}}
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user) {
                            return <option 
                                key={user}
                                value={user}>{user}
                                </option>;
                            })
                        }
                    </select>
                    </div>
                     <div>
                        <div className="form-group"> 
                        <label style={{fontFamily: 'Hachi Maru Pop'}}>Todo Item: </label>
                        <input  type="text"
                            required
                            style={{fontFamily: 'Electrolize', color: '#A157EF'}}
                            className="form-control"
                            value={this.state.todoItem}
                            onChange={this.onChangeTodoItem}
                            />
                        </div>
                    
                    </div>
                    <div className="form-group">
                    <input type="submit" value="Edit Todo Log" className="btn btn-primary" style={{border: '1px solid #BEFFC4',backgroundColor:'#BEFFC4', color:'black', fontFamily:'Indie Flower', fontWeight:'bold'}}/>
                    </div>
                </form>
    </div>
    
    )
  }
}
