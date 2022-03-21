import React from 'react'

function UserGreeting(props){
  // condition && A -> if condition=true printA, elif false null, elif falsy 값 노출 가능
  // 참고할 점 : count로 0을 넘길 경우 0은 falsy한 값이라 삼항연산자에서 의도한 결과를 얻지 못할 수 있음.
  // 이 경우 boolean()으로 감싸 falsy한 값을 false로 만들거나 삼항 연산자의 세번째 값을 null로 주어 해결 가능
  return <h1>{props.name && `${props.name},`} Welcome {Boolean(props.count) ? `count = ${props.count}` : null}</h1>
}

function GuestGreeting(props){
  return <h1>Please sign up</h1>
}

function Greeting(props){
  // if(props.isLoggedIn){
  //   return <UserGreeting name="baek" count={0}/>
  // }
  // return <GuestGreeting/>
  return props.isLoggedIn ? <UserGreeting name='Baek' count={1}/> : <GuestGreeting/>
}

export default function Conditional() {
  const isLoggedIn=true;
  return (
    <div><Greeting isLoggedIn={isLoggedIn}/></div>
  )
}
