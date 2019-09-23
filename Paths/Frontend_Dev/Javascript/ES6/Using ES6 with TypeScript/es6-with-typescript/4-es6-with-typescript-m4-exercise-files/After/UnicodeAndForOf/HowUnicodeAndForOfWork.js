var HowUnicodeAndForOfWork;
(function (HowUnicodeAndForOfWork) {
    var names = ['Alice', 'Bob', 'Charlie', 'Dana', 'Elvis', 'Fran', 'George', 'Hope'];
    names.forEach(function (item) {
        console.log(item);
    });
    for (var item in names) {
        console.log(names[item]);
    }
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var item = names_1[_i];
        console.log(item);
    }
    var instrument = "🎸";
    for (var i = 0; i < instrument.length; i += 1) {
        console.log(instrument[i]);
    }
    for (var _a = 0, instrument_1 = instrument; _a < instrument_1.length; _a++) {
        var item = instrument_1[_a];
        console.log(item);
    }
})(HowUnicodeAndForOfWork || (HowUnicodeAndForOfWork = {}));
