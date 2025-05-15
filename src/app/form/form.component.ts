import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() carAdded:EventEmitter<string[]>  = new EventEmitter;
  cars:string[]=[];
  carName = "";
  addCar(){
    this.cars.push(this.carName);
    this.carName="";
    this.carAdded.emit(this.cars);
  }
}
