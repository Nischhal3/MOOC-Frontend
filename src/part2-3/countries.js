import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayCountries from './component/displayCountries';
import Filter from './component/filter';
import CountryDetails from './component/countryDetails';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');

    const fetchCountries = () => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                //console.log(response.data);
                setCountries(response.data);
            }).catch(error => {
                console.log('Error', error);
            })
    }
    useEffect(fetchCountries, []);
    //console.log(countries);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        //console.log('Search', search);
    }

    const filter = search
        ? countries.filter(country => {
            return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        }) : countries

    // console.log('search', search);
    // console.log('length', filter.length);

    /**
     * Function call which takes a parameter name
     * @param {*} name stores the value of country.name from  displayCoutry.js 
     * setSearch(name) => sets the value of search field with the country name
     */
    const countryDetails = (name) => {
        setSearch(name);
        //console.log(search);
        //console.log(filteredCountries.length);
    }

    //filtering countries through search bar
    const filteredCountries = filter.map(country => {
        return (
            <DisplayCountries key={country.alpha2Code} country={country} filter={filter} countryDetails={countryDetails} />
        )
    })

    //displaying details when one coutry is displayed
    const showDetails = filter.map(country => {
        return (
            <CountryDetails key={country.alpha2Code} country={country} />
        )
    })

    return (
        <div>
            <h1>Countries</h1>
            <Filter search={search} handleSearch={handleSearch} />
            {filter.length === 0 ? 'Country not found!'
                : filter.length === 1 ? showDetails
                    : filteredCountries
            }
        </div>
    )
}

export default Countries;