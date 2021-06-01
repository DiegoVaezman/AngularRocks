import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BandsListService } from '../bands-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  savedBands:any = this.bandsList.getSavedBands();

  constructor(private http:HttpClient, public bandsList:BandsListService ) {
    
  }

  ngOnInit(): void {
    this.cargarLista();
  }
  cargarLista(){
    this.bandsList.loadedBands = [];
    for (let i=0; i<this.savedBands.length; i++){
      this.http.get<any>(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.savedBands[i]}&api_key=c3c8c602969a83bb0eb4a2774e986025&format=json`).subscribe(
        (response) => { this.bandsList.addBandToLoadedBands(response.artist)},
        (err) => console.log(err)
      )
    }
  }

  showBands(){
    return this.bandsList.showBands()
  }




}
