import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandsListService {

  /*Default bands list to load  */
  savedBands:Array<String> = [
    "The_Rolling_Stones",
    "Led_Zeppelin",
    "Queen",
    "pink_floyd",
    "deep_purple",
    "AC/DC",
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



  /*functions to initial load bands on app.component */
  getSavedBands(){
    return this.savedBands;
  }
  addBandToLoadedBands(band:any){
    this.loadedBands.push(band);
  }
  addBandToFilteredBands(band:any){
    this.filteredBands.push(band);
  }

  /*functions to show data on lateral panel */
  setDataHover(data:any){
    this.dataHover = data;
  }
  getDataHover(){
    return this.dataHover
  }

  /*function to filter data */
  filterBands(){
    if (this.filter == '') {
      this.filteredBands = this.loadedBands;
    } else {
    this.filteredBands = this.loadedBands.filter((band:any) => band.name.toLowerCase().includes(this.filter.toLowerCase()));
    }
  }

}
