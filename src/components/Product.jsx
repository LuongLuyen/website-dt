import React, { useState } from 'react';
import { data } from '../data/data.js';
import { AiOutlineClose } from 'react-icons/ai';

const Product = () => {
  const [nav, setNav] = useState(false)
  //   console.log(data);
  const [products, setProducts] = useState(data);

  //   Filter Type iphone13/....
  const filterType = (category) => {
    setProducts(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setProducts(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Sản phẩm nổi bật nhất
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Theo sản phẩm</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setProducts(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('iphone 13')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Iphone 13 Series
            </button>
            <button
              onClick={() => filterType('iphone 12')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Iphone 12 Series
            </button>
            <button
              onClick={() => filterType('iphone 11')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Iphone 11 Series
            </button>
            <button
              onClick={() => filterType('iphone x')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Iphone X Series
            </button>
            <button
              onClick={() => filterType('iphone 8')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Iphone 8 Series
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Xắp xếp theo giá</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('1$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              1$
            </button>
            <button
              onClick={() => filterPrice('2$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              2$
            </button>
            <button
              onClick={() => filterPrice('3$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              3$
            </button>
            <button
              onClick={() => filterPrice('4$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              4$
            </button>
          </div>
        </div>
      </div>

      {/* Display products */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {products.map((item, index) => (
          <div onClick={()=> setNav(!nav)}
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[400px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Product Nav*/}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      <div className={nav ? 'fixed top-20 left-80 bottom-40 pt-4 w-[870px]  rounded bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
        <span className='font-bold'> SẢN PHẨM</span>
        </h2>
        <div className='grid grid-rows-3 grid-flow-col gap-4'>
          <img className='bg-contain ' src='https://clickbuy.com.vn/uploads/2022/03/avt-iphone-13-pro-max-gold.png' alt ='/'>
          </img>
          <div className='row-span-3 pr-10'>
            <div className='col-span-2'>
              <p>Giá: 9999999999999$</p>
            </div>
            <div>
              <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Iphone 13 </button>
              <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>iphone 12</button>
              <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>iphone 11</button>
              <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>iphone x</button>
            </div>
            <ul className='grid grid-cols-2 mt-10'>
              <li className=' bg-sky-100'>Màn hình:</li>
              <li className=' bg-sky-100'>IPS LCD6.1"Liquid Retina</li>
              <li>Hệ điều hành:</li>
              <li>iOS 15</li>
              <li className=' bg-sky-100'>Camera sau:</li>
              <li className=' bg-sky-100'>2 camera 12 MP</li>
              <li>Chip:</li>
              <li>Apple A13 Bionic</li>
              <li className=' bg-sky-100'>Pin, Sạc:</li>
              <li className=' bg-sky-100'>3110 mAh18 W</li>
            </ul>
            <div className='flex justify-end  gap-4 place-items-end h-32'>
              <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Mua ngay</button>
              <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Thêm vào gỏ hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
