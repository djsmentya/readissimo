import React, { Component, PropTypes } from 'react'

import Story from './Story'

import { DropTarget } from 'react-dnd'
import { ItemTypes } from '../constants/ItemTypes'

const boxTarget = {
  drop(props) {
    return { title: props.title, field: 'stage' };
  }
}

function collect (connect, monitor) {
  return (
    {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }
  )
}

const style ={}

class Board extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
  }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props
    const isActive = canDrop && isOver

    let backgroundColor = 'white';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'white';
    }

    return(
      connectDropTarget(
        <div className='col-sm-3' style={{ ...style, backgroundColor }}>
          <h5>{this.props.title}</h5>
          {this.props.stories.map((story) =>{ return <Story key={story.id} title={story.title} id={story.id} />})}
        </div>
      )
    )
  }
}

export default DropTarget(ItemTypes.BOARD, boxTarget, collect)(Board)
