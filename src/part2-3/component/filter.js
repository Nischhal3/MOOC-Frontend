const Filter = (props) => {
    return (
        <div>
            Search countries: <input placeholder='search...' onChange={props.handleSearch} value={props.search} />
        </div>
    )
}

export default Filter;