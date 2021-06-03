const Form = (props) => {
    return (
        <form onSubmit={props.addPerson}>
            <div>
                name:  <input placeholder='name' value={props.newPerson} onChange={props.handleChange} />
            </div>
            <div>
                number: <input placeholder='number' />
            </div>
        </form>
    )
}

export default Form;