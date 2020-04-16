import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: EventTarget.name  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <NavLink to="/"><Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        /></NavLink>
        <NavLink to="/projects"><Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        /></NavLink>
        <NavLink to="/projects/create"><Menu.Item
          name='Create a Project'
          active={activeItem === 'Create a Project'}
          onClick={this.handleItemClick}
        /></NavLink>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' 
            placeholder='Search...' 
            onChange={this.props.onChange}/>
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}