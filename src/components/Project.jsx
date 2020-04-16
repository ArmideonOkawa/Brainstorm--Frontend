import React from 'react'
import { Item } from 'semantic-ui-react'

const Project = ({project}) => {
    const {name, description} = project

    console.log(project)
    return(
    <Item.Group>
      <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Description>
          {description}
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
    </Item.Group>
    )
}

export default Project