import { Component, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'toSignal_app';
  o$ = of(1, 2, 3, 4);
  o1$ = of(1, 2, 3, 4).pipe(delay(this.randomDelay()));
  s: any;
  s1: any;

  constructor() {
    this.s = toSignal(this.o$, { initialValue: 0 });
    this.s1 = toSignal(this.o1$, { initialValue: 0 });

    effect(() => {
      console.log('Signal value:', this.s());
    });

    effect(() => {
      console.log('Signal value:', this.s1());
    });
  }

  randomDelay(): number {
    return Math.floor(Math.random() * 1000) + 500;
  }


}
