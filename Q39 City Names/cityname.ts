function city_country(city:String, country:String) : string{
    return `${city}, ${country}`;
}
let location1 = city_country('karachi', 'Pakistan');
let location2 = city_country('Tokyo', 'Japan');
let location3 = city_country('Kabul', 'Afghanistan');
console.log(location1);
console.log(location2);
console.log(location3);