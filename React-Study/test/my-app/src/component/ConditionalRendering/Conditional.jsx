import React from 'react'

function UserGreeting(props){
  return <h1>Hi {props.name}, count = {props.count}</h1>
}

function GuestGreeting(props){
  return <h1>Please sign up</h1>
}

function Greeting(props){
  if(props.isLoggedIn){
    <UserGreeting name="baek" count={0}/>
  }
  return <GuestGreeting/>
}

export default function Conditional() {
  const isLoggedIn=false;
  return (
    <div><Greeting isLoggedIn={isLoggedIn}/></div>
  )
}
