import { MatSnackBar } from '@angular/material';
import { Marker } from './../../entities/Marker';
import { MapUser } from './../../entities/MapUser';
import { HttpClient } from '@angular/common/http';
import { MapComponent } from './../map/map.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  @Input()
  maps: MapComponent;

  allUsers: MapUser[] = [];
  selectedUser: MapUser;


  ngOnInit() {
    this.getAllUsers();
  }

  selectUser() {
    this.maps.lat = parseFloat(this.selectedUser.location.latitude);
    this.maps.lng = parseFloat(this.selectedUser.location.longitude);
  }


  getAllUsers() {
    this.http.get<MapUser[]>("https://glacial-escarpment-40412.herokuapp.com/users")
      .subscribe(data => {
        this.allUsers = data;
        this.setUsersMarkers();
      },
        error => console.log(error));
  }

  setUsersMarkers() {
    this.allUsers.forEach(u => {
      let m: Marker = new Marker;
      m.latitude = parseFloat(u.location.latitude);
      m.longitude = parseFloat(u.location.longitude);
      this.maps.markers.push(m);
    });
  }

  sortUsers() {
    this.allUsers.sort((a, b) => {
      let aLat = parseFloat(a.location.latitude);
      let aLng = parseFloat(a.location.longitude);
      let aDist = this.calculateDistance(aLat, this.maps.lat, aLng, this.maps.lng);
      let bLat = parseFloat(b.location.latitude);
      let bLng = parseFloat(b.location.longitude);
      let bDist = this.calculateDistance(bLat, this.maps.lat, bLng, this.maps.lng);
      if (aDist > bDist) {  //A far
        return 1;
      }

      if (aDist < bDist) { // B far
        return -1;
      }

      return 0;
    });
    this.snackBar.open('User list sorted!', '', {
      duration: 4500,
    });

  }

  calculateDistance(lat1: number, lat2: number, long1: number, long2: number) {
    let p = 0.017453292519943295;    // Math.PI / 180
    let c = Math.cos;
    let a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((long1 - long2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
    return dis;
  }

}
