import React from 'react';
import './App.css';
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import {withRouter, } from 'react-router-dom'
import Home from './components/Home'
import ProjectContainer from './components/ProjectContainer'
import CreateProject from './components/CreateProject'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:4000/logged_in', 
    {withCredentials: true})
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


  renderprojectPageType = (routerProps) => {
    if(routerProps.location.pathname === "/projects"){
      return<ProjectContainer />
    }else if(routerProps.location.pathname === "/projects/create"){
      return<CreateProject addProject={this.props.addProject} />
    }
  }


  render(){
   
  return (
    <div className="App">
        <Switch>
         <Route exact path="/login"/>
         <Route exact path="/signup" />
         <Route path="/projects/create" render={this.renderprojectPageType} />
         <Route path="/projects" render={this.renderprojectPageType} />
         <Route path="/" exact component={Home} />
        </Switch>
      </div>
  );
}
}

export default withRouter(App)
