import React, { Component } from 'react'
import { Grid } from 'react-bootstrap';
import Wall from '../../components/Wall'
import { connect } from 'react-redux'
import { getTasks } from '../../actions/PageActions'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {boardGroupField: 'stage'}; // TODO move to redux
  }

  render () {

      let groupedTasks = this.groupTasks(this.props.tasks, this.state.boardGroupField)

      return (
        <Grid bsClass="container-fluid">
        <h1>Projects</h1>
        <hr/>
        <Wall groupedTasks={groupedTasks} />
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


