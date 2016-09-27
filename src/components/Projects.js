import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import * as pageActions from '../actions/PageActions'
import { bindActionCreators } from 'redux'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router'


class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired
  }
    
    render () {
      console.log(this) 
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
      const { getProjects } = this.props.pageActions
      getProjects()
  }
}

Projects.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects)