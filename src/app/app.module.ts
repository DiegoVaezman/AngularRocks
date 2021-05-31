import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BandsListComponent } from './bands-list/bands-list.component';
import { ListComponent } from './list/list.component';
import { BandInfoComponent } from './band-info/band-info.component'
import { HttpClientModule } from '@angular/common/http';

const rutasApp:Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full' },
  { path:'bandslist', component: BandsListComponent, 
    children: [
      { path: '', component:  ListComponent },
      { path: 'grupo1', component:  BandInfoComponent }
    ]
  },
  // { path:'bandslist', component: ListComponent },
  // { path:'detalles', redirectTo: 'lista-libros' },
  // { path:'detalles/:libroId', component: DetallesComponent },
  // { path:'error404', component: Error404Component },
  // { path:'**', redirectTo: 'error404' } //Debe estar al final de todos.
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BandsListComponent,
    ListComponent,
    BandInfoComponent
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
