import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Navbar = () => {
const [nav, setNav] = useState(false)
const [search, setSearch] = useState(false)
const [cart, setCart] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 '>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
        <span className='font-bold'>Shop DEMO</span>
        </h1>
      </div>

      {/* Search Input */}
      <div onClick={()=> setSearch(!search)} className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch
        size={25} 
      />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Tìm kiếm'
        />
      <div className={search ? 'hidden' :'border-2 border-black-500 rounded absolute top-20 w-[480px] h-64 bg-white z-10' }>
        <h2 className='text-2xl p-4 flex flex-col'>
        <span className='font-bold bg-gray-200 rounded-full'>Lịch sử tìm kiếm</span>
        <span className='m-2 '>Lịch sử tìm kiếm</span>
        <span className='m-2'>Lịch sử tìm kiếm</span>
        <span className='m-2'>Lịch sử tìm kiếm</span>
        <span className='m-2'>Lịch sử tìm kiếm</span>
        </h2>
      </div>
      </div>
      {/* Cart button */}
      <button onClick={()=> setCart(!cart)} className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' /> Giỏ hàng
      </button>
      {cart ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      <div className={cart ? 'fixed top-20 left-80 bottom-40 pt-4 w-[870px]  rounded bg-white z-10' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 ' }>
        <AiOutlineClose
            onClick={()=> setCart(!cart)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
        <span className='font-bold'>cart</span>
        </h2>
        <nav>

        </nav>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
        <span className='font-bold'>Shop DEMO</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> item1</li>
                <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> item2</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> item3</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> item4</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> item5</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> item6</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> item7</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
