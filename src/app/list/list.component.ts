import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BandsListService } from '../bands-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // savedBands:any = this.bandsList.getSavedBands();

  bandsToShow = this.bandsList.loadedBands
  text!:any;

  constructor(private http:HttpClient, public bandsList:BandsListService ) {
  }

  ngOnInit(): void {
    // this.cargarLista();

    console.log(typeof this.bandsList.filter)
    // this.filter()
    // this.listBandsToShow = this.bandsList.loadedBands;


    console.log(this.bandsList.filter)
    console.log(this.bandsList.loadedBands)
    const filterText = this.bandsList.filter
    if (filterText == ''){
      console.log("muestro todas")
      console.log(this.bandsList.loadedBands)
      this.bandsToShow = this.bandsList.loadedBands
      // return this.bandsToShow
    } else{
      console.log("muestro filtradas")
      console.log(this.bandsList.loadedBands.filter((band:any) => band.name.toLowerCase().includes(filterText.toLowerCase())))
      console.log(typeof this.bandsList.loadedBands.filter((band:any) => band.name.toLowerCase().includes(filterText.toLowerCase())))
      this.bandsToShow = this.bandsList.loadedBands.filter((band:any) => band.name.toLowerCase().includes(filterText.toLowerCase()))
      // return this.bandsToShow
    }
  }

  prueba(){
    console.log(this.bandsList.loadedBands)
    this.bandsList.loadedBands = this.bandsList.loadedBands.filter((band:any) => band.name == "Queen")
    console.log(this.bandsList.loadedBands)
  }
  // cargarLista(){
  //   this.bandsList.loadedBands = [];
  //   for (let i=0; i<this.savedBands.length; i++){
  //     this.http.get<any>(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.savedBands[i]}&api_key=c3c8c602969a83bb0eb4a2774e986025&format=json`).subscribe(
  //       (response) => { this.bandsList.addBandToLoadedBands(response.artist)},
  //       (err) => console.log(err)
  //     )
  //   }
  // }

  // showBands(){
  //   return this.bandsList.showBands()
  // }

  /*si lo hago a través de función no funciona en el ngFor */
  filter(){
    // console.log(this.bandsList.filter)
    // console.log(this.bandsList.loadedBands)
    // const filterText = this.bandsList.filter
    // if (!(filterText == '')){
    //   console.log("muestro todas")
    //   console.log(this.bandsList.loadedBands)
    //   this.bandsToShow = this.bandsList.loadedBands
    //   return this.bandsToShow
    // } else{
    //   console.log("muestro filtradas")
    //   console.log(this.bandsList.loadedBands.filter((band:any) => band.name.toLowerCase().includes(filterText.toLowerCase())))
    //   console.log(typeof this.bandsList.loadedBands.filter((band:any) => band.name.toLowerCase().includes(filterText.toLowerCase())))
    //   this.bandsToShow = this.bandsList.loadedBands.filter((band:any) => band.name.toLowerCase().includes(filterText.toLowerCase()))
    //   return this.bandsToShow
    // }
    return this.bandsToShow
  }
  
}
