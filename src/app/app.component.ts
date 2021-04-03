import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      .pStyle {
        background: blue;
      }
    `,
  ],
})
export class AppComponent {
  buttonDisplay: boolean = false;
  counter: number = 0;

  onbuttonDisplay() {
    this.buttonDisplay = !this.buttonDisplay;
    if (this.buttonDisplay) {
      this.counter++;
    }
  }
  getColor() {
    if (this.counter >= 5) {
      return 'white';
    } else {
      ('black');
    }
  }
}
