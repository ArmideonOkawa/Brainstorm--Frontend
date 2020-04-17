import React, { Component } from 'react';
import './App.css'
import 'semantic-ui-less/semantic.less'
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './Login'
import Signup from './components/Signup'
import ProjectContainer from './components/ProjectContainer'
import CreateProject from './components/CreateProject'
<<<<<<< HEAD
=======
import Note from './components/Note'
>>>>>>> tester

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {},
     };
  }
componentDidMount() {
    this.loginStatus()
  }
loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={props => (<Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>)}/>
            <Route exact path='/login' render={props => (<Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}/>
            <Route exact path='/signup' render={props => (<Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}/>
            <Route exact path='/{this.state.user}/projects' render={props => (<ProjectContainer {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} logout={this.handleLogout}/>)}/>
            <Route exact path='/projects/create' render={props => (<CreateProject {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}/>
            <Route exact path='/projects/details' render={Note}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;