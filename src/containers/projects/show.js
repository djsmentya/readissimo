import React, { Component } from 'react'
import { Grid, Col } from 'react-bootstrap';


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {boardGroupField: 'stage'};
  }

  render () {
      let tasks = [
        {
          id: 2,
          status: 'New',
          stage: 'Backlog',
          assigned: [{name: 'Eugene'},{name: 'George'}],
          title: 'Test task'
        },
        {
          id: 1,
          status: 'Accepted',
          stage: 'TODO',
          assigned: [{name: 'Eugene'},{name: 'George'}],
          title: 'Test task 2'
        },
        {
          id: 3,
          status: 'Done',
          stage: 'QA',
          assigned: [{name: 'Eugene'},{name: 'George'}],
          title: 'Test task 2'
        },
        {
          id: 4,
          status: 'Done',
          stage: 'Code Review',
          assigned: [{name: 'Eugene'},{name: 'George'}],
          title: 'Test task 2'
        }
      ]

      let grouppedTasks = this.groupTasks(tasks, this.state.boardGroupField)

      return (
        <Grid bsClass="container-fluid">
        <h1>Projects</h1>
        <hr/>
        {Object.keys(grouppedTasks).map((item)=>{ return <Board key={item} title={item} stories={grouppedTasks[item]} /> })}
        </Grid>
      )
    }

    groupTasks (tasks, field) {
      let list = {}
      tasks.forEach((task)=>{
        list[task[field]] = (list[task[field]] || []).concat(task)
      })
      return list
    }
}

class Board extends Component {
  render() {
    return(
      <Col sm={3}>
        <h5>{this.props.title}</h5>
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
