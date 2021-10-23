import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[  // declaramos los elementos que conforman a mi modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[       //basicamente es declarar que listadoComponent va a ser publico, es decir se va a poder usar fuera
        ListadoComponent
    ],
    imports:[ //generalmente aca se declaran otros modulos que se vayan a usar
        CommonModule
    ]
    
})
export class HeroesModulo{

}