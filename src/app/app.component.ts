import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent{
  inputValue:string = '';
  items:string[] = [];
  heading = true;
  addItems()
  {
    this.items.push(this.inputValue);
    console.log(this.items);
    this.inputValue="";
  }
}
