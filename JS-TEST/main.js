import getType from './js/getType'
import random from './js/getRandom'

// console.log(getType(123))
// console.log(getType(null))
// console.log(getType({}))
// console.log(getType([]))
// console.log(getType(false))

// const a=random()
// if(a===0){
//   console.log('a is 0')
// }else{
//   console.log(a)
// }

const ulEl=document.querySelector('ul')

for(let i=0;i<10;i++){
  const li=document.createElement('li')
  li.textContent=`list-${i+1}`
  if((i+1)%2===0){
    li.addEventListener('click',function(){
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}

const a=1
const b='1'
console.log(a==b)
console.log(a===b)
console.log(getType(a))
console.log(getType(b))

let str=111
console.log(str+="123")
console.log(str)
console.log(getType(str))

let fl=new Float()
console.log(getType(fl))
