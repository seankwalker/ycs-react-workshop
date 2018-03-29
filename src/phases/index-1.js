/*
 * index.js
 *
 * Sean Walker
 * YCS Introduction to React Workshop
 *
 * Source code for a scheduling app.
 */

import React from 'react'
import ReactDOM from 'react-dom'

class Appointment extends React.Component {
  constructor(props) {
    super(props);
    
    this.name = this.props.name;
  }
  
  render() {
    return (
      <div>
        <h4>
          appointment: {this.name}
        </h4>
      </div>
    );
  }
}

       
/*
 * Root component.
 */
class Scheduler extends React.Component {
  render() {
    return (
      <div className="scheduler">
        <h1>Scheduler App</h1>
        <Appointment name='react workshop'/>
      </div>
    );
  }
}

/*
 * Render our app.
 */
ReactDOM.render(
  <Scheduler />,
  document.getElementById('root')
);
