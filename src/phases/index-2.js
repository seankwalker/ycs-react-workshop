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
    this.num = this.props.num;
  }
  
  render() {
    return (
      <div className="appointment">
        <h4>
          appointment #{this.num}: {this.name}
        </h4>
      </div>
    );
  }
}

class AppointmentList extends React.Component {
  render() {
    const appointments = this.props.appointments;
    var appointment_components = [];
    for (let i = 0; i < appointments.length; i++) {
      appointment_components.push(<Appointment name={appointments[i].name} num={i+1} />);
    }
    return (
      <div>
        {appointment_components}
      </div>
    );
  }
}
/*
 * Root component.
 */
class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        appointments: [{"name": "react workshop"}, {"name": "lunch with chris"}, {"name": "ycs meeting"}]
    };
  }
  
  render() {
    return (
      <div className="scheduler">
        <h1>Scheduler App</h1>
        {<AppointmentList appointments={this.state.appointments} />}
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
