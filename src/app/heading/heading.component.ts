import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: false,
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent implements OnChanges,OnInit,DoCheck,OnDestroy{
  @Input("inputValuePass") value:string[] =[];
  noOfValues = 0;
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges Called!");
   }
   ngOnInit(): void {
    this.noOfValues = 1;
    this.value.push("Thrisith"); 
     console.log("ngOninit Inizialized!");
   }
   ngDoCheck(): void {
     if(this.value.length > this.noOfValues)
     {
      console.log("Do Check Called!");
      this.noOfValues++;
      console.log("Changing the value", this.noOfValues);
     }
   }
   ngOnDestroy(): void {
     console.log("OnDestroy Called!");
   }
}
