import { Component, OnInit } from '@angular/core';
import { PreviewVehiclesService } from './preview-vehicles.service';
import { PreviewClassesStyle } from 'src/app/core/models';

@Component({
  selector: 'app-preview-vehicles',
  templateUrl: './preview-vehicles.component.html',
  styleUrls: ['./preview-vehicles.component.scss']
})
export class PreviewVehiclesComponent implements OnInit {
  preview: any;
  previewClasses: PreviewClassesStyle = new PreviewClassesStyle();

  constructor(private service: PreviewVehiclesService) { }

  ngOnInit() {
    this.service.getPreviewVehicles().subscribe(
      (res: any) => {
        this.preview = res;
        this.setClasses();
      },
      (err: any) => {
        console.log(err);
      },
    );
  }

  private setClasses() {
    const nrOfVehicles = this.preview.vehicles.length;
    switch (nrOfVehicles) {
      case 0: {
        this.previewClasses.firstVehicleStyle = 'd-none';
        this.previewClasses.secondVehicleStyle = 'd-none';
        this.previewClasses.garageStyle = 'd-none';
        this.previewClasses.addStyle = 'col-12 col-sm-6 offset-sm-3 col-lg-4 offset-lg-4';
        break;
      }
      case 1: {
        this.previewClasses.firstVehicleStyle = 'col-12 col-sm-6 col-lg-4 offset-lg-2';
        this.previewClasses.secondVehicleStyle = 'd-none';
        this.previewClasses.garageStyle = 'd-none';
        this.previewClasses.addStyle = 'col-12 col-sm-6 col-lg-4';
        break;
      }
      case 2: {
        if (!this.preview.hasGarage) {
          this.previewClasses.firstVehicleStyle = 'col-12 col-sm-6 col-lg-4';
          this.previewClasses.secondVehicleStyle = 'col-12 col-sm-6 col-lg-4';
          this.previewClasses.garageStyle = 'd-none';
          this.previewClasses.addStyle = 'col-12 col-sm-6 col-lg-4';
          break;
        }
      }
      default: {
        this.previewClasses.firstVehicleStyle = 'col-12 col-sm-6 col-lg-3';
        this.previewClasses.secondVehicleStyle = 'col-12 col-sm-6 col-lg-3';
        this.previewClasses.garageStyle = 'col-12 col-sm-6 col-lg-3';
        this.previewClasses.addStyle = 'col-12 col-sm-6 col-lg-3';
        break;
      }
    }
  }
}
