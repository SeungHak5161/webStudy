import React, {useEffect, useState} from 'react'

export default function withLoading(Component) {
  const WithLodadingComponent=(props)=>{
    const [loading,setLodading]=useState(true)

    useEffect(()=>{
      const timer=setTimeout(()=>setLodading(false),2000)
      return () => clearTimeout(timer)
    })

    return (
      loading ? <p>Lodading..</p> : <Component {...props}/>
    )
  }

  return WithLodadingComponent
}