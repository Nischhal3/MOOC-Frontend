const Calculation = (props) => {
    return (
        <div>
            <p> all: {props.total}</p>
            <p> average: {props.average}</p>
            <p> positive: {props.positive}%</p>
        </div>
    )
}

export default Calculation;