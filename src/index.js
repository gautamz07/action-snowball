
import React from 'react';
import ReactDOM from 'react-dom';
import Knight from './knight/knight';
import Square from './square/square';
import Board from './board/board';
import Dnd from './bigcalender/dnd';
import { moveKnight , observe } from './game';
import BigCalendar from 'react-big-calendar'


import SimpleDrag from './simpleDrag/simpleDrag';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);



const rootEl = document.getElementById('root');

// console.log(knightPosition);

/* observe( knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
); */

ReactDOM.render(
    <Dnd />,
    rootEl
)



















// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
