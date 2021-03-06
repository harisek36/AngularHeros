import { Injectable } from '@angular/core';
import { VehicleDetailsDef} from './VehicleDetails';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class VehicleServices {
  constructor(private messageService: MessageService) { }
  private _VEHICLES: VehicleDetailsDef[] = [
    { id: 11, name: 'Mr. Harish ' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];


  getVEHICLES(): Observable<VehicleDetailsDef[]> {
    this.messageService.add('VehicleService: fetched vehicles');
    return of(this._VEHICLES);
  }
}
