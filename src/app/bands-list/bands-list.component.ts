import { Component, OnInit } from '@angular/core';
import { BandsListService } from '../bands-list.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bands-list',
  templateUrl: './bands-list.component.html',
  styleUrls: ['./bands-list.component.css']
})
export class BandsListComponent implements OnInit {
  textInput!:String;

  constructor(public bandsList:BandsListService, private _location: Location, private router: Router) {
  }


  ngOnInit(): void {
  }

  /*search band by filterBands() on service */
  search(){
    this.bandsList.filter = this.textInput;
    this.bandsList.filterBands();
    this.bandsList.filter == '';
    this.textInput == '';
    console.log("search")
  }

  /*back button function */
  navigateBack() {
    this._location.back();
  }

  /*back to loaded list after search*/
  resetFilter(){
    this.bandsList.filteredBands = this.bandsList.loadedBands;
  }
}
