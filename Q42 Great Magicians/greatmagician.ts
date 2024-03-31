function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
let magicianNames: string[] = ['Harry Houdini', 'David Blaine', 'Doug Henning', 'Dai Vernon'];

let location1 = city_country('Karachi', 'Pakistan');
let location2 = city_country('Tokyo', 'Japan');
let location3 = city_country('Kabul', 'Afghanistan');

console.log(location1);
console.log(location2);
console.log(location3);

function make_great(magicians: string[]): string[] {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
    return magicians;
}

magicianNames = make_great(magicianNames);
show_magicians(magicianNames);
