import React from 'react';
import slide1 from '../img/h1.jpeg'
import slide2 from '../img/h3.jpg'
import slide3 from '../img/h4.jpg'
const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Ưa thích nhất 1</p>
          <p className='px-2'>Ngày1</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Mua ngay</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={slide1}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Ưa thích nhất 2</p>
          <p className='px-2'>Ngày 2</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Mua ngay</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
      src={slide2}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Ưa thích nhất 3</p>
          <p className='px-2'>Ngày 3</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Mua ngay</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={slide3}
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
