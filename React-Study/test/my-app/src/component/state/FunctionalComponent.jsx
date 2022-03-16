import React, {useState} from 'react'

export default function FunctionalComponent() {
  const [date,setDate]=useState(new Date())
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
  )
}
