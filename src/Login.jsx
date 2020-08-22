import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import Brain from './brain.png'


class Login extends React.Component {
  state = { 
      username: '',
      password: ''

  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (event) => {
    let {name, value} = event.target 
    this.setState({
      [name] : value
    })
  }


render() {
    const {username, password} = this.state
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