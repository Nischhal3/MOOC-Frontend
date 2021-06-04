import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DisplayWeather from './displayWeather';

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState([]);

    const API_KEY = process.env.REACT_APP_UNSPLASH_KEY;
    //console.log(API_KEY);

    const fetchWeather = () => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`)
            .then(response => {
                //console.log(response.data);
                setWeather(response.data);
            }).catch(error => {
                console.log('Error', error);
            })
    }

    //console.log('Weather', weather.length);

    useEffect(fetchWeather, [API_KEY, capital]);
    return (
        <div>
            {weather.length === 0
                ? <h5>Loading weather...</h5>
                : <DisplayWeather weather={weather} />
            }
        </div>
    )
}

export default Weather;