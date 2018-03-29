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
      appointment_components.push(<Appointment name={appointments[i].name} num={appointments[i].num} time={appointments[i].time} />);
    }
    return (
      <div className="appontment-list">
        {appointment_components}
      </div>
    );
  }
}

class AddAppointmentButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    this.props.addAppointment(this.state.value);
    this.setState({value: ''});
  }
  
  render() {
    return (
      <div className="add-button">
        <label>New Appointment:</label>
        <input ref="appointmentName" type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Add" onClick={this.handleSubmit} />
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
      appointments: []
    };
    
    this.addAppointment = this.addAppointment.bind(this);
  }
  
  addAppointment(value) {
    const now = new Date();
    this.setState(function(prevState) {
      return {
        appointments: [...prevState.appointments, {name: value, num: prevState.appointments.length + 1, time: now}]
      }
    });
  }
  
  render() {
    const date = new Date();
    return (
      <div className="scheduler">
        <h1>Scheduler App</h1>
        <h4>Today's Date: {date.toDateString()}</h4>
        <h4>Current Time: {date.toTimeString()}</h4>
        {<AppointmentList appointments={this.state.appointments} />}
        <AddAppointmentButton addAppointment={this.addAppointment} />
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
