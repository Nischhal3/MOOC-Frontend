import React, { useState } from 'react'
import Button from './component/button';
import Details from './component/details';
import Filter from './component/filter';
import Form from './component/form';

const Info = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]);
    const [newPerson, setNewPerson] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');

    const checkName = persons.map(person => person.name);
    //console.log(checkName);

    //Stroing the value of name input field in newPeron
    const handleNameChange = (e) => {
        //console.log(e.target.value);
        setNewPerson(e.target.value);
    }

    //Storing the value of number input filed in newNumber
    const handleNumberChange = (e) => {
        setNewNumber(e.target.value);
        //console.log(e.target.value)
    }

    //Storing the value of searh input to search
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const addPerson = (e) => {
        e.preventDefault();
        //console.log(e.target);
        const personObj = {
            name: newPerson,
            number: newNumber
        }
        if (!newPerson) {
            alert('Name filed is empty');
            setNewNumber('');
        } else if (!newNumber) {
            alert('Number filed is empty');
            setNewPerson('');
        } else {
            if (checkName.includes(newPerson)) {
                alert(`${newPerson} is already in the Phonebook`);
                setNewPerson('');
                setNewNumber('');
            } else {
                setPersons(persons.concat(personObj));
                setNewPerson('');
                setNewNumber('');
            }
        }
    }

    //filtering person list with the search value
    const filteredPerson = persons.filter(person => {
        return person.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    return (
        <div>
            <h3>Phonebook</h3>
            <Filter search={search} handleSearch={handleSearch} />
            <h3>Add new Perons</h3>
            <Form
                addPerson={addPerson} newPerson={newPerson} handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange} newNumber={newNumber}
            />
            <Button addPerson={addPerson} />
            <h3>Numbers</h3>
            {filteredPerson.map((person, index) => {
                return (
                    <Details key={index} name={person.name} number={person.number} />
                )
            })}
        </div>
    )
}

export default Info;