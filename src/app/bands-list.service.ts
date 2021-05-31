import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BandsListService {

  savedBands:Array<String> = [
    "The_Rolling_Stones",
    "Led_Zeppelin",
    "Queen",
    "Pink_Floyd",
    "Deep_Purple",
    "AC/DC",
    "The_Ramones",
    "Kiss"
  ];
  loadedBands!:any;
  dataHover!:any;
  filteredBands!:any;
  backButton!:Boolean

  constructor() { 
    this.loadedBands = [];
    this.backButton = false;
  }



  getSavedBands(){
    return this.savedBands;
  }
  addBandToLoadedBands(band:any){
    this.loadedBands.push(band);
  }
  showBands(){
    if (this.filteredBands){
      return this.filteredBands
    } else {
    return this.loadedBands;
    }
  }


  setDataHover(data:any){
    this.dataHover = data;
  }
  getDataHover(){
    return this.dataHover
  }

  /*searchBand*/
  filterSavedBands(text:String){
    if (text == undefined) {
      this.filteredBands = this.loadedBands
    } else {
    this.filteredBands = this.loadedBands.filter((band:any) => band.name.toLowerCase().includes(text.toLowerCase()))
    }
  }

  /*show/hide back button*/
  showBackBotton(){
    this.backButton = !this.backButton;
  }
}
