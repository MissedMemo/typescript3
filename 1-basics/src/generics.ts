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

const arr1: string[] = ['One', 'Two', 'Ten']
const arr2: Array<string> = ['Three', 'Four', 'Twenty']
const arr3: ReadonlyArray<string> = ['Five', 'Six', 'One Hundred']

console.log( 'arr1:', arr1 )
console.log( 'arr2:', arr2 )
console.log( 'arr3:', arr3 )

// Add constraints... 

function logRtnX1<T>( arg: T[] ): T[] {
  console.log(arg.length)
  return arg
}

function logRtnX2<T>( arg: Array<T> ): Array<T> {
  console.log(arg.length)
  return arg
}

logRtnX1([1,2,3])
// logRtnX1(24) - not an array!
// logRtnX2('abc') - not an array!


interface IHasLength {
  length: number
}

function logRtn1<T extends IHasLength>( arg: T ): T {
  console.log(arg.length)
  return arg
}

const logRtn2 = <T extends IHasLength>(arg: T): T => {
  console.log(arg.length)
  return arg
}

logRtn1([1,2,3])
logRtn1('abc')
//logRtn1(24)
*/

// stupid example to exercise class and multi-value generics...

class Classy< T, U > {
  greeting: string = 'Hello!'

  constructor( public age: T, public name: U) {}

  display = () => console.log(`${this.greeting}, ${this.name}. You are now ${this.age} years old!`)
}

const myClass = new Classy<number,string>(42,'Carl')
myClass.display()

let root = document.createElement('div')
root.innerText = 'Exploring Generics!'
document.body.appendChild(root)