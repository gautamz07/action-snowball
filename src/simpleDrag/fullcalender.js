import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DropTarget } from 'react-dnd';
 
// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';

const calTarget = {
    canDrop(props, monitor) {
        return true;
    },
  
    drop(props, monitor, component) {
        // alert()
        console.log(monitor.getDropResult());
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

class Calder extends Component {
    constructor(props) {
      super(props);
      this.state = {
      events:[
                  {
                      title: 'All Day Event',
                      start: '2017-05-01'
                  },
                  {
                      title: 'Long Event',
                      start: '2017-05-07',
                      end: '2017-05-10'
                  },
                  {
                      id: 999,
                      title: 'Repeating Event',
                      start: '2017-05-09T16:00:00'
                  },
                  {
                      id: 999,
                      title: 'Repeating Event',
                      start: '2017-05-16T16:00:00'
                  },
                  {
                      title: 'Conference',
                      start: '2017-05-11',
                      end: '2017-05-13'
                  },
                  {
                      title: 'Meeting',
                      start: '2017-05-12T10:30:00',
                      end: '2017-05-12T12:30:00'
                  },
                  {
                      title: 'Birthday Party',
                      start: '2017-05-13T07:00:00'
                  },
                  {
                      title: 'Click for Google',
                      url: 'http://google.com/',
                      start: '2017-05-28'
                  }
              ],		
      }
    }
   
    render() {

      const { connectDropTarget, isOver, canDrop } = this.props;        
      
      return connectDropTarget(
        <div>
          <FullCalendar
               id = "your-custom-ID"
           header = {{
              left: 'prev,next today myCustomButton',
              center: 'title',
              right: 'month,basicWeek,basicDay'
          }}
           defaultDate={'2017-09-12'}
          navLinks= {true} // can click day/week names to navigate views
          editable= {true}
          eventLimit= {true} // allow "more" link when too many events
          events = {this.state.events}
          droppable = { true }	
      />
        </div>
      );
    }
  }

  export default DropTarget(ItemTypes.CARD, calTarget, collect)(Calder);