import React, { Component, PropTypes } from 'react'
import { Col } from 'react-bootstrap'

class App extends Component {
  static propTypes = {
    // Injected by React Router
    children: PropTypes.node,
    projects: PropTypes.array.isRequired
  }

  render() {
    const projects = [1,2,3,4,5,6,7].map((project)=>{
      return (
        <Col sm={4} key={project}>
        <div className="well well-sm">
            <h1>Hello{project}</h1>
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
export default App
