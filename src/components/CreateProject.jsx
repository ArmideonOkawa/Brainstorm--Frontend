import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import Menu from './Menu'

export default class CreateProject extends Component {
    state ={
        name: "",
        category: "",
        description: "",
        categories : []
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log("done")
        fetch("http://localhost:4000/projects",{
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify(this.state)
          }).then(res => res.json())
            .then(project => this.setState(this.state))
            console.log(this.state)
    }
    render(){
     return(
      <div>  
       <Menu />
       <Container>
       <div className=".container">
           <form onSubmit={this.handleSubmit} action="/action_page.php">
               <div className="row">
                   <div className="col-25">
                       <label htmlFor="title">Title</label>
                   </div>
                   <div className="col-75">
                       <input type="text" id="title" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Give your project a heroic name"></input>
                   </div>
                   
                   <div className="row">
                       <div className="col-25">
                           <label htmlFor="description">Description</label>
                       </div>
                       <div className="col-75">
                           <textarea id="description" name="description" onChange={this.handleChange} value={this.state.description} style={{height:200}}></textarea>
                       </div>
                       <div className="row">
                           <input type="submit" value="Submit"></input>
                       </div>
                   </div>
               </div>
           </form>
       </div>
       </Container>
      </div>
        )
    }
}