import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContainerComponent} from './home/container/container.component';

import {SousCategoriesComponent} from './home/categories/sous-categories/sous-categories.component';

import {LoginComponent} from './login/login.component';
import {ErreurComponent} from './home/erreur/erreur.component';
import {AuthGuard} from './guard/auth.guard';
import {RegisterComponent} from './register/register.component';
import {CategoriesComponent} from './home/categories/categories.component';
import {ClientsComponent} from './home/clients/clients.component';
import {OffreComponent} from './home/offre/offre.component';
import {ReservationtableComponent} from './home/reservationtable/reservationtable.component';
import {RestaurantComponent} from './home/restaurant/restaurant.component';
import {ReclamationComponent} from './home/reclamation/reclamation.component';
import {DashboardComponent} from './home/dashboard/dashboard.component';
import {DemandeAjoutRestaurantComponent} from './home/demande-ajout-restaurant/demande-ajout-restaurant.component';
import {TraiterdemandeComponent} from './home/traiterdemande/traiterdemande.component';
import {DetailsComponent} from './home/restaurant/details/details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TestBed} from '@angular/core/testing';
import {GestionDispotableComponent} from './gestion-dispotable/gestion-dispotable.component';
import {ReclamerComponent} from './reclamer/reclamer.component';
import {MesRestoComponent} from './mes-resto/mes-resto.component';
import {PrivelegesComponent} from './home/priveleges/priveleges.component';


const routes: Routes = [{path: '' , component: LoginComponent},
{path: 'register' , component: RegisterComponent},
  {path :'oublierMotPasse',component:DemandeAjoutRestaurantComponent},

  {path: 'home', component: HomeComponent, canActivate:[AuthGuard],
  children : [
    {path :'',component:DashboardComponent},
    {path :'categorie',component:CategoriesComponent},
    {path :'client',component:ClientsComponent},
    {path :'offre',component:OffreComponent},
    {path :'reclamation',component:ReclamationComponent},
    {path :'reservation',component:ReservationtableComponent},
    {path :'tables',component:GestionDispotableComponent },
    {path :'restaurant',component:RestaurantComponent},
    {path :'details/:id',component:DetailsComponent},
    {path :'reclamer',component:ReclamerComponent},
    {path :'souscategorie/:id',component:SousCategoriesComponent},
    {path :'mesResto',component:MesRestoComponent},
    {path :'privelege',component:PrivelegesComponent}



  ]

  },

  {path : "**", component:ErreurComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
