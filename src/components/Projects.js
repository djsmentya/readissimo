import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import getProjects from '../actions/PageActions'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router'


class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired
  }
    
    render () {
      const projects = this.props.projects.map((project)=>{
        return (
          <Col sm={4} key={project.id} >
            <Link to={'/projects/' + project.id}>
              <div className="well well-sm">
                <h1>{project.name}</h1>
              </div>
            </Link>
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
    
    
  componentDidMount(){
    this.props.dispatch(getProjects())
  }
}

Projects.defaultProps = {
  projects: []
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects
})

export default connect(mapStateToProps, null)(Projects)