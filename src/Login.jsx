import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import Brain from './brain.png'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      email: '',
      errors: ''
     };
  }
  componentDidMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password} = this.state
    let user = {
      username: username,
      email: email,
      password: password
    }
    
    axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
redirect = () => {
    this.props.history.push('/projects')
  }
handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })
        }
        </ul>
      </div>
    )
  }
render() {
    const {username, email, password} = this.state
return (
      <div>
        <div className="logo">
      
        </div>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <img src={Brain}/>
      <Header as='h2' color='teal' textAlign='center'>
         Log-in to your account
      </Header>
      <Form size='large' onSubmit={this.handleSubmit}>
        <Segment stacked>
        <Form.Input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
           <Form.Input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Form.Input 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br/>
        <div></div>
         <br/>
          <Button placeholder="submit" type="submit">
            Login 
          </Button>
        </Segment>
      </Form>
      {
          this.state.errors ? this.handleErrors() : null
      }
      <Message>
        New to us? <Link to="/signup">Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
      </div>
    );
  }
}
export default Login;