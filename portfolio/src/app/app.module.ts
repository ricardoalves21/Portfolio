import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './portfolio/menu/menu.component';
import { FooterComponent } from './portfolio/footer/footer.component';
import { CarouselComponent } from './portfolio/carousel/carousel.component';
import { SobreComponent } from './portfolio/sobre/sobre.component';
import { CarreiraComponent } from './portfolio/carreira/carreira.component';
import { TrabalhosComponent } from './portfolio/trabalhos/trabalhos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CarouselComponent,
    SobreComponent,
    CarreiraComponent,
    TrabalhosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
