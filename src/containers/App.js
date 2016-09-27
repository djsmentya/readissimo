import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'

import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/PageActions'


class App extends Component {
  static propTypes = {
    // Injected by React Router
    children: PropTypes.node,
    projects: PropTypes.array.isRequired
  }

componentDidMount(){
    const { getProjects } = this.props.pageActions
    getProjects()
}
  render() {
    console.log(this.props)
    const projects = this.props.projects.map((project)=>{
      return (
        <Col sm={4} key={project.id} >
        <div className="well well-sm">
            <h1>{project.name}</h1>
          </div>
        </Col>
      )
    })
    return (
      <div className="container-fluid">
        <h1>Projects</h1>
        <hr/>
        {projects}
      </div>
    )
  }
}

App.defaultProps = {
  projects: []
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects
})

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
