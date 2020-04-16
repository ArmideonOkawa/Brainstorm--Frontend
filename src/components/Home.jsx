import React from 'react';
import joker from '../joker.jpg'
import { Button, Menu } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

const Home = () => (
  <div>
     <Menu>
    <Menu.Item>
      <NavLink to="/signup"><Button primary>Sign up</Button></NavLink>
    </Menu.Item>

    <Menu.Item>
    <NavLink to="/login"><Button primary>Log In</Button></NavLink>
    </Menu.Item>
  </Menu>
    <h1 id="header">Project Pal</h1>
    <img src={joker} alt="willy wonka" />
  </div>
);

export default Home;