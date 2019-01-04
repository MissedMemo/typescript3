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
*/

const add = (a:number, b:number) : number => a + b
console.log( '12 + 23 =', add(12,23) )

const noReturn = (str:string) : void => {
  console.log('not returning anything at all!')
}

let root = document.createElement('div')
root.innerText = 'Bye!'
document.body.appendChild(root)