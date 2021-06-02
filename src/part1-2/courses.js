import React from 'react';
import Content from './component/content';
import Header from './component/header';
import Total from './component/total';

const Courses = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    const names = course.parts.map((part, index) => {
        return (
            <Content key={index} name={part.name} />
        )
    })

    const total = course.parts.reduce((accumulator, currentVal) => {
        return { exercises: accumulator.exercises + currentVal.exercises }
    });

    console.log(total.exercises);

    return (
        <div>
            <Header course={course.name} />
            {names}
            <Total total={total.exercises} />
        </div>
    )
}

export default Courses;