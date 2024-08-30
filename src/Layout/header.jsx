import React from 'react'
import logo from '../assets/img/SHOP.CO.png'

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
              Về chúng tôi 
            </a>
          </li>
          <li>
            <a href="/category" className="hover:text-secondary hover:text-black font-bold">
              sản phẩm 
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-secondary hover:text-black font-bold">
              Liên hệ 
            </a>
          </li>
          <li>
            <a href="/cart" className="hover:text-secondary hover:text-black font-bold">
            <i class="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </nav>
      {/* Right section: Buttons (for desktop) */}
      <div className="hidden lg:flex items-center space-x-4">
        <a
          href="#"
          className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded inline-block"
        >
          Đăng ký 
        </a>
        <a
          href="#"
          className="bg-blue-500 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded inline-block"
        >
          Đăng nhập
        </a>
      </div>
    </div>
  </header>
  {/* Mobile menu */}
  <nav
    id="mobile-menu-placeholder"
    className="mobile-menu hidden flex-col items-center space-y-8 md:hidden px-8"
  >
    <ul className="w-full text-center">
      <li className="border-b border-gray-300 pb-4 pt-4">
        <a href="/" className="hover:text-secondary font-bold">
          Home
        </a>
      </li>
      <li className="border-b border-gray-300 pb-4 pt-4">
        <a href="/product" className="hover:text-secondary font-bold">
          About us
        </a>
      </li>
      <li className="border-b border-gray-300 pb-4 pt-4">
        <a href="/category" className="hover:text-secondary font-bold">
          Results
        </a>
      </li>
      <li className="border-b border-gray-300 pb-4 pt-4">
        <a href="#reviews" className="hover:text-secondary font-bold">
          Reviews
        </a>
      </li>
      <li className="border-b border-gray-300 pb-4 pt-4">
        <a href="#portfolio" className="hover:text-secondary font-bold">
          Portfolio
        </a>
      </li>
      <li className="border-b border-gray-300 pb-4 pt-4">
        <a href="#team" className="hover:text-secondary font-bold">
          Team
        </a>
      </li>
      <li className="pb-4 pt-4">
        <a href="#contact" className="hover:text-secondary font-bold">
          Contact
        </a>
      </li>
    </ul>
    <div className="flex flex-col mt-6 space-y-2 items-center">
      <a
        href="#"
        className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded inline-block flex items-center justify-center min-w-[110px]"
      >
        Đăng Nhập 
      </a>
      <a
        href="#"
        className="bg-blue-500 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded inline-block flex items-center justify-center min-w-[110px]"
      >
        Đăng ký
      </a>
    </div>
  </nav>
</>

  )
}

export default Header 