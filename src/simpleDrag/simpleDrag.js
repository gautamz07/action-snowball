import React, { Component } from 'react';

import { DragDropContext , DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CARD from './card';
import BOX from './box';
import Calder from './fullcalender';

class simpleDrag extends Component {

    render() {
        return(
            <DragDropContextProvider backend={HTML5Backend}>
                <div>
                    <CARD/>
                    <Calder />
                </div>    
            </DragDropContextProvider>
        ); 
    }

} 

export default DragDropContext(HTML5Backend)(simpleDrag);
