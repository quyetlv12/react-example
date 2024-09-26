import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import logo from '../assets/img/SHOP.CO.png'
import { cartState } from '../store/cart'

const Header = () => {
  const carts = useRecoilValue(cartState);
  return (
    <>
      {/* source https://github.com/spacemadev/Free-blue-star-tailwind-landing-page-template */}
      <header className="bg-gray-500 sticky top-0 z-50 px-4">
        <div className="container mx-auto flex justify-between items-center py-4">
          {/* Left section: Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-6 w-auto mr-4"
            />
          </div>
          {/* Hamburger menu (for mobile) */}
          <div className="flex md:hidden">
            <button id="hamburger" className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>

            </button>
          </div>
          {/* Center section: Menu */}
          <nav className="hidden md:flex md:flex-grow justify-center">
            <ul className="flex justify-center space-x-4 text-white">
              <li>
                <Link to="/" className="hover:text-secondary hover:text-black font-bold">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-secondary hover:text-black font-bold">
                  Sản phẩm
                </Link>

              </li>
              <li>
                <Link to="/category" className="hover:text-secondary hover:text-black font-bold">
                  Danh mục
                </Link>


              </li>
            </ul>
          </nav>
          {/* Right section: Buttons (for desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className='relative'>   <Link to={'/cart'}>
              <FaShoppingCart className='text-white cursor-pointer hover:bg-gray-800 hover:rounded-md p-1' size={35} />
              <span className='absolute -top-1 -right-1 bg-red-500 w-5 h-5 text-center text-white rounded-full'>
                {carts.length}
              </span>
            </Link></div>

            <a
              href="/register"
              className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded inline-block"
            >
              Đăng ký
            </a>
            <a
              href="/login"
              className="bg-blue-500 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded inline-block"
            >
              Đăng nhập
            </a>
          </div>
        </div>
      </header>
      {/* Mobile menu */}

    </>

  )
}

export default Header 