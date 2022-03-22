import React from 'react'

export default function List() {
  // const numbers=[1,2,3,4,5,6]
  // return (
  //   <ul>
  //     {numbers.map(item=>(
  //       <li>{item.toString()}</li>
  //     ))}
  //   </ul>
  // )
  const todos=[
    {id:1, text:'Kasper Schmeichel'},
    {id:2, text:'James Justin'},
    {id:3, text:'Wesley Fofana'},
    {id:4, text:'Çağlar Söyüncü'},
    
  ]

  const Item=(props)=>{
    return (
      <li>
        {props.id} : {props.text}
        {/* key 값은 고유성의 확인을 위해서만 사용되므로 props로 전달하지 않음
        {props.key} <- Error! */}
        {props.id}
        </li>
    )
  }

  const todoList=todos.map(todo=><Item key={todo.id} id={todo.id} {...todo}/>)
  return (
    <>
    {todoList}
    </>
  )
}
