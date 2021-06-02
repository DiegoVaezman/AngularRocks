import { Component, OnInit } from '@angular/core';
import { BandsListService } from '../bands-list.service';
import { ActivatedRoute, Params } from '@angular/router'
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-band',
  templateUrl: './edit-band.component.html',
  styleUrls: ['./edit-band.component.css']
})
export class EditBandComponent implements OnInit {

  textInput!:String;
  bandName!:String;

  constructor(private route:ActivatedRoute, public bandsList:BandsListService, private _location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.bandName = params['name'];
    })
  }

  /*updates loadedBands with new band information */
  editBand(){
    this.bandsList.loadedBands.find((band:any) => band.name == this.bandName).bio.summary = this.textInput;
    this._location.back();
  }
}
