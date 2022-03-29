import React, { useEffect, useState } from 'react'
import Comments from "./Comments"

const commentList=[
  {title:"comment1", content:"message1",likes:1},
  {title:"comment2", content:"message2",likes:2},
  {title:"comment3", content:"message3",likes:3}
]
export default function Memo() {
  // 아래 useEffect로 comments가 계속 바뀌었는데, 
  // CommentItem.jsx에서 memo(rization)를 사용함으로써 변경 부분만 랜더링되게 바뀜
  const [comments, setComments]=useState(commentList)

  useEffect(() => {
    const interval = setInterval(()=>{
      setComments((prevComments)=>[
        ...prevComments,
        {
        title:`comment${prevComments.length+1}`,
        content:`message${prevComments.length+1}`,
        likes:`${prevComments.length+1}`
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
