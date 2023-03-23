import './css/styles.css';
import {fetchCountries} from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;


const inputCounrySearchEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');


const onSearchCounry = (event) => {
    event.preventDefault();

    const searchValue = event.currentTarget.value.trim();
    console.log(searchValue);
    
    fetchCountries(searchValue).then(console.log);
}











inputCounrySearchEl.addEventListener('input', onSearchCounry);
