import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { BandsListService } from './bands-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularRocks';
  savedBands:any = this.bandsList.getSavedBands();

  constructor(private router: Router, private http:HttpClient, public bandsList:BandsListService ) {}

  ngOnInit() {
    console.log("init app se pone '' text")
    this.router.navigate([''])
    this.cargarLista()
  }

  cargarLista(){
    this.bandsList.loadedBands = [];
    for (let i=0; i<this.savedBands.length; i++){
      this.http.get<any>(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.savedBands[i]}&api_key=c3c8c602969a83bb0eb4a2774e986025&format=json`).subscribe(
        (response) => { this.bandsList.addBandToLoadedBands(response.artist), console.log("hay respuesta")},
        (err) => console.log(err)
      )
    }
  }
}

