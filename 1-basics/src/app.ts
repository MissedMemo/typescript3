/* implicit & explicit...

let someNum = 2
someNum = 'someString'

let nums = [1,2,3]
nums.push('someString')

let someString: string = 'Fred'
someString = 42

let strs: string[] = ['a', 'b', 'c' ]
strs.push(456)
*/

let multiPass: any[] = ['a', 2, true, 'b', 3, 'c' ]
multiPass.push( {other: 76} )
console.log(multiPass)

let root = document.createElement('div')
root.innerText = 'Bye!'
document.body.appendChild(root)