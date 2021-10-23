import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: `heroe.component.html`
})


export class HeroeComponent{
    nombre: string = 'IronMan  ';
    edad: number = 45;

    get NombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

   obtenerNombre():string{
        return `${ this.nombre }` //esto estaria templatizado
    }
    
    cambiarNombre():void{
        this.nombre = 'SpiderMan'
    }
    cambiarEdad():void{
        this.edad = 35
    }
}