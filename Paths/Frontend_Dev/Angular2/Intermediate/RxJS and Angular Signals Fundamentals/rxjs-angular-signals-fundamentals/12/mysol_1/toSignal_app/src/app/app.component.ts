import { Component, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';

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
  s: any;

  constructor() {
    this.s = toSignal(this.o$, { initialValue: 0 });

    effect(() => {
      console.log('Signal value:', this.s());
    });
  }

}
