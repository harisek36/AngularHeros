import { Component, OnInit } from '@angular/core';
import { VehicleDetailsDef } from '../VehicleDetails';
import { VehicleServices } from '../vehicle-service.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers: [VehicleServices, MessageService]
})
export class VehicleComponent implements OnInit {
  private _vehicle: VehicleDetailsDef[];
  private selectedVehicle: VehicleDetailsDef;
  getVehicle(): void {
    this.vehicleService.getVEHICLES().subscribe(vehicles => this._vehicle = vehicles);
  }
  constructor(private vehicleService: VehicleServices) {
  }
  onSelectVehicle(selectedVehTemplate: VehicleDetailsDef): void {
    this.selectedVehicle = selectedVehTemplate;
  }

  ngOnInit() {
    this.getVehicle();
  }

}
