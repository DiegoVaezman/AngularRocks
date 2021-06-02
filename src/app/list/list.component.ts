import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BandsListService } from '../bands-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 

  constructor(private http:HttpClient, public bandsList:BandsListService ) {

  }

  ngOnInit(): void {
  
  }

  
}
