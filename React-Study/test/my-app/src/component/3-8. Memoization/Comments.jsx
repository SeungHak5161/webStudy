import React,{useCallback} from 'react'
import CommentItem from './CommentItem'

export default function Comments(props) {
  // 전달 받는 props가 계속해서 변경되기 때문에 handleChange 함수도 계속해서 변경됨
  // 이를 방지하기 위해서 useCallback() 사용 <- 이것 또한 memorization
  const handleChange = useCallback(()=>{
    console.log("Click")
  },[])
  return (
    <div>
      {props.commentList.map(comment=><CommentItem
        key={comment.title}
        // title={comment.title}
        // content={comment.content}
        // likes={comment.likes}
        onClick={handleChange}
        {...comment}
      />)}
    </div>
  )
}
