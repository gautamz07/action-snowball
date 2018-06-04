import React, { Component } from 'react';
import './App.css';
import ExampleComponent from './fc';
// import Container from './dustbin/Container'

class App extends Component {
  render() {
    return (
      <div className="App">
				<ExampleComponent />
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react'
// import Container from './dustbin/Container'

// export default class App extends Component {
// 	render() {
// 		return (
// 			<div className="App">
// 				<p>
// 					<b>
// 						<a href="https://github.com/react-dnd/react-dnd/tree/master/packages/documentation/examples/01%20Dustbin/Single%20Target">
// 							Browse the Source
// 						</a>
// 					</b>
// 				</p>
// 				<p>This is the simplest example there is.</p>
// 				<p>
// 					Drag the boxes below and drop them into the dustbin. Note that it has
// 					a neutral, an active and a hovered state. The dragged item itself
// 					changes opacity while dragged.
// 				</p>
// 				<Container />
// 			</div>
// 		)
// 	}
// }
