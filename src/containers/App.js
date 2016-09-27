import React, { Component, PropTypes } from 'react'


class App extends Component {
  static propTypes = {
    // Injected by React Router
    children: PropTypes.node
  }

  render() {
    return(
      <div>
      {this.props.children}
      </div>
      )
  }
}

export default App