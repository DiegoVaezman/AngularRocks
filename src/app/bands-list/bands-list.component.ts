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
    // this.bandsList.filter = '';
  }

  search(){
    console.log("searh")
    console.log(this.bandsList.filter)
    this.bandsList.filter = this.textInput;
    this.bandsList.filterBands();
    console.log(this.bandsList.filteredBands)
    this.bandsList.filter == '';
    this.textInput == '';
    this.bandsList.showBackBotton();
  }

  navigateBack() {
    this._location.back();
  }

  resetFilter(){
    this.bandsList.filteredBands = this.bandsList.loadedBands;
  }
}
