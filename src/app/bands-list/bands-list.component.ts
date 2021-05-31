import { Component, OnInit } from '@angular/core';
import { BandsListService } from '../bands-list.service';

@Component({
  selector: 'app-bands-list',
  templateUrl: './bands-list.component.html',
  styleUrls: ['./bands-list.component.css']
})
export class BandsListComponent implements OnInit {


  constructor(public bandsList:BandsListService) {
  }


  ngOnInit(): void {
  }

}
