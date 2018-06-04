import React, { Component } from 'react';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';

const knightSource = {
  beginDrag(props) {
    return {  };
  }
}

function collect(connect, monitor) {
    return {
       connectDragSource : connect.dragSource(),
       connectDragPreview: connect.dragPreview(),
       isDragging : monitor.isDragging()
    } 
}


class Knight extends Component {

  componentDidMount() {
    const img = new Image();
    img.src = '../hoverstate.png';
    img.onload = () => this.props.connectDragPreview(img);
  }

  render() {

    const { connectDragSource , isDragging } = this.props;

    return connectDragSource( 
      <div style={{
        opacity : isDragging ? 0.5 : 1,
        fontSize : 25,
        fontWeight : 'bold',
        cursor : 'move',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        &#9822;
      </div>
    );
  }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);