import { Marker } from './../../entities/Marker';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  @Input() updatedAddress: string;


  ngOnInit() {
    console.log(this.lat);
    console.log(this.lng);
  }

  //INSTANCE VARIABLES:
  lat: number = 32.0494;
  lng: number = 34.7574;
  apiKey: String = "AIzaSyCEBu7J3B2utq3h-0W6FHVMtP9Z-GjBg-Q";

  newLat: number = 32.0494;
  newLng: number = 34.7574;

  markers: Marker[] = [];

  markerOpacity = 1;
  mapZoom = 8;


  addressToNumbers(address: String) {
    this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + this.apiKey)
      .subscribe(data => {
        this.lat = data['results']['0']['geometry']['location']['lat'];
        this.lng = data['results']['0']['geometry']['location']['lng'];
      },
        error => console.log(error));
  }

  onMapDrag(event) {
    this.newLat = event.lat;
    this.newLng = event.lng;
  }

  onMapIdle(event) {
    console.log(this.newLat);
    console.log(this.newLng);

    this.lat = this.newLat;
    this.lng = this.newLng;
  }

  onZoomChange(event) {
    this.mapZoom = event.value;
  }
  onOpacityChange(event) {
    this.markerOpacity = event.value;
  }








}
