import React, { useState } from 'react'
import Button from './component/button';
import Details from './component/details';
import Form from './component/form';

const Info = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ]);
    const [newPerson, setNewPerson] = useState('');

    const addPerson = (e) => {
        e.preventDefault();
        //console.log(e.target);
        const personObj = {
            name: newPerson
        }
        setPersons(persons.concat(personObj));
        setNewPerson('');
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
                    <Details key={index} name={person.name} />
                )
            })}
        </div>
    )
}

export default Info;