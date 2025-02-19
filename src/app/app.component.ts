import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { log } from 'node:console';
import { lookupService } from 'node:dns/promises';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tst';
}

// console.log("Hola mundo");


let age:number   = 25;

let name:string  = "Juan";

let mayor:boolean = true;

let estruture:object = {
  name:"Juan",
  apellido:"Suarez"
};

type dato = string|boolean|number;
type dato2 = "Admin" | "Employe";
type datotrhee = object;


// type datos = dato & dato2 & datotrhee;
type datos = dato | datotrhee ;

let fruits:Array<dato> = ["mazana", "pera", "banana"];
let rols:Array<dato2> = ["Admin", "Employe"];
let fruitstwo:string[] = ["mazana", "pera", "banana"];
let fruitsthree:object[] = [{}, {name: "Jefferson", age:45} ];
let fruitsfour:datos[] = [ "Admin" ];

console.log({fruitsthree});

const namefour: string = "Juan"

// type

type d  = string;
type d2 = "Hola";
type d3 = d & d2;
let valor = "hola";

// let prueba : any;
let prueba : any;
prueba = {};
prueba = 25;
prueba = [];


let prueba2 = 25;

// Tipos de datos de TS

// void
function saludar():void{
  // let varia = console.log("Hola mundo");
  let varia = "Hola Mundo 🙌";
  // return varia;
}
// saludar();
// console.log(saludar()); unf
// internamente hace una validadcion 
let respuesta:unknown;
respuesta = 25;
respuesta = "Hola";


//  null:  vacio que se asigna 
// undefined :no definido
let respta2  = null;
let respta3  = undefined;


// let tipo5:string|null;
let tipo5:string|undefined;
// Ya esta definido
// tipo5 = "hola";
tipo5?.concat;

// tipo5.length;
// null seft

// / ***** Casteo o asercion ***** /

// let casteo:any = " ";
// // (casteo as string).

// let casteo2 = (casteo as Array<string>);
// casteo = [25];

let casteo: Array<number>;
casteo = [25];
let caste2 = (casteo as Array<number>)

// let caste2 = 

let casteo3 = 25 as number;
let caste4:number;


let casteo5;
casteo5 = "hola" as string | boolean;
casteo5 = true;

// ______
let casteo8;

// casteo8 = <string | number> "ingCivil";

// const canvas = document.getElementById("canvas");
// canvas.
// const canvas2 =<HTMLCanvasElement> document.getElementById("canvas");
// const canvas3 = document.getElementById("canvas");

// Enums

export enum Carreras {
  Uno  = "ing de ST",
  Dos  = "Diseño grafico",
  Tres = "Administración" ,
} 

type Carreras2 = "ing de ST" | "Diseño grafico" | "Administracion"; 

const carrera = Carreras.Tres.toUpperCase();
const carrera2 = Carreras["Tres"];///
const carrera5 = "administracion";
const carrera3 = "Administracion";
const carrera4 = "administración";

console.log(carrera)
console.log(`La wea es : ${carrera2}`)
// console.log(carrera)


type tipo = number | boolean;

type Carrerass = "ing de ST" | "Diseño grafico" | "Administracion"; 

// interface Partial{
//   name:string,
//   apellido:string,
//   edad:tipo,
// }


type Partial = {
  name:string,
  apellido:string,
  edad:tipo,
}

// Interfaces 
interface Estudiante extends Partial{
  aprobado?:boolean,
  carrera:Carrerass,
  saludar?:()=>string,
  saludar2?:()=>void,
  direccion:Array<string>,
}

let estudiante:Estudiante = {
  name:"Juan",
  apellido:"Suares",
  edad: 25,
  carrera:"Diseño grafico",
  saludar2:()=>{},
  direccion:["La wea respladeciente"]
}

let estudiante2:Estudiante ={
  name:"Juan",
  apellido:"Suares",
  edad: 25,
  aprobado:true,
  carrera:"Administracion",
  saludar:()=>{
    return "Hola"
  },
  direccion:["Jr. Wari"]
};

estudiante2.edad = 28;
// estudiante2.edad = 28;

console.log({estudiante2});







