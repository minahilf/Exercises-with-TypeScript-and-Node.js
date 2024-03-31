function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicianNames = ['Harry Houdini', 'David Blaine', 'Doug Henning', 'Dai Vernon'];
var location1 = city_country('Karachi', 'Pakistan');
var location2 = city_country('Tokyo', 'Japan');
var location3 = city_country('Kabul', 'Afghanistan');
console.log(location1);
console.log(location2);
console.log(location3);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
    return magicians;
}
magicianNames = make_great(magicianNames);
show_magicians(magicianNames);
