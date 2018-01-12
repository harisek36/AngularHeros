import { Component, OnInit, Input } from '@angular/core';
import { VehicleDetailsDef } from '../VehicleDetails';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  @Input()vehicle: VehicleDetailsDef;

  constructor() { }

  ngOnInit() {
  }

}
