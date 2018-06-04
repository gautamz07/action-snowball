import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Knight from '../knight/knight';
import Square from '../square/square';
import BoardSquare from '../BoardSquare/BoardSquare';
import { canMoveKnight, moveKnight } from '../game';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Board extends Component {
    handleSquareClick(toX, toY) {
        if (canMoveKnight(toX, toY)) {
          moveKnight(toX, toY);
        }
      }

    renderSquare(i) {
      const x = i % 8;
      const y = Math.floor(i / 8);
      return (
        <div key={i}
              style={{ width: '12.5%', height: '12.5%' }}>
          <BoardSquare x={x}
                        y={y}>
            {this.renderPiece(x, y)}
          </BoardSquare>
        </div>
      );
    }
      
    renderPiece(x, y) {
      const [knightX, knightY] = this.props.knightPosition;
      if (x === knightX && y === knightY) {
        return <Knight />;
      }
    }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '50vw',
        margin: '0 auto',
        border: '5px solid #000',
        boxShadow : '0 0 20px rgba(0,0,0,.15)',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        height: '80vh'
      }}>
        {squares}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);