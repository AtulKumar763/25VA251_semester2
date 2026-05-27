import React, { Component } from 'react'

export class Props extends Component {
  render() {
    return (
      <>
      <h2>Student Details</h2>
      <h2>{this.props.name}</h2>
      <h2>{this.props.rollno}</h2>
      <h2>{this.props.marks}</h2>
      </>
    )
  }
}

export default Props