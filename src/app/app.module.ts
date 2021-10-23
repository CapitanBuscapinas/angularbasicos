import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';

// YA NO NECESITO ESTOS MODULOS PORQUE LOS METI EN LA CARPETA HEROES Y CREE UN MODULO CON AMBOS
/*import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';*/
import { HeroesModulo } from './heroes/heroes.module';
import { ContadorModulo } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
   // ContadorComponent, // aca se declara el componente que cree "ContadorComponent"
    //HeroeComponent, ListadoComponent los saco de aca porque no los necesito mas
  ],
  imports: [
    BrowserModule,
    HeroesModulo,
    ContadorModulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
