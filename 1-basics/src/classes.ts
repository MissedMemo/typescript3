/*
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

class Animal {
  private _name: string = 'default'

  get name() {
    return this._name
  }

  set name( newName: string ) {
    this._name = newName
  }

  constructor( newName: string ) {
    this.name = newName
  }
}

const animal = new Animal('giraffe')
console.log('animal is a:', animal.name )
animal.name = 'lion'
console.log('animal is a:', animal.name )

class StaticStuff {
  static readonly pi = 3.14

  static get cake() { return 42 }
}

// StaticStuff.pi = 6.28 (inaccessible!)
console.log( 'some delicious pi:', StaticStuff.pi )
console.log( 'some magic cake:', StaticStuff.cake )
*/

abstract class Thing {
  name: string
  dimensions: number[]
  color: string

  abstract makeSound: () => string

  constructor( name: string, dimensions: number[], color?: string ) {
    this.name = name
    this.dimensions = [...dimensions]
    this.color = color
  }
}

class Globule extends Thing {
  texture: string
  makeSound = () => 'Roar!!!'

  constructor( texture: string, name: string, dimensions: number[], color?: string ) {
    super(name, dimensions, color)
    this.texture = texture
  }
}

const blob = new Globule( 'smooth', 'Goopy', [4,5,6] )
console.log('blob is:', blob)


let root = document.createElement('div')
root.innerText = 'Exploring Classes!'
document.body.appendChild(root)