const Form = (props) => {
    return (
        <form onSubmit={props.addPerson}>
            <div>
                name:  <input placeholder='name' value={props.newPerson} onChange={props.handleChange} />
            </div>
        </form>
    )
}

export default Form;