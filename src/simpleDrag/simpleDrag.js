import React, { Component } from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CARD from './card';
import BOX from './box';

class simpleDrag extends Component {

    render() {
        return(
            <div>
                <BOX />
                <CARD/>
            </div>    
        ); 
    }

} 

export default DragDropContext(HTML5Backend)(simpleDrag);
