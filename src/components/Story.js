import React, { Component, PropTypes } from 'react'
import { DragSource } from 'react-dnd'

import { ItemTypes } from '../constants/ItemTypes'

const style = {
  cursor: 'move'
}
const boxSource = {
  beginDrag(props) {
    return {
      name: props.title
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      console.log(item);
      window.alert( // eslint-disable-line no-alert
        `You dropped ${item.title} into ${dropResult.title}!`
      );
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
    title: PropTypes.string.isRequired
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

export default DragSource(ItemTypes.BOARD, boxSource, collect)(Story)
