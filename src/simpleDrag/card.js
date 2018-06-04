import React, { Component } from 'react';
import { DragSource } from 'react-dnd';


const ItemTypes = {
    CARD: 'card'
};

const cardSource = {
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

class Card extends Component {

    render() {
        const { connectDragSource , isDragging } = this.props;
    
        return connectDragSource( 
          <div style={{
            opacity : isDragging ? 0.5 : 1,
            height: '50px',
            width: '50px',
            backgroundColor: 'orange',
          }}>
            &#9822;
          </div>
        );
      }
      
}
    
export default DragSource(ItemTypes.CARD, cardSource , collect)(Card);