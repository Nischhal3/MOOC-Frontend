import React from 'react';
import Content from './component/content';
import Header from './component/header';
import Total from './component/total'

const Courses = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    let total = exercises1 + exercises2 + exercises3;

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} />
            <Total total={total} />
        </div>
    )
}

export default Courses;