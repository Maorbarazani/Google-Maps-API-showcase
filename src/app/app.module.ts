import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavbarComponent,
    UsersComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEBu7J3B2utq3h-0W6FHVMtP9Z-GjBg-Q'
    }),
    AgmJsMarkerClustererModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSelectModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
