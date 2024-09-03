import React from 'react'
import logo from '../assets/img/SHOP.CO.png'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
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
                <a href="/" className="hover:text-secondary hover:text-black font-bold">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/product" className="hover:text-secondary hover:text-black font-bold">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="/category" className="hover:text-secondary hover:text-black font-bold">
                  Danh mục
                </a>
              </li>
            </ul>
          </nav>
          {/* Right section: Buttons (for desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to={'/cart'}>
              <FaShoppingCart className='text-white cursor-pointer hover:bg-gray-800 hover:rounded-md p-1' size={35} />

            </Link>

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