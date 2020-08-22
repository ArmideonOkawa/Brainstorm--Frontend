import React from 'react';
import './App.css'
import 'semantic-ui-less/semantic.less'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './Login'
import Signup from './components/Signup'
import ProjectContainer from './components/ProjectContainer'


class App extends React.Component {
 
    state = { 
      user: {},
      token: "",
      isLoggedIn: false
     };




componentDidMount() {
   if(localStorage.token){
     fetch("http://localhost:3001/persist", {
       headers: {
         "Authorization": `bearer ${localstorage.token}`
       }
     })
     .then(r => r.json())
     .then(this.handleResponse)
   }
}

handleResponse = (resp) => {
    if(!resp.message){
      localStorage.token = resp.tpken
        this.setState({
        user: resp.user,
        token: resp.token,
        isLoggedIn: true
      }, () => {
        this.props.history.push("/projects")
      })
    }

}

handleLoginSubmit = (userInfo) => {
  console.log("Login form has been submitted")

  fetch("http://localhost:3001/login", {
    mothod: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
  .then(r => r.json())
  .then(this.handleResponse)
}

handleRegisterSubmit = (userInfo) => {
  console.log("Register submitted")

  fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
  .then(r => r.json())
  .then(this.handleResponse)
}

logSomeoneOut = () => {
  this.setState({
    user: {},
    token: "",
    isLoggedIn: false
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
            <Route exact path='/projects' render={props => (<ProjectContainer {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} logout={this.handleLogout}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;