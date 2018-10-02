import { MatSnackBar } from '@angular/material';
import { MapComponent } from './../map/map.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  @Input()
  maps: MapComponent;

  ngOnInit() {
  }

  addressToMap(location: string) {
    this.maps.addressToNumbers(location);
  }

  printValues() {
    console.log(this.maps.lat);
    console.log(this.maps.lng);
    let simpleLat = ((Math.round(this.maps.lat * 1000)) / 1000);
    let simpleLng = ((Math.round(this.maps.lng * 1000)) / 1000);

    this.snackBar.open('Lat: ' + simpleLat + ', ' + 'Long: ' + simpleLng, '', {
      duration: 4500,
    });
    // toast({ html: 'Lat: ' + simpleLat + ', ' + 'Long: ' + simpleLng }, 4000);
  }
}
