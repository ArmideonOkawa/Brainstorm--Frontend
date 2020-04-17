import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Note = () => (
  <div className="cen">
  <Form>
    <Form.Field>
      <label>Create a note </label>
      <textarea />
      <Link to='/projects/details'><Button>Create Note!</Button></Link>
    </Form.Field>
  </Form>
  </div>
)

export default Note