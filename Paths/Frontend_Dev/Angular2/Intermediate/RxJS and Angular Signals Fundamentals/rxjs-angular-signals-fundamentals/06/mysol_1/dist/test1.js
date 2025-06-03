import { of, map } from 'rxjs';
let subData;
const data$ = of(2, 4, 6);
subData = data$.pipe(map(i => {
    if (i === 4) {
        throw 'Error!';
    }
    return i;
})).subscribe({
    next: x => console.log(x),
    error: err => console.error(err),
    complete: () => console.log('complete')
});
