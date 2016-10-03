import React, { Component } from 'react'
export default class Story extends Component {

  render() {
    return (
      <div className="well">
        {this.props.title}
      </div>
    )
  }
}

