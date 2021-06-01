import { Component, OnInit } from '@angular/core';
import { BandsListService } from '../bands-list.service';

@Component({
  selector: 'app-bands-list',
  templateUrl: './bands-list.component.html',
  styleUrls: ['./bands-list.component.css']
})
export class BandsListComponent implements OnInit {
  textInput!:String;

  constructor(public bandsList:BandsListService) {
  }


  ngOnInit(): void {
  }

  search(){
    this.bandsList.filterSavedBands(this.textInput);
    if (!(this.textInput == undefined || this.textInput == '')) {
      this.bandsList.showBackBotton();
    } 
  }

  

}
