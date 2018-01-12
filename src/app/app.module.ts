import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { MessageComponent } from './message/message.component';
import {VehicleServices} from './vehicle-service.service';
import {MessageService} from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    VehicleDetailsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [VehicleServices, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
