var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { of, from, map, tap } from 'rxjs';
var subApples;
var subNumbers;
var apples$ = from([
    { id: 1, type: 'macintosh' },
    { id: 2, type: 'gala' },
    { id: 3, type: 'fuji' },
]);
var numbers$ = of(2, 4, 6);
subApples = apples$.pipe(map(function (a) { return (__assign(__assign({}, a), { color: 'red' })); }), tap(function (a) { return console.log('Apple:', a); })).subscribe();
subNumbers = numbers$.pipe(map(function (item) { return item * 2; })).subscribe(function (val) {
    return console.log('Map x2:', val);
});
