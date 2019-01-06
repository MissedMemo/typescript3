class Person {
  name: string // defaults to public

  protected isCool: boolean

  private age: number

  constructor( name: string, public nickname: string, age: number, isCool = true ) {
    this.name = name
    // nickname AUTOMATICALLY assigned, due to 'public' specifier
    this.age = age
    this.isCool = isCool
  }
}

const Pete = new Person('Peter', 'Pete', 57)
console.log('Peter person:', Pete ) // will already reflect name revision
Pete.name = 'Joe'
// console.log('age:', Pete.age ) inaccessible!
// console.log('coolness:', Pete.isCool ) inaccessible!
console.log('revised Person:', Pete )

let root = document.createElement('div')
root.innerText = 'Exploring Classes!'
document.body.appendChild(root)