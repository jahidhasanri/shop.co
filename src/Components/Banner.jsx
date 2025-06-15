import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#F2F0F1] text-black pb-4'>
           <div className='container mx-auto lg:flex justify-between'>
             <div>
                <h2 className='text-[24px] font-medium text-center lg:text-start md:text-[64px] md:font-bold text-black lg:mt-[127px] mb-[32px]'>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h2>
                <p className='text-[16px] font-normal mb-8 text-center lg:text-start'>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
                <button className='  btn rounded-3xl w-full md:ml-[250px] lg:ml-0 md:w-[240px] h-[52px] mb-8'>Shop Now</button>
                <div className='text-center md:ml-[80px] lg:ml-0 md:flex items-center gap-12'>
  <div className='pr-6 border-r border-gray-300'>
    <h1 className='text-[40px] font-semibold'>200+</h1>
    <p className='text-[16px] font-normal'>International Brands</p>
  </div>
  <div className='pr-6 border-r border-gray-300'>
    <h1 className='text-[40px] font-semibold'>2000+</h1>
    <p className='text-[16px] font-normal'>High-Quality Products</p>
  </div>
  <div>
    <h1 className='text-[40px] font-semibold'>30,000+</h1>
    <p className='text-[16px] font-normal'>Happy Customers</p>
  </div>
</div>

            </div>
            <div>
                <img src="https://i.ibb.co/dwpc5hbT/Rectangle-2.png" alt="" />
            </div>
           </div>
        </div>
    );
};

export default Banner;