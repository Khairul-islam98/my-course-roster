import React from 'react';

const CardItems = ({title, credit,}) => {
    return (
        <div className='bg-white p-5 rounded-xl'>
                <div className='pb-3'>
                    <h3 className='text-lg text-[#2F80ED] font-semibold'>Credit Hour remaining  </h3>
                </div>
                <div className='py-2 border-t'>
                    <h3 className='text-xl font-semibold'>Course Name</h3>
                    <div className='py-4 text-gray-300'>
                    
                    </div>
                </div>
                <div className='border-t py-2'>
                    <h3>Total credit hours:  </h3>
                </div>
                <div className='border-t pt-2'>
                    <h3>Total Price:  USD</h3>
                </div>
            </div>
    );
};

export default CardItems;