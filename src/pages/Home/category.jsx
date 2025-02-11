import React from 'react'
import img1 from '../../assets/img/Frame 32.png'
import img2 from '../../assets/img/Frame 33 (2).png'
import img3 from '../../assets/img/Frame 34 (2).png'
import img4 from '../../assets/img/Frame 38 (2).png'
import img5 from '../../assets/img/Frame 34.png'
import img6 from '../../assets/img/Frame 32 (1).png'
import img7 from '../../assets/img/Frame 33 (1).png'
import img8 from '../../assets/img/Frame 34 (1).png'
import img9 from '../../assets/img/Frame 38 (1).png'
import { productAtom } from '../../store/product'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'
export const Category = () => {
    const products = useRecoilValue(productAtom);
    console.log("products", products);

    return (
        <div className='flex gap-5'>
            <section className='w-4/12' >
                <div className='border-2 m-3 p-2 rounded-2xl'>
                    <div className='text-xl font-bold'>
                        <div>Filters</div>
                    </div>
                    <div className=' flex flex-col border-t-2'>

                        <div className='flex w-full'>
                            <a href="" className='w-6/12'>T-shirt</a>
                            <button class="flex justify-end w-6/12">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div className='flex w-full'>
                            <a href="" className='w-6/12'>Short</a>
                            <button class="flex justify-end w-6/12">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div className='flex w-full'>
                            <a href="" className='w-6/12'>Shirts</a>
                            <button class="flex justify-end w-6/12">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div className='flex w-full'>
                            <a href="" className='w-6/12'>T-shirt</a>
                            <button class="flex justify-end w-6/12">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div className='flex w-full'>
                            <a href="" className='w-6/12'>T-shirt</a>
                            <button className="flex justify-end w-6/12">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>


                    </div>
                    <div className='border-t-2 pb-44'>
                        <div className='text-xl font-bold'>Prive</div>

                    </div>
                    <div className='border-t-2'>
                        <h1 className='text-xl font-bold'>Color</h1>
                        <div>
                            <button className='bg-green-400 border-2 p-5 m-3 rounded-3xl'></button>
                            <button className='bg-red-500 border-2 p-5 m-3 rounded-3xl'></button>
                            <button className='bg-yellow-400 border-2 p-5 m-3 rounded-3xl'></button>
                            <button className='bg-orange-400 border-2 p-5 m-3 rounded-3xl'></button>
                            <button className='bg-blue-300 border-2 p-5 m-3 rounded-3xl'></button>

                        </div>
                        <div>
                            <button className='bg-blue-500 border-2 p-5 m-3 rounded-3xl'></button>
                            <button className='bg-purple-500 border-2 p-5 m-3 rounded-3xl'></button>
                            <button className='bg-pink-500 border-2 p-5 m-3 rounded-3xl'></button>
                            <button className='bg-white border-2 p-5 m-3 rounded-3xl'></button>
                            <button className='bg-black border-2 p-5 m-3 rounded-3xl'></button>
                        </div>

                    </div>
                    <div className='border-t-2'>
                        <h1 className='text-xl font-bold'>size</h1>
                        <div>
                            <div>
                                <button className='bg-gray-200 rounded-3xl m-3 p-3'>XX-Small</button>
                                <button className='bg-gray-200 rounded-3xl m-3 p-3'>X-Small</button>
                            </div>
                            <div>
                                <button className='bg-gray-200 rounded-3xl m-3 p-3'>Small</button>
                                <button className='bg-gray-200 rounded-3xl m-3 p-3'>Madium</button>
                            </div>
                            <div>
                                <button className='bg-gray-200 rounded-3xl m-3 p-3'>Large</button>
                                <button className='bg-gray-200 rounded-3xl m-3 p-3'>X-Large</button>
                            </div>
                            <div>
                                <button className='bg-gray-200 rounded-3xl m-3 p-3'>XX-Large</button>
                                <button className='bg-gray-200 rounded-3xl m-3 p-3'>3X-Large</button>
                            </div>
                            <div>
                                <button className='bg-gray-200 rounded-3xl m-3 p-3'>4X-Large</button>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='border-t-2'>
                            <h1 className='text-xl font-bold'>Dress Style</h1>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex w-full'>
                                <a href="" className='w-6/12'>Casual</a>
                                <button class="flex justify-end w-6/12">
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                            <div className='flex w-full'>
                                <a href="" className='w-6/12'>Formal</a>
                                <button class="flex justify-end w-6/12">
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                            <div className='flex w-full'>
                                <a href="" className='w-6/12'>Party</a>
                                <button class="flex justify-end w-6/12">
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                            <div className='flex w-full'>
                                <a href="" className='w-6/12'>Gym</a>
                                <button class="flex justify-end w-6/12">
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>


                        </div>
                    </div>
                    <div className='my-3'>
                        <button className='bg-black text-white p-3  w-full rounded-3xl'>Apply Filter</button>
                    </div>
                </div>
            </section>
            <section className='w-8/12 mt-5'>
            <div className='grid grid-cols-4 gap-5'>
          {
           
            products.length > 0 && products.map((_item, index) => (
              <div className='flex flex-col' key={index}>
                <Link to={`/product/${_item?.id}`}>
                <img src={_item?.thumnail} alt="" className='rounded-lg' />
                </Link>
                
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
            </section>
        </div>
    )
}
export default Category