import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-world',
  standalone: false,
  templateUrl: './sample-world.component.html',
  styleUrl: './sample-world.component.css'
})
export class SampleWorldComponent {
  getVal()
  {
    return "Sample-World";
  }
}
