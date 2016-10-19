import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd'
import { dragTask } from '../actions/PageActions'

import { ItemTypes } from '../constants/ItemTypes'

const style = {
  cursor: 'move'
}
const boxSource = {
  beginDrag(props) {
    return {
      title: props.title,
      id: props.id
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      let newState = {}
      newState[dropResult.field] = dropResult.title
      props.dispatch(dragTask(item.id, newState))
    }
  }
}

function collect (connect, monitor) {
  return (
    {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }
  )
}

class Story extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }

  render() {
    const { isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;
     const { title } = this.props;
    return (
       connectDragSource(
         <div className="well" style={{...style, opacity}}>
           {title}
         </div>
       )
    )
  }
}

Story = DragSource(ItemTypes.BOARD, boxSource, collect)(Story)
export default connect()(Story)
