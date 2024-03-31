interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string;
}

function buildCar(manufacturer: string, model: string, ...options: [string, string][]): Car {
    let car: Car = {
        manufacturer,
        model,
    };
    for (let i = 0; i < options.length; i++) {
        let [key, value] = options[i];
        car[key] = value;
    }
    return car;
}

let myCar = buildCar('Toyota', 'supra', ['color', 'black'], ['optionalFeatures', 'sunroof']);
console.log(myCar);
