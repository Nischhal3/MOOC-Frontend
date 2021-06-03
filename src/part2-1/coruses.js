import React from 'react';
import DisplayContent from './content';
import DisplayHeader from './header';
import Total from './total';

const Courses = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]


    const display = courses.map(course => {
        return (
            <div key={course.id}>
                <DisplayHeader name={course.name} />
                {course.parts.map(part => {
                    return (
                        <div key={part.id}>
                            <DisplayContent name={part.name} exercises={part.exercises} />
                        </div>
                    )
                })}
                <Total total='TODO' />
            </div>
        )
    })



    /* const total = courses.parts.reduce((accumulator, currentVal) => {
        return { exercises: accumulator.exercises + currentVal.exercises }
    }); */
    //console.log(total.exercises);

    return (
        <div>
            <p>hello</p>
            {display}
        </div>
    )
}

export default Courses;