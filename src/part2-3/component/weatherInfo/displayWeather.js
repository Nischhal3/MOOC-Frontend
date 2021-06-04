const DisplayWeather = ({ weather }) => {
    return (
        <div>
            <h3>Weahter in {weather.location.name}</h3>
            <p>Temperature: {weather.current.temperature}&deg;C</p>
            <img src={weather.current.weather_icons} alt="weather_icons" width='120px' height='120px' />
            <p>Wind:{weather.current.wind_speed} mph in {weather.current.wind_dir}.</p>
        </div>
    )
}

export default DisplayWeather;