import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  cars:string[]=[];
  carDataAdded(carData:string[]){
    this.cars = carData;
  } 
}
