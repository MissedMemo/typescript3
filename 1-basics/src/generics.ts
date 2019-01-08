/*
const print1 = <T>(arg: T): T => arg

function print2<T>( arg: T ): T {
  return arg
}

console.log('print1<string>:', print1<string>('yowza1') )
console.log('print2<string>:', print2<string>('yowza2') )
console.log('print1<number>:', print1<number>(1) )
console.log('print2<number>:', print2<number>(2) )

console.log('print1(someStr):', print1('yowza1') )
console.log('print2(someStr):', print2('yowza2') )
console.log('print1(someNum)', print1(1) )
console.log('print2(someNum)', print2(2) )
*/

const arr1: string[] = ['One', 'Two', 'Ten']
const arr2: Array<string> = ['Three', 'Four', 'Twenty']
const arr3: ReadonlyArray<string> = ['Five', 'Six', 'One Hundred']

console.log( 'arr1:', arr1 )
console.log( 'arr2:', arr2 )
console.log( 'arr3:', arr3 )

let root = document.createElement('div')
root.innerText = 'Exploring Generics!'
document.body.appendChild(root)