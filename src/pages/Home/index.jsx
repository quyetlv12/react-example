import React, { useEffect, useState } from 'react'
import img from '../../assets/img/Rectangle 2 (1).png'
import img2 from '../../assets/img/Frame 32.png'
import img3 from '../../assets/img/Frame 33.png'
import img4 from '../../assets/img/Frame 34.png'
import img5 from '../../assets/img/Frame 38.png'
import img6 from '../../assets/img/Frame 32 (1).png'
import img7 from '../../assets/img/Frame 33 (1).png'
import img8 from '../../assets/img/Frame 34 (1).png'
import img9 from '../../assets/img/Frame 38 (1).png'
import img10 from '../../assets/img/Frame 61.png'
import img11 from '../../assets/img/Frame 62.png'
import img12 from '../../assets/img/Frame 63.png'
import img13 from '../../assets/img/Frame 64.png'
import img14 from '../../assets/img/Frame 11.png'
import { Link } from 'react-router-dom'
import { productService } from '../../services/product'
import { productAtom } from '../../store/product'
import { useRecoilState } from 'recoil'

const Home = () => {
  const [products, setProducts] = useRecoilState(productAtom);
  console.log("products" ,products);
  
  useEffect(() => {
    const getAllData = async () => {
      const res = await productService.getAllProduct()
      if (res.status === 200) {
        setProducts(res.data)
      }
    }
    getAllData()
  }, [])

  return (
    <div >
      {/* <section className='flex'>
            <div className='w-8/12 m-5 '>
              <h1 className='text-4xl font-bold p-4'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p className='p-4 mr-96'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <button className='bg-black text-white rounded-3xl m-4 p-4'>Shop Now</button>
              <div className='flex'>
                <div className='border-r-2 p-4'>
                  <p className='text-2xl'>200+</p>
                  <p>International Brands</p>
                </div>
                <div className='border-r-2 p-4'>
                  <p className='text-2xl'>2,000+</p>
                  <p>High-Quality Products</p>
                </div>
                <div className='border-r-2 p-4'>
                  <p className='text-2xl'>30,000+</p>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
            <div className='w-4/12'>
                <img src={img} alt="" />
            </div>
        </section> */}
      <section className='flex flex-col space-x-3'>
        <div className='text-center text-2xl my-7 font-bold'>NEW ARRIVALS</div>
        <div className='grid grid-cols-4 gap-5'>
          {
           
            products.length > 0 && products.map((_item, index) => (
              <div className='flex flex-col' key={index}>
                <img src={_item?.thumnail} alt="" className='rounded-lg' />
                <Link to={`/product/${_item?.id}`} >
                  <p className='font-bold'>{_item?.name}</p>
                </Link>


                <div className='flex'>
                  <p className='font-bold '>${_item?.price}</p>
                  <p className='line-through pl-2 text-gray-300'>$260</p>
                  <p className='text-red-400 bg-red-200 rounded-xl  p-1 text-xs ml-2'>-20%</p>
                </div>

              </div>
            ))
          }

        </div>
        <div className='flex justify-center mt-5'>
          <button className='w-[200px] border-2  px-5 py-2 text-centern rounded-xl hover:bg-black hover:text-white font-bold'>View All</button>
        </div>

      </section>
      <section className='flex flex-col space-x-3 '>
        <div className='text-center text-2xl my-7'> TOP SELLING </div>
        <div className='flex gap-5'>
          <div className='w-3/12 flex flex-col'>
            <img src={img6} alt="" />
            <p className='font-bold'>VERTICAL STRIPED SHIRT</p>

            <div className='flex'>
              <p className='font-bold'>$212</p>
              <p className='line-through text-gray-300 pl-2'>$232</p>
              <p className='text-red-400 bg-red-200 text-xs p-1 ml-2 rounded-xl'>-20%</p>
            </div>
          </div>
          <div className='w-3/12 flex flex-col'>
            <img src={img7} alt="" />
            <p className='font-bold'>COURAGE GRAPHIC T-SHIRT</p>
            <p className='font-bold'>$210</p>
          </div>
          <div className='w-3/12 flex flex-col'>
            <img src={img8} alt="" />
            <p className='font-bold'>LOOSE FIT BERMUDA SHORTS</p>
            <p className='font-bold'>$210</p>
          </div>
          <div className='w-3/12 flex flex-col'>
            <img src={img9} alt="" />
            <p className='font-bold'>FADED SKINNY JEANS</p>
            <p className='font-bold'>$210</p>
          </div>
        </div>
        <div className='flex justify-center mt-5'>
          <button className='w-[200px] border-2  px-5 py-2 text-centern rounded-xl hover:bg-black hover:text-white font-bold'>View All</button>
        </div>
      </section>
      <section className='flex flex-col bg-gray-200 m-8 rounded-3xl py-8 '>
        <div className='text-center text-2xl my-4 font-bold'>
          BROWSE BY DRESS STYLE
        </div>
        <div className='flex'>
          <div className='flex flex-col w-full' >
            <div className='flex text-center p-7'>
              <img src={img10} alt="" className='mr-10 w-4/12 ' />
              <img src={img11} alt="" className='w-8/12' />
            </div>
            <div className='flex text-center p-7 '>
              <img src={img13} alt="" className='mr-10 w-8/12' />
              <img src={img12} alt="" className='w-4/12' />
            </div>

          </div>
          <div></div>
        </div>
      </section>
      <section className='flex flex-col m-5'>
        <div className='text-2xl m-5 font-bold'>OUR HAPPY CUSTOMERS</div>
        <div className='flex '>
          <div className='w-4/12 border-2 rounded-2xl mx-3 p-3 '>
            <h5 className='font-bold'>Sarah M.</h5>
            <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
          </div>
          <div className='w-4/12 border-2 rounded-2xl mx-3 p-3 '>
            <h5 className='font-bold'>Alex K.</h5>
            <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
          </div>
          <div className='w-4/12 border-2 rounded-2xl mx-3 p-3 '>
            <h5 className='font-bold'>James L.</h5>
            <p>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home