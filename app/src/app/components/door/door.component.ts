import { Component } from '@angular/core';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss']
})
export class DoorComponent {

  displayLine: boolean = false

  showLine() {
    this.displayLine = true
  }

  hideLine() {
    this.displayLine = false
  }
}
