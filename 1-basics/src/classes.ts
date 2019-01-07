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

type size = {
  height_inMeters: number,
  length_inMeters: number,
  weight_inTons: number
}

abstract class Creature {
  name: string
  abode: string
  size: size

  abstract makeNoise: () => string

  constructor( name: string, size: size, abode?: string ) {
    this.name = name
    this.size = {...size}
    this.abode = abode
  }
}

class MediaMonster extends Creature {
  yearCreated: string
  makeNoise = () => 'Roar!!!' // bad example

  constructor( yearCreated: string, name: string, size: size, abode?: string ) {
    super(name, size, abode)
    this.yearCreated = yearCreated
  }
}

const monsters: MediaMonster[] = [
  new MediaMonster( '1954', 'Godzilla', { height_inMeters: 50, length_inMeters: 50, weight_inTons: 1000}, 'Tokyo' ),
  new MediaMonster( '1961', 'Mothra', { height_inMeters: 10, length_inMeters: 100, weight_inTons: 800}, 'some Pacific island' )
]

monsters.forEach( monster => console.log('monster:', monster, 'monster says:', monster.makeNoise() ) )


let root = document.createElement('div')
root.innerText = 'Exploring Classes!'
document.body.appendChild(root)