import React from 'react';
import DisplayContent from './component/content';
import DisplayHeader from './component/header';
import Total from './component/total';

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

    return (
        <div>
            {
                courses.map(course => {
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
                            <Total total={
                                course.parts.reduce((acc, currVal) => {
                                    return { exercises: acc.exercises + currVal.exercises }
                                })
                            } />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Courses;