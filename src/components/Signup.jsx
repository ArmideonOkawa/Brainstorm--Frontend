import React, { Component } from 'react';
import axios from 'axios'
import { Button, Form, Grid, Header,  Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password, password_confirmation} = this.state
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
   
    axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
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
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}
        </ul> 
      </div>
    )
  }
render() {
    const {username, email, password, password_confirmation} = this.state
return (
      <div>
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
         Register for a new account
      </Header>
      <Form size='large' onSubmit={this.handleSubmit}>
        <Segment stacked>
          <Form.Input 
          fluid icon='user' 
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
          iconPosition='left' 
          placeholder='Username' />

          <Form.Input  
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          iconPosition='left' 
          placeholder='email' />

          <Form.Input
            fluid icon="lock"
            iconPosition="left"
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <Form.Input
            fluid icon="lock"
            iconPosition="left"
            placeholder="password_confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />

          <Button color='teal' fluid size='large'>
            Register
          </Button>
        </Segment>
      </Form>
      {
          this.state.errors ? this.handleErrors() : null
      }
      <Message>
        Already have an account? <Link to="/login">Log in</Link>
      </Message>
    </Grid.Column>
  </Grid>
      </div>
    );
  }
}
export default Signup;