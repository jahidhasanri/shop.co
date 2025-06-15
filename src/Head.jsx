import React, { useState } from 'react';
import { MdCancel } from 'react-icons/md';

const Head = () => {
    const [isVisible, setIsVisible] = useState(true); // স্টেট তৈরি করা

    const handleHidden = () => {
        setIsVisible(false); // visible false করলে div hide হবে
    };

    return (
        <>
            {isVisible && (
                <div className='bg-black text-white flex items-center justify-center gap-10'>
                    <div className='mt-2 mb-3'>
                        <h3>Sign up and get 20% off your first order. Sign up Now</h3>
                    </div>
                    <div className='ml-32 mt-2'>
                        <button onClick={handleHidden}>
                            <MdCancel className="text-white text-2xl" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Head;
