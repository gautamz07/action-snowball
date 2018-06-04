import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';


const boxTarget = {
    canDrop(props) {

    },
  
    drop(props) {

    }
};

function collect(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    };
}

const ItemTypes = {
    CARD: 'card'
};
  

class Box extends Component {

    render() {
        const { connectDropTarget, isOver, canDrop } = this.props;
    
        return connectDropTarget(
          <div style={{
            position: 'relative',
            width: '200px',
            height: '200px',
            background: canDrop ? '#ff0000' : '#eee'
          }}>
              { this.props.children }
          </div>
        );
    }

}

export default DropTarget(ItemTypes.CARD, boxTarget, collect)(Box);
