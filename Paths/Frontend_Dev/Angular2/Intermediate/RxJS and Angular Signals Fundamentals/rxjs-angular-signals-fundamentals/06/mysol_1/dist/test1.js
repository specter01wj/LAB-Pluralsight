import { of, map } from 'rxjs';
var subData;
var data$ = of(2, 4, 6);
subData = data$.pipe(map(function (i) {
    if (i === 4) {
        throw 'Error!';
    }
    return i;
})).subscribe({
    next: function (x) { return console.log(x); },
    error: function (err) { return console.error(err); },
    complete: function () { return console.log('complete'); }
});
