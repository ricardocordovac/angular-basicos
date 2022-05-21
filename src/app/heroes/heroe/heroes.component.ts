import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{

    nombre:string='Iroman';
    edad:number=45;
    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`
    }

    
    public get nombreCapitalizado() : string {
        return  this.nombre.toUpperCase();
    }
    cambiarNombre():void{
        this.nombre="Spiderman";
        
    }
    
    CambiarEdad():void{
        this.edad=30;
    }
}