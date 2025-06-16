import React from 'react';

const Newslatter = () => {
    return (
        <div className=' lg:mb-[-100px] z-40 relative'>
            <div className='md:flex container mx-auto rounded-2xl bg-black  items-center justify-between'>
                <div className='font-semibold text-[40px] lg:w-[501px] ml-[64px] mt-[43px] mb-[43px] text-white'>STAY UPTO DATE ABOUT OUR  LATEST OFFERS</div>
                <div className='lg:mr-[64px]'>
                   <div> <input className='w-[250px] lg:w-[350px] h-[46px] mb-2 bg-white text-black rounded-3xl text-center' type="email" name="" id="" placeholder='Enter your email address' /></div>
                    <div><button className='w-[250px] mb-2 lg:w-[350px] h-[46px] bg-white text-black rounded-3xl'>Subscribe the Newsletter</button></div>
                </div>
            </div>
        </div>
    );
};

export default Newslatter;