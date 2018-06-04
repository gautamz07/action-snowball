
import React from 'react';
import ReactDOM from 'react-dom';
import Knight from './knight/knight';
import Square from './square/square';
import Board from './board/board';
import { moveKnight , observe } from './game';

import SimpleDrag from './simpleDrag/simpleDrag';

const rootEl = document.getElementById('root');

// console.log(knightPosition);

/* observe( knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
); */

ReactDOM.render(
    <SimpleDrag />,
    rootEl
)



















// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
