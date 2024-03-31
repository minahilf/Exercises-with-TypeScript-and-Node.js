function buildCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var i = 0; i < options.length; i++) {
        var _a = options[i], key = _a[0], value = _a[1];
        car[key] = value;
    }
    return car;
}
var myCar = buildCar('Toyota', 'supra', ['color', 'black'], ['optionalFeatures', 'sunroof']);
console.log(myCar);
