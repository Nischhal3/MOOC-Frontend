import React, { useState } from 'react';
import Button from './components/button';
import Calculation from './components/calculation';
import Stats from './components/stats';

const Unicafe = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        setGood(good + 1);
    }
    const handleBad = () => {
        setBad(bad + 1);
    }

    const handleNeutral = () => {
        setNeutral(neutral + 1);
    }
    let total = good + neutral + bad;
    let average = 0;
    let positive = 0;

    if (good === 0 && bad === 0) {
        positive = 0;
    } else {
        positive = good / bad;
    }

    if (good === 0 && bad === 0 && neutral === 0) {
        average = 0;
    } else {
        average = good / total;
    }

    return (
        <div>
            <h1>Unicafe</h1>
            <h5>Give Feedback</h5>
            <Button text='Good' handleClick={handleGood} />
            <Button text='Neutral' handleClick={handleNeutral} />
            <Button text='Bad' handleClick={handleBad} />
            <h3>Statistics</h3>
            <Stats
                good={good} neutral={neutral} bad={bad} />
            <Calculation total={total} average={average} positive={positive} />
        </div>
    )
}

export default Unicafe;