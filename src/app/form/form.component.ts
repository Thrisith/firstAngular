import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  cars:string[]=[];
  carName = "";
  addCar(){
    this.cars.push(this.carName);
    this.carName="";
  }
}
