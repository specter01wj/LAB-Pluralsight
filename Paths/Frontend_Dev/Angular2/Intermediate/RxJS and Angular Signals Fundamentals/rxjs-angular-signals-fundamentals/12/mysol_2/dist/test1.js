var _this = this;
import { of } from 'rxjs';
o$ = of(1, 2, 3, 4);
s = toSignal(this.o$, { initialValue: 0 });
e = effect(function () { return console.log(_this.s()); });
