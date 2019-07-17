import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { TopbarComponent } from './home/topbar/topbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContainerComponent } from './home/container/container.component';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ErreurComponent } from './home/erreur/erreur.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {CategoriesComponent} from './home/categories/categories.component';
import {ClientsComponent} from './home/clients/clients.component';
import {SousCategoriesComponent} from './home/categories/sous-categories/sous-categories.component';
import {OffreComponent} from './home/offre/offre.component';
import {RestaurantComponent} from './home/restaurant/restaurant.component';
import {ReservationtableComponent} from './home/reservationtable/reservationtable.component';
import {ReclamationComponent} from './home/reclamation/reclamation.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { DemandeAjoutRestaurantComponent } from './home/demande-ajout-restaurant/demande-ajout-restaurant.component';
import { TraiterdemandeComponent } from './home/traiterdemande/traiterdemande.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchPipe } from './pipes/search.pipe';
import { DetailsComponent } from './home/restaurant/details/details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { GestionDispotableComponent } from './gestion-dispotable/gestion-dispotable.component';
import { ReclamerComponent } from './reclamer/reclamer.component';
import { MesRestoComponent } from './mes-resto/mes-resto.component';
import { PrivelegesComponent } from './home/priveleges/priveleges.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    ContainerComponent,
CategoriesComponent,
    ClientsComponent,
    SousCategoriesComponent,
    OffreComponent,
    RestaurantComponent,
    ReservationtableComponent,
    ReclamationComponent,
    LoginComponent,
    ErreurComponent,
    RegisterComponent,
    DashboardComponent,
    DemandeAjoutRestaurantComponent,
    TraiterdemandeComponent,
    SearchPipe,
    DetailsComponent,
    GestionDispotableComponent,
    ReclamerComponent,
    MesRestoComponent,
    PrivelegesComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
