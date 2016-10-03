import React, { Component } from 'react'
import { Grid, Col } from 'react-bootstrap';


export default class Dashboard extends Component {
    render () {
      let boards = [
        {name: 'Backlog',stories: [{title: "Test stories", id: 1}]},
        {name: 'In Progress',stories: []},
        {name: 'Code Review',stories: []},
        {name: 'In QA',stories: []},
        {name: 'Ready to Deploy',stories: []},
        {name: 'Testing on Staging',stories: []}
      ]
      return (
        <Grid bsClass="container-fluid">
        <h1>Projects</h1>
        <hr/>
        {boards.map((item)=>{ return <Board key={item.name} name={item.name} stories={item.stories} /> })}
        </Grid>
      )
    }
}

class Board extends Component {
  render() {
    return(
      <Col sm={3}>
        <h5>{this.props.name}</h5>
        {this.props.stories.map((story) =>{ return <Story key={story.id} title={story.title} />})}
      </Col>
    )
  }
}

class Story extends Component {
  render() {
    return (
      <div className="well">
        {this.props.title}
      </div>
    )
  }
}
