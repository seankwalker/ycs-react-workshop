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
    this.time = this.props.time;
  }
  
  render() {
    return (
      <div className="appointment">
        <h4>
          appointment #{this.num}: {this.name} added at {this.time.toTimeString()} on {this.time.toDateString()}
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
      appointment_components.push(<Appointment name={appointments[i].name} num={i+1} time={appointments[i].time} />);
    }
    return (
      <div className="appontment-list">
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
    const date1 = new Date('1995-12-17T03:24:00');
    const date2 = new Date('1997-01-08T04:16:34');
    const date3 = new Date();
    this.state = {
        appointments: [{"name": "react workshop", "time": date1}, {"name": "lunch with chris", "time": date2}, {"name": "ycs meeting", "time": date3}]
    };
  }
  
  render() {
    const date = new Date();
    return (
      <div className="scheduler">
        <h1>Scheduler App</h1>
        <h4>Today's Date: {date.toDateString()}</h4>
        <h4>Current Time: {date.toTimeString()}</h4>
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
