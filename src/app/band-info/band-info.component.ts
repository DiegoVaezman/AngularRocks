import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { BandsListService } from '../bands-list.service';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-band-info',
  templateUrl: './band-info.component.html',
  styleUrls: ['./band-info.component.css']
})
export class BandInfoComponent implements OnInit {

  bandList!:any;
  bandName!:String;
  selectedBand!:any;
  topAlbums!:any;
  topTracks!:any;
  confirmDisplay:String = "none";

  constructor( private route:ActivatedRoute, public bandsList:BandsListService, private http:HttpClient) { 
    this.bandList = bandsList.loadedBands;
    this.topAlbums = [];
    this.topTracks = [];
   }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.bandName = params['name'];
    })
    this.selectedBand = this.findBand();
    this.getAlbumsData();
    this.getTracksData();
  }

  getAlbumsData(){
    this.http.get<any>(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.bandName}&api_key=c3c8c602969a83bb0eb4a2774e986025&format=json`).subscribe(
      (response) => { for (let i=0; i<10; i++) {this.topAlbums.push(response.topalbums.album[i])} },
      (err) => console.log(err)
    )
  }
  getTracksData(){
    this.http.get<any>(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${this.bandName}&api_key=c3c8c602969a83bb0eb4a2774e986025&format=json`).subscribe(
      (response) => { for (let i=0; i<10; i++) {this.topTracks.push(response.toptracks.track[i])} },
      (err) => console.log(err)
    )
  }

  findBand(){
    let band = this.bandList.filter( (band:any) => band.name == this.bandName)[0];
    if( band.bio.summary.includes('<a target="_blank"')){
      return band;
    } else {
      band = this.setAttributeToDefaultLink(band);
      return band;
    }
  }

  setAttributeToDefaultLink(band:any){
    band.bio.summary = band.bio.summary.replace('<a ', '<a target="_blank" ')
    return band
  }
  
  deleteBand(){
    const indexLoaded = this.bandsList.loadedBands.findIndex((band:any) => band.name == this.bandName)
    this.bandsList.loadedBands.splice(indexLoaded,1);
  }

}
