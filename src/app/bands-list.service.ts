import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandsListService {

  savedBands:Array<String> = [
    "The_Rolling_Stones",
    "Led_Zeppelin",
    "Queen",
    "pink_floyd",
    "deep_purple",
    "AC/DC",
    "the_ramones",
    "Kiss"
  ];
  loadedBands!:any;
  dataHover!:any;
  filteredBands!:any;
  backButton!:Boolean;
  filter!:String;

  constructor() { 
    this.loadedBands = [];
    this.filteredBands = [];
    this.filter = '';
    this.backButton = false;
  }



  getSavedBands(){
    return this.savedBands;
  }
  addBandToLoadedBands(band:any){
    this.loadedBands.push(band);
  }
  addBandToFilteredBands(band:any){
    this.filteredBands.push(band);
  }


  setDataHover(data:any){
    this.dataHover = data;
  }
  getDataHover(){
    return this.dataHover
  }

  /*searchBand   creo q n es necesario*/
  // filterBands(text:String){
  //   if (text == undefined) {
  //     this.filteredBands = this.loadedBands
  //   } else {
  //   this.filteredBands = this.loadedBands.filter((band:any) => band.name.toLowerCase().includes(text.toLowerCase()))
  //   }
  // }
  filterBands(){
    if (this.filter == '') {
      this.filteredBands = this.loadedBands;
    } else {
    this.filteredBands = this.loadedBands.filter((band:any) => band.name.toLowerCase().includes(this.filter.toLowerCase()));
    }
  }


  /*show/hide back button*/
  showBackBotton(){
    this.backButton = !this.backButton;
  }


}
