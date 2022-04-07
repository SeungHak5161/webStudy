import React from 'react'

export default function CompositionDialog() {

  const FancyBorder=(props)=>{
    return (
      <div className={'FancyBorder FancyBorder-'+props.color}>
        {props.children}
      </div>
    )
  }

  const WelcomeDialog=()=>{
    return(
      <FancyBorder color='blue'>
        <h1 className='Dialog-title'>
          Welcome
        </h1>
        <p className='Dialog-message'>
          안뇽안뇽~~~~
        </p>
      </FancyBorder>
    )
  }
  return (
    <WelcomeDialog/>
  )
}
