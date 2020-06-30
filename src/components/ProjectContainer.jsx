import React, { Component } from "react";
import ProjectList from './ProjectList'
import Menu from './Menu'

export default class ProjectContainer extends Component {

    state = {
        projects: [],
        searchTerm: ""
    }

    componentDidMount(){
        fetch("http://localhost:3001/projects")
        .then(res => res.json())
        .then(data => this.setState({projects: data}))
      
    }

    handleClick = e => {
        console.log("test")

    }
    handleSearchChange = e => {
        this.setState({searchTerm: e.target.value})
      }

    addProject = (project) => {
        this.setState({ projects: [...this.state.projects, project]})
    }
    render(){
        // console.log(this.state.projects)
        let lowerCaseDescription = this.state.searchTerm.toLowerCase()
        let filteredProjects = this.state.projects.filter(t => t.name.toLowerCase().includes(lowerCaseDescription))

        return(
            <div>
            <Menu onChange={this.handleSearchChange} onClick={this.handleClick}/>
            <br/>
            <ProjectList projects={filteredProjects} />
            </div>
        )
    }
}