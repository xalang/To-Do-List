import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);


        this.state = {
            username: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,

        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
          .then(res => console.log(res.data));

        this.setState({
            username: ''
        })
        window.location = '/create';
        
    }

    render() {
        return (
          <div>
            <style>@import url('https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap');</style>
            <style>@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');</style>
            <style>@import url('https://fonts.googleapis.com/css2?family=Electrolize&display=swap');</style>
            <h3 style={{color: '#0080ff',marginLeft: 350,width: 350,border: '2px solid skyblue', textDecoration: 'underline',borderRadius: '10px',fontFamily: 'Indie Flower',fontSize: 36,textAlign: 'center',marginBottom: 25, marginTop: -25}}>Create New User</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label style={{fontFamily: 'Hachi Maru Pop'}}>Username: </label>
                <input  type="text"
                    required
                    style={{fontFamily:'Electrolize', color:'#0080ff'}}
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" style={{border: '1px solid #BEFFC4',backgroundColor:'#BEFFC4', color:'black', fontFamily:'Indie Flower', fontWeight:'bold'}}/>
              </div>
            </form>
          </div>
        )
      }
    }
   

    