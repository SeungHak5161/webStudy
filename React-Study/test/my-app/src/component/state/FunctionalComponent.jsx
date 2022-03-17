import React, {useEffect, useState} from 'react'

export default function FunctionalComponent() {
  const [date,setDate]=useState(new Date())

  const tick = () => {
    setDate(new Date())
  }
  
  useEffect(()=>{
    const interval = setInterval(()=>tick(), 1000)
  }, [])

  return (
    <div>
      <h1>Hi! This is Functional</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  )
}
