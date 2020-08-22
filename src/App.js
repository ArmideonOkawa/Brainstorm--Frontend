import React from 'react';
import './App.css'
import 'semantic-ui-less/semantic.less'
import {withRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './Login'
import Signup from './components/Signup'
import ProjectContainer from './components/ProjectContainer'


class App extends React.Component {
 
    state = { 
      user: {
        username: "",
        password: "",
        email: ""
      },
      token: "",
      isLoggedIn: false
     };




componentDidMount() {
   if(localStorage.token){
     fetch("http://localhost:3001/persist", {
       headers: {
         "Authorization": `bearer ${localStorage.token}`
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
    method: "POST",
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


//RENDER ROUTING FUNCTIONS
handleLogin = (routerProps) => {
  if(routerProps.location.pathname === '/login'){
    return <Login formName="Sign In" handleSubmit={this.handleLoginSubmit}/>
  }else if (routerProps.location.pathname === "/signup"){
    return <Signup userinfo={this.state.user} formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
  }
}


render() {
    return (
      <div>
      <Switch>
        <Route exact path='/' render={Home} />
        <Route exact path='/login' render={this.handleLogin}/>
        <Route exact path='/signup' render={this.handleLogin}/>
      </Switch>
      </div>
    );
  }
}
export default withRouter(App);