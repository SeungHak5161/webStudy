import React from 'react'

function Avatar(props){
  return(
    <img 
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
      />
  )
}

function UserInfo(props){
  return(
    <>
    <Avatar user={props.author}/>
      {/* 이 부분을 위로 빼내는서 위 처럼 만드는 걸 Extraction이라고 함
        <img className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
      /> */}
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
    </div>
  )
}

const object ={
  text:"meow meow",
  author:{
    name:"seunghak",
    avatarUrl:"https://avatars.githubusercontent.com/u/24721080?s=16&v=4"
  }
}

export default function Extraction() {
  return(
    <Comment date={object.date} text={object.text} author={object.author}/>
  )
}