import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="changeCounter()">+ 1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="changeCounter(counter)">- 1</button>
  `,
})
export class CounterComponent {
  constructor() {}


  public title: string = 'Mi primera App de Angular';
  public counter: number = 10;

  counterReset = this.counter;


  changeCounter(value?:number){

    if(value) {
      this.counter --;

      return
    }
    this.counter ++;

  }

  resetCounter() {
    this.counter = this.counterReset;
  }
}
