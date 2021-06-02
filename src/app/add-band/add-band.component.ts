import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BandsListService } from '../bands-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.css']
})
export class AddBandComponent implements OnInit {

  textInput!:String;
  notFound:String = "none"
  notFoundText!:String;

  constructor(private router: Router, private http:HttpClient, public bandsList:BandsListService ) { }

  ngOnInit(): void {
  }

  addBand(){
    this.http.get<any>(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.textInput}&api_key=c3c8c602969a83bb0eb4a2774e986025&format=json`).subscribe(
        (response) => { 
          if (response.error){
            this.notFoundText = response.message;
            this.notFound = "flex";
          } else {
          this.bandsList.loadedBands.push(response.artist);
          this.bandsList.filteredBands.push(response.artist);
          this.router.navigate([`/bandslist`])
          }
        },
        (err) => console.log(err)
      )
  }
}
