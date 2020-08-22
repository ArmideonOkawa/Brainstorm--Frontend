import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Menu}  from 'semantic-ui-react'
import Brain from '../brain.png'

const Home = (props) => {

  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }
return (
   <div>
    <Menu secondary>
      <Link to='/login'><Menu.Item
        name='login'>Log In</Menu.Item></Link>
      <br></br>
      <Link to='/signup'><Menu.Item>Sign Up</Menu.Item></Link>
      <br></br>
      <Menu.Menu position='right'
      style={{padding:20}}>
      { 
        props.loggedInStatus ? 
        <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
        null
      }
      </Menu.Menu>
    </Menu >
    <div className="home-img"><img src={Brain} alt=""/></div>
    </div>
  );
};
export default Home;