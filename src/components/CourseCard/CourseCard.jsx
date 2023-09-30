import React from 'react';
import {  BsBook } from 'react-icons/bs';
import { BiDollar } from "react-icons/bi";

const CourseCard = ({ card, handleCard }) => {
    const { title, images, description, credit, price } = card
    return (
        <div className="flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                    src={images}
                    className="h-full w-full"
                />
            </div>
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                    <p className='font-semibold'>
                        {title}
                    </p>
                </div>
                <p>
                    {description.slice(0,100)}
                </p>
            </div>
            <div className='flex gap-3 justify-between'>
                    <div className='ml-5 py-3 flex justify-center items-center gap-2'>
                        <span><BiDollar></BiDollar></span>
                        <h4>Price: {price}</h4>
                    </div>
                    <div className='mr-5 py-3 flex justify-center items-center gap-2'>
                        <span><BsBook></BsBook></span>
                        <span>Credit: {credit}hr</span> 
                    </div>
                </div>
            <div className="p-6 pt-0">
                <button
                onClick={()=> handleCard(title, credit, price)}
                    className="middle w-full none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                    type="button"
                >
                    Select
                </button>
            </div>
        </div>
    );
};

export default CourseCard;