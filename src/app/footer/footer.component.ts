import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const url: string = document.baseURI + "rest/";
//const url: string = "http://localhost:8080/rest/";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  // make this the default value, but also go to the server side in a RESTful way and fetch detailed information. on the server side, make the info come from the app.properties, so it's not hard coded and can be changed.
  projectInfo: string = "Created by Maor Barazani © 2018"

  ngOnInit() {
    this.http.get(url + "getInfo", { responseType: 'text' })
      .subscribe(data => this.projectInfo = data,
        error => console.log(error));
  }



}
