const Button = (props) => {
    return (
        <button className='unicafeButton' onClick={props.handleClick}>{props.text}</button>
    )
}

export default Button;