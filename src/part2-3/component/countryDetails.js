import Weather from "./weatherInfo/weather"

const CountryDetails = ({ country }) => {
    return (
        <div>
            <h3>{country.name}</h3>
            <p>{country.capital}</p>
            <p>Population {country.population}</p>
            <h5>Languages</h5>
            {country.languages.map((lang, index) => {
                return (
                    <li key={index}>{lang.name}</li>
                )
            })}
            <p>
                <img src={country.flag} width='100' height='90' alt='Country flag' />
            </p>
            <Weather capital={country.capital} />
        </div>
    )
}

export default CountryDetails;