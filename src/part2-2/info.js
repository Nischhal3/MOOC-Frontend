import React, { useState } from 'react'
import Button from './component/button';
import Details from './component/details';
import Form from './component/form';

const Info = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]);
    const [newPerson, setNewPerson] = useState('');

    const checkName = persons.map(person => person.name);
    //console.log(checkName);

    const addPerson = (e) => {
        e.preventDefault();
        //console.log(e.target);
        const personObj = {
            name: newPerson
        }
        if (checkName.includes(newPerson)) {
            alert(`${newPerson} is already in the Phonebook`);
            setNewPerson('');
        } else {
            setPersons(persons.concat(personObj));
            setNewPerson('');
        }
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setNewPerson(e.target.value);
    }

    return (
        <div>
            <h3>Phonebook</h3>
            <Form addPerson={addPerson} newPerson={newPerson} handleChange={handleChange} />
            <Button />
            <h3>Numbers</h3>
            {persons.map((person, index) => {
                return (
                    <Details key={index} name={person.name} number={person.number} />
                )
            })}
        </div>
    )
}

export default Info;