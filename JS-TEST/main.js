import getType from './js/getType'
import random from './js/getRandom'

// // console.log(getType(123))
// // console.log(getType(null))
// // console.log(getType({}))
// // console.log(getType([]))
// // console.log(getType(false))

// // const a=random()
// // if(a===0){
// //   console.log('a is 0')
// // }else{
// //   console.log(a)
// // }

// const ulEl = document.querySelector('ul')

// for (let i = 0; i < 10; i++) {
//   const li = document.createElement('li')
//   li.textContent = `list-${i+1}`
//   if ((i + 1) % 2 === 0) {
//     li.addEventListener('click', function () {
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }

// const a = 1
// const b = '1'
// console.log(a == b)
// console.log(a === b)
// console.log(getType(a))
// console.log(getType(b))

// let str = 111
// console.log(str += "123")
// console.log(str)
// console.log(getType(str))


// // - 화살표 함수
// const blabla = (x) => console.log('blabla' + x)
// blabla(5);


// // - IIFE
// (function () {
//   console.log("IIFE1")
// })();
// (function () {
//   console.log("IIFE2")
// })();


// // - 호이스팅
// saDdalla()

// function saDdalla() {
//   console.log("4딸라!!")
// }


// // - setTimeout, setInterval, clearTimeout, ClearInterval
// setInterval(function(){
//   console.log("interval")
// },2000)

// const timer = setInterval(() => console.log("interval"), 2000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', ()=>{
//   clearTimeout(timer)
// })


// // - 콜백
// const timeout=(cb)=> {
//   setTimeout(() => {
//     console.log("2sec")
//     cb()
//   }, 2000)
// }

// // timeout(() => console.log("end"))

// timeout(function(){
//   console.log("end") 
// })


// // - prototype 이해하기!!
// // new 키워드로 생성되는 함수는 pascal case로 명명함
// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
//   // this.getFullName=function(){
//   //   return this.firstName+' '+this.lastName
//   // }
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }


// // - class 키워드 이해, class 키워드 사용시 메소드가 자체적으로 prototype으로 구현됨
// class User {
//   constructor(first, last) {
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName(){
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const baek = new User('Baek', 'SeungHak')

// console.log(baek)
// // console.log(baek.getFullName())

// const ramen=['jin','ojjam','mupama']

// const a = ramen.forEach((ramen,num,nam) => console.log(`${ramen}-${num}-${nam}`))
// console.log(a)

// console.log(ramen.forEach((ramen,index,list) => console.log(`${ramen}-${index}-${list}`)))


// // - 구조분해 할당
// const user={
//   name:'hak',
//   sex:'male',
//   age:26,
//   job:'100soo'
// }
// const{name,age:old,job='kakao galGgeuNiGga~',address}=user
// console.log(`name:${name}, age:${old}, job:${job}, address:${address}`)

// const ramen=['jin','ojjam','mupama']
// const[,b,c]=ramen
// console.log(b,c)


// // - 전개 연산자
// const ramen=['jinSun', 'jinMae','ojjam','mupama']
// console.log(ramen)
// console.log(...ramen)

// function toObject(a,b,...c){
//   return{
//     1:a,
//     2:b,
//     3:c
//   }
// }

// class toObject{
//   constructor(a,b,...c){
//     return{
//       a,
//       b,
//       c
//     }
//   }
// }
// const toObject=(a,b,...c)=>({a,b,c})

// const ram= new toObject(...ramen)
// console.log(ram)