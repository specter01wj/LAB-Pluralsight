import { of, from, Subscription, map, catchError, concatMap, range, delay } from 'rxjs';


o$ = of(1, 2, 3, 4);

s = toSignal(this.o$, { initialValue: 0 });

e = effect(() => console.log(this.s()));



