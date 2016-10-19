import React, { Component, PropTypes } from 'react'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Board from './Board'


class Wall extends Component {
  static propTypes = {
    groupedTasks: PropTypes.object.isRequired
  }

  render() {
    const { groupedTasks } = this.props

    return (
      <div>
        {Object.keys(groupedTasks).map((item)=>{ return <Board key={item} title={item} stories={groupedTasks[item]} /> })}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Wall)
