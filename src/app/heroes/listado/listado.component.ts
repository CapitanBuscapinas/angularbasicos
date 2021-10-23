import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

    heroes: string[] = ['Hulk','Thor','SpiderMan','Ironman','Goku'];
    heroeBorrado: string = '';
    borrarHeroe(){
     this.heroeBorrado = this.heroes.pop() || '';  
     
    }
}
