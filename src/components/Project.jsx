import React from 'react'
import { Item, Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Brain from '../brain.png'


const Project = ({project}) => {
    const {name, description, category} = project

  console.log(project)
    return(
      <Container style={{padding:40}}>
    <Item.Group>
      <Item>
      <Item.Image size='tiny' src={Brain}/>

      <Item.Content>
        <Item.Header>{name}{category}</Item.Header>
        <Item.Description>
          {description}
        </Item.Description>
        <Link to='/projects/details'><Button >Add Note</Button></Link>
      </Item.Content>
    </Item>
    </Item.Group>
    </Container>
    )
}

export default Project