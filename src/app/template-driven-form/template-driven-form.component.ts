import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: false,
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  countryList:Country[] = [new Country("1","India"),new Country("2","Sri Lanka"),new Country("3","")];
  onSubmit(value:NgForm){
    console.log(value);
  }
}
class Country{
  id:string;
  name:string;
  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}