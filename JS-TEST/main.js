import getType from './js/getType'
import random from './js/getRandom'
import _ from 'lodash'
import axios from 'axios'

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

// // - 얕은 복사와 깊은 복사
// const user = {
//   name: 'hak',
//   sex: 'male',
//   age: 26,
//   job: [
//     '100soo',
//     'pooMaker'
//   ]
// }

// 얕은 복사
// const copyUser=user
// 얕은 복사
// const copyUser=Object.assign(user)
// 깊은 복사
// const copyUser=Object.assign({},user)
// 깊은 복사
// const copyUser={...user}
// 깊은 복사
// const copyUser=_.cloneDeep(user)
// 얕은 복사여야 하는데 왜 깊은 복사요? 참조타입 말고 원시타입으로 테스트해도 같음
// const copyUser=_.clone(user)

// let num1=10
// let num2=_.clone(num1)
// num1=11
// console.log('num1=',num1)
// console.log('num2=',num2)

// user.age=50
// console.log(user===copyUser)
// console.log('user:',user)
// console.log('copyuser:',copyUser)


// // - storage, JSON
// const user = {
//   name: 'hak',
//   sex: 'male',
//   age: 26,
//   job: [
//     '100soo',
//     'pooMaker'
//   ]
// }

// localStorage.setItem('user',JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem('user')))
// const obj=JSON.parse(localStorage.getItem('user'))
// obj.age=17
// localStorage.setItem('user',JSON.stringify(obj))
// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')


// // OMDB API
// function fetchMovies() {
//   axios
//     .get('https://www.omdbapi.com/?apikey=c7ccc228&s=inception')
//     .then(res => {
//       console.log(res)
//       const mTitleEl=document.querySelector('#mTitle')
//       const mPosterEl=document.querySelector('#mPoster')
//       mTitleEl.textContent=res.data.Search[0].Title
//       mPosterEl.src=res.data.Search[0].Poster
//     })
// }

// fetchMovies()


// // 정규 표현식
const str=`
010-3364-5999999
theMeow@cat.com
https://www.omdbapi.com/?apikey=c7ccc228&s=inception
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
어쩜우린_복잡한 인연에
`
// const regexp=new RegExp('the', 'gi')
// const regexp=/fox/gi
// console.log(str.match(regexp))
// console.log(regexp.test(str))
// console.log(str.replace(regexp,'cat'))
// console.log(str)

// let str2=str
// str2=str2.replace(regexp,'cat')
// console.log(str2)

// console.log(str.match(/\.$/gim))

// console.log(str.match(/^t/gim))
// console.log(str.match(/d$/gm))
// console.log(str.match(/h..p/g))
// console.log(str.match(/fox|dog/))
// console.log(str.match(/https?/g))
// console.log(str.match(/\b\w{2,4}\b/g))
// console.log(str.match(/[가-힣]{1,}/g))
// console.log(str.match(/\bf\w{1,}\b/g))

// const space=`   [ man     &     woman  ]
// such   /  l o n g   /   distance`
// console.log(space)
// console.log(space.replace(/\s/g,''))

console.log(str.match(/.{1,}(?=\@)/g))
console.log(str.match(/(?<=\@).{1,}/g))