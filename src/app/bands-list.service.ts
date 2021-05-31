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

  constructor() { 
    this.loadedBands = [];
  }

  getSavedBands(){
    return this.savedBands;
  }
  addBandToLoadedBands(band:any){
    this.loadedBands.push(band);
  }
  showBands(){
    return this.loadedBands;
  }


  setDataHover(data:any){
    this.dataHover = data;
  }
  getDataHover(){
    return this.dataHover
  }

}
