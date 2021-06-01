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
    this.bandsList.filter = '';
  }

  search(){
    console.log("searh")
    this.bandsList.filter = this.textInput;
    console.log(this.bandsList.filter)
    // this.router.navigate(['']);
    // this.bandsList.filterSavedBands(this.textInput);
    // if (!(this.textInput == undefined || this.textInput == '')) {
    //   this.bandsList.showBackBotton();
    // } 
  }

  navigateBack() {
    this._location.back();
  }
}
