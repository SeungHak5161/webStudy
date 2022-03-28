import React, {memo} from 'react'
import "./CommentItem.css"

function CommentItem(props) {
  return (
    <div className="CommentItem">
      <span>title : {props.title}</span>
      <br/>
      <span>content : {props.content}</span>
      <br/>
      <span>likes : {props.likes}</span>
    </div>
  )
}

export default memo(CommentItem)