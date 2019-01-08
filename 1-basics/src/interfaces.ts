/*
interface IDrivable {
  groundspeed_inKPH: number
}

interface IFlyable {
  altitude_inMeters: number
  heading_inDegrees: number
}

interface IProductionVehicle {
  make: string
  model: string
  year: string
}

class Autombile implements IDrivable, IProductionVehicle {
  constructor( public make: string, public model: string, public year: string, public groundspeed_inKPH: number ) { }
}

class Aircraft implements IFlyable, IProductionVehicle {
  constructor( public make: string, public model: string, public year: string, public altitude_inMeters: number, public heading_inDegrees: number ) { }
}

const myCar = new Autombile('Mazda', 'Miata', '2001', 0 )
console.log('my car:', myCar )

const myPlane = new Aircraft('Cessna', 'Beechcraft', '2005', 0, 0 )
console.log('my plane:', myPlane )



let root = document.createElement('div')
root.innerText = 'Exploring Interfaces!'
document.body.appendChild(root)
*/