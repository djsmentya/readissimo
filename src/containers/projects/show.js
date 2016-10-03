import React, { Component } from 'react'
import { Grid, Col } from 'react-bootstrap';
import Story from '../../components/Story'
import { connect } from 'react-redux'
import { getTasks } from '../../actions/PageActions'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {boardGroupField: 'stage'}; // TODO move to redux
  }

  render () {

      let grouppedTasks = this.groupTasks(this.props.tasks, this.state.boardGroupField)

      return (
        <Grid bsClass="container-fluid">
        <h1>Projects</h1>
        <hr/>
        {Object.keys(grouppedTasks).map((item)=>{ return <Board key={item} title={item} stories={grouppedTasks[item]} /> })}
        </Grid>
      )
    }

  componentWillMount () {
    this.props.dispatch(getTasks(this.props.params.id))
  }

    groupTasks (tasks, field) {
      let list = {}
      tasks.forEach((task)=>{
        list[task[field]] = (list[task[field]] || []).concat(task)
      })
      return list
    }
}

Dashboard.defaultProps = {
  tasks: []
}

const mapStateToProps = (state) => ({
  tasks: state.readissimo.tasks
})
export default connect(mapStateToProps, null)(Dashboard)

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

