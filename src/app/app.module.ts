import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiraPaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
