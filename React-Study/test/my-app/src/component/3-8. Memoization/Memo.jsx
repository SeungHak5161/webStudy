import React, { useEffect, useState } from 'react'
import Comments from "./Comments"

const commentList=[
  {title:"comment1", content:"message1",likes:10},
  {title:"comment2", content:"message2",likes:20},
  {title:"comment3", content:"message3",likes:30}
]
export default function Memo() {
  const [comments, setComments]=useState(commentList)

  useEffect(() => {
    const interval = setInterval(()=>{
      setComments((prevComments)=>[
        ...prevComments,
        {
        title:`comment${prevComments.length+1}`,
        content:`message${prevComments.length+1}`,
        likes:`${prevComments.length+10}`
        }
      ])
    },1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  

  return (
    <Comments commentList={comments}/>
  )
}
