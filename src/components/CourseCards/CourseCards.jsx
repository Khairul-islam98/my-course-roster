import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';

const CourseCards = () => {
    const [card, setCard] = useState([])
    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCard(data))
    },[])
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                card.map(card => <CourseCard key={card.id} card={card}></CourseCard>)
            }
        </div>
    );
};

export default CourseCards;