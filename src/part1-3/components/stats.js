const Stats = (props) => {
    return (
        <div>
            <p>good: {props.good}</p>
            <p>neutral: {props.neutral}</p>
            <p>bad: {props.bad}</p>
        </div>
    )
}

export default Stats;