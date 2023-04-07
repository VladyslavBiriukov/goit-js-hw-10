

export class CountriesAPI {
    #BASE_URL = 'https://restcountries.com/v3.1/name/';
    #FIELDS = 'fields=name,capital,population,flags,languages'
    
    async fetchCountries (name) {
    const response = await fetch(`${this.#BASE_URL}${name}?${this.#FIELDS}`);
    // console.log(response);
    if (!response.ok) {
        throw new Error(response.status);
    }
    ;
    return await response.json();
    }
}

