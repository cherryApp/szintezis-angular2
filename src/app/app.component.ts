import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;
  title: string = `app`;
  isDisabled: boolean = false;
  timerActive: boolean = false;

  constructor() {
    setInterval( () => {
      if (this.timerActive) {
        this.counter++;
        this.isDisabled = !this.isDisabled;
      }
    }, 1000);
  }

  startTimer(): void {
    this.timerActive = !this.timerActive;
  }
}
