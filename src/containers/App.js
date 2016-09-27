import { Component, PropTypes } from 'react'


class App extends Component {
  static propTypes = {
    // Injected by React Router
    children: PropTypes.node
  }

  render() {
    return(this.props.children )
  }
}

export default App