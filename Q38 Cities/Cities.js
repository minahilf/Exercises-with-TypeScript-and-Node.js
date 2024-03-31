function describeCity(city, country) {
    if (country === void 0) { country = 'default country'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity('karachi', 'Pakistan');
describeCity('New York');
describeCity('Tokyo', 'Japan');
