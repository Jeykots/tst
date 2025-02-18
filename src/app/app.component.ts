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


// void
function saludar():void{
  // let varia = console.log("Hola mundo");
  let varia = "Hola Mundo 🙌";
  // return varia;
}
// saludar();
console.log(saludar());









