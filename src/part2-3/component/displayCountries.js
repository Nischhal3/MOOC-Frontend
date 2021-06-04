const DisplayCountries = ({ country, filter, countryDetails }) => {

    return (
        <div className='country'>
            {
                filter.length <= 5
                    ? <div>
                        <p>{country.name}</p>
                        <p>
                            <img src={country.flag} width='100' height='90' alt='Country flag' />
                        </p>
                        <button onClick={() => countryDetails(country.name)} >Show details</button>
                    </div>
                    : <div>
                        <p>{country.name}</p>
                        <p>
                            <img src={country.flag} width='100' height='90' alt='Country flag' />
                        </p>
                    </div>
            }
        </div>
    )
}

export default DisplayCountries;