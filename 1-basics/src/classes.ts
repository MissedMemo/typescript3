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

class Boxer extends Person {
  skills: string[]

  constructor( name: string, nickname: string, age: number, skills: string[] ) {
    super( name, nickname, age )
    this.skills = [...skills]
  }
}

const boxer = new Boxer('Joe Louis', 'The Brown Bomber', 134, ['jabs', 'left hook'])
console.log('derived boxer:', boxer )

let root = document.createElement('div')
root.innerText = 'Exploring Classes!'
document.body.appendChild(root)