import React from 'react';

const CardItems = ({course, creditItem, totalPrice}) => {
    return (
        <div className='bg-white p-5 rounded-xl'>
                <div className='pb-3'>
                    <h3 className='text-lg text-[#2F80ED] font-semibold'>Credit Hour remaining {20 - creditItem} </h3>
                </div>
                <div className='py-2 border-t'>
                    <h3 className='text-xl font-semibold'>Course Name</h3>
                    <div className='py-4 text-gray-300'>
                    {course.map((num, idx) => <h3 className='text-sm text-gray-500' key={idx}> {idx+1}. {num}</h3>)}
                    </div>
                </div>
                <div className='border-t py-2'>
                    <h3>Total credit hours: {creditItem}</h3>
                </div>
                <div className='border-t pt-2'>
                    <h3>Total Price: {totalPrice} USD</h3>
                </div>
            </div>
    );
};

export default CardItems;