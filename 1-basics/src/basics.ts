/* implicit & explicit...

let someNum = 2
someNum = 'someString'

let nums = [1,2,3]
nums.push('someString')

let someString: string = 'Fred'
someString = 42

let strs: string[] = ['a', 'b', 'c' ]
strs.push(456)

let multiPass: any[] = ['a', 2, true, 'b', 3, 'c' ]
multiPass.push( {other: 76} )
console.log(multiPass)

let someTuple: [number, string] = [24,'abc']

const noReturn = (str:string) : void => {
  console.log('not returning anything at all!')
}

const add = (a:number, b:number) : number => a + b
console.log( '12 + 23 =', add(12,23) )

let fnReference: (a: number, b: number) => number
fnReference = add
console.log( '10 + 13 =', fnReference(10,13) )

const objA = { name: 'Fred', age: 21 }
const objB = { firstname: 'Tom', age: 99 }
const objC = { name: 42, age: 21 }

let objRef: { name: string, age: number }
objRef = objA
console.log( 'objA:', objRef )
// objRef = objB
// console.log( 'objB:', objRef )
// objRef = objC
// console.log( 'objC:', objRef )

type objAlias = { name: string, age: number }
const obj1: objAlias = { name: 'Bob', age: 24 }
const obj2: objAlias = { name: 'Sally', age: 88 }

let member: number | string | objAlias
member = 42
member = 'Bob'
member = { name: 'Fritz', age: 67 }
// member = true

let root = document.createElement('div')
root.innerText = 'Exploring Basics!'
document.body.appendChild(root)

*/