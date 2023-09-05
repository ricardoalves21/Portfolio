import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './portfolio/menu/menu.component';
import { FooterComponent } from './portfolio/footer/footer.component';
import { SobreComponent } from './portfolio/sobre/sobre.component';
import { CarreiraComponent } from './portfolio/carreira/carreira.component';
import { TrabalhosComponent } from './portfolio/trabalhos/trabalhos.component';
import { ContatoComponent } from './portfolio/contato/contato.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AncoraComponent } from './portfolio/ancora/ancora.component';
import { NavbarComponent } from './portfolio/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    SobreComponent,
    CarreiraComponent,
    TrabalhosComponent,
    ContatoComponent,
    AncoraComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
