function describeCity(city: string, country: string = 'default country'): void {
    console.log(`${city} is in ${country}.`);
}
describeCity('karachi', 'Pakistan');
describeCity('New York');
describeCity('Tokyo', 'Japan');