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

/*
 * A basic component.
 */
class Appointment extends React.Component {
  render() {
    return (
      <div>
        <h4>
            This is an Appointment!
        </h4>
      </div>
    );
  }
}

/*
 * Render our app.
 */
ReactDOM.render(
  <Appointment />,
  document.getElementById('root')
)
