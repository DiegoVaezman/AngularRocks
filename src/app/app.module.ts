import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BandsListComponent } from './bands-list/bands-list.component';
import { ListComponent } from './list/list.component';
import { BandInfoComponent } from './band-info/band-info.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { EditBandComponent } from './edit-band/edit-band.component';
import { AddBandComponent } from './add-band/add-band.component';

const rutasApp:Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full' },
  { path:'bandslist', component: BandsListComponent, 
    children: [
      { path: '', component:  ListComponent },
      { path: 'bandinfo/:name', component:  BandInfoComponent },
      { path: 'bandinfo/:name/edit', component:  EditBandComponent },
      { path: 'addband', component:  AddBandComponent }
    ]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BandsListComponent,
    ListComponent,
    BandInfoComponent,
    EditBandComponent,
    AddBandComponent
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
