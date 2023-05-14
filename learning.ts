//* Declare a Read-Only Variable with const
const FCC = "nigell";
let fact = " is student";
fact = " is nice";
console.log(FCC, fact);

//*Add Two Numbers with JavaScript
/*
    TODO: Change the 0 so that sum will equal 20.
    const sum = 10 + 0;
*/

const sum = 10 + 10;
console.log(sum);

//*Subtract One Number from Another with JavaScript
/*
    TODO: Change the 0 so the difference is 12.
    const difference = 45 - 0;
*/

const difference = 45 - 33;
console.log(difference);

//*Multiply Two Numbers with JavaScript
/*
    TODO: Change the 0 so that product will equal 80.
    const product = 8 * 0;
*/
const product = 8 * 10;
console.log(product);

//*Divide One Number by Another with JavaScript
/*
    TODO: Change the 0 so that the quotient is equal to 2.
    const quotient = 66 / 0;
*/
const quotient = 66 / 33;
console.log(quotient);

//*Increment a Number with JavaScript
/*
    let myVar = 87;
    myVar = myVar + 1;   o   myVar++;   = 88
*/
let myVar = 87;
myVar++;
console.log(myVar);

//*Decrement a Number with JavaScript
/*
    myVar = myVar - 1;  o   myVar--;    == 87
*/
myVar--;
console.log(myVar);

//*Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;
let myDecimal = 6.5;

//*Multiply Two Decimals with JavaScript
/*
    TODO: Change the 0.0 so that product will equal 5.0.
    const product = 2.0 * 0.0;
 */
const products = 2.0 * 2.5;
console.log(products);

//*Divide One Decimal by Another with JavaScript
/*
    TODO: Change the 0.0 so that quotient will equal to 2.2.
    const quotient = 0.0 / 2.0; // Change this line
*/
const quotients = 4.4 / 2.0; // Change this line
console.log(quotients);

//*Finding a Remainder in JavaScript (módulo en español)
/*
    TODO: Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
    const remainder = 0;
*/
const remainder = 11 % 3;
console.log(remainder);

//*Compound Assignment With Augmented Addition
/*
    TODO: Convert the assignments for a to use the += operator.
    let a = 3;
    a = a + 12; = 15
*/
let a = 3;

a += 12;

console.log(a);

//*Compound Assignment With Augmented Subtraction
/*
    TODO: Convert the assignments for b to use the -= operator.
    let b = 11;
    b = b - 6;
*/
let b = 11;
b -= 6;
console.log(b);

//*Compound Assignment With
/*
    TODO: Convert the assignments for c to use the *= operator.
    let c = 4.6;
    c = c * 10;
*/
let c = 4.6;
c *= 10;
console.log(c);

//*Compound Assignment With Augmented Division
/*
    TODO: Convert the assignments for d to use the /= operator.
    let d = 108;
    d = d / 4;
*/
let d = 108;
d /= 4;
console.log(d);

//*Escaping Literal Quotes in Strings
/*
    TODO: Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:
    I am a "double quoted" string inside "double quotes".
    const myStr = ""
*/

const myStr = 'I am a "double quoted" string inside "double quotes"';
console.log(myStr);

let hola: string[] = ["a", "b"];
console.log(hola);

class Vehiculo {
  private numDoors: number;
  private speed: number;
  private model: string;

  constructor(numDoors: number, speed: number, model: string) {
    this.numDoors = numDoors;
    this.speed = speed;
    this.model = model;
  }

  getNumDoors(): number {
    return this.numDoors;
  }

  setNumDoors(numDoors: number) {
    this.numDoors = numDoors;
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }
}

const ferrari = new Vehiculo(2, 300, "ferrari");

ferrari.setNumDoors(2);
console.log(ferrari.getNumDoors());

class Auto extends Vehiculo {
  private numWheels: number;
  constructor(
    numDoors: number,
    speed: number,
    model: string,
    numWheels: number
  ) {
    super(numDoors, speed, model);
    this.numWheels = numWheels;
  }
  setNumWheels(numWheels: number) {
    this.numWheels = numWheels;
  }
  getNumDoors(): number {
    return super.getNumDoors() + 1;
  }
}

const ferrar = new Auto(2, 300, "ferrar", 4);
console.log(ferrar.getNumDoors());

const moto = new Vehiculo(1, 300, "honda");

const arrVehiculos: Vehiculo[] = [ferrar, moto];

for (const vehiculo of arrVehiculos) {
  console.log(vehiculo.getNumDoors());
}

class Persona {
  nombre: string;
  edad: number;

  constructor(name: string, age: number) {
    this.nombre = name;
    this.edad = age;
  }
}

class Persona2 {
  nombre: string;
  edad: number;

  constructor(name: string, age: number) {
    this.nombre = name;
    this.edad = age;
  }
}

let persona = new Persona("Nigell", 21);
let persona2 = new Persona2("Nachel", 21);
let persona3: Persona = persona2;

interface PersonaInterface {
  nombre: string;
  edad: number;
  dni?: string;
}

interface Alumno extends PersonaInterface {
  nombre: string;
  edad: number;
  dni: string;
  curso: string;
}

const personaInterace: PersonaInterface = {
  nombre: "Nigell",
  edad: 21,
  dni: "0850106188",
};

const alumnoInterface: Alumno = {
  nombre: "Nigell",
  edad: 21,
  curso: "TypeScript",
  dni: "06222222",
};

interface estudiante {
  nombre: string;
  edad: number;
  dni: string;
  curso: string;
}


//*Utility types
//?Partial: allows create object with some interface's properties
const nachel: Partial<Alumno> = {
  nombre: "Nigell",
};

//?Required: you must createa a object with all interface's properties
const fercho: Required<Alumno> = {
  nombre: "Fernando",
  edad: 20,
  curso: "dats",
  dni: "062222",
};
console.log(nachel);

//?ReadOnly: you are not able to edit the properties
const personaModificable: Readonly<Persona> = {
  nombre: 'Juan',
  edad: 30
}

//personaModificable.nombre = 'xd'

//*Custom Types
type ReadonlyPerson = Readonly<Persona>

const readPerson: ReadonlyPerson = {
  nombre: 'a',
  edad: 3
}

interface Course{
  name: string
  duration: number
}

interface Gentleman{
  name: string
  age: number
  courses: Course[]
}


//*Generics: you specific the type when you have to use the function
const logger = <T>(variable: T) =>{
  console.log(variable)
}

logger<number>(2)

interface GenericType<T>{
  variable: T
}

const ferchon: GenericType<string> = {
  variable: "a"
}


