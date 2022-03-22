// rfc : react functional component(vs code extention -> react snippent)
import React from 'react'

function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

export default function composition() {
  return (
    <div>
      <Welcome name='Baek'/>
      <Welcome name='Baek'/>
      <Welcome name='Baek'/>
    </div>
  )
}
