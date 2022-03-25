import React from 'react'

export default function SpecializedDialog() {

  const FancyBorder=(props)=>{
    return (
      <div className={'FancyBorder FancyBorder-'+props.color}>
        {props.children}
      </div>
    )
  }

  const Dialog=(props)=>{
    return(
      <FancyBorder color='blue'>
        <h1 className='Dialog-title'>
          {props.title}
        </h1>
        <p className='Dialog-message'>
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    )
  }

  const WelcomeDialog=()=>{
    return <Dialog title='Welcome' message='안뇽안뇽~~~~~'/>
  }

  return (
    <WelcomeDialog/>
  )
}
