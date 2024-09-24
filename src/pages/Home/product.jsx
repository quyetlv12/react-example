import React, { useEffect, useState } from 'react'
import img1 from '../../assets/img/image 2.png'
import img2 from '../../assets/img/image 5.png'
import img3 from '../../assets/img/image 6.png'
import img4 from '../../assets/img/image 1.png'
import img5 from '../../assets/img/Frame 11.png'
import img6 from '../../assets/img/Frame 77.png'
import img7 from '../../assets/img/Frame 32 (2).png'
import img8 from '../../assets/img/Frame 33 (2).png'
import img9 from '../../assets/img/Frame 34 (2).png'
import img10 from '../../assets/img/Frame 38 (2).png'
import { useParams } from 'react-router'
import { productService } from '../../services/product'
import { cartState } from '../../store/cart'
import { useRecoilState } from 'recoil'

const Product = () => {
    const params = useParams()    
    const [product, setProduct] = useState(null)
    const [carts, setCarts] = useRecoilState(cartState);
    const addToCart = () => {
        const newProduct =  {
            id : product?.id,
            image : product?.thumnail,
            name : product?.name,
            price : product?.price
        }
        setCarts([...carts ,newProduct])
    }
    useEffect(() => {
     const getDetail = async () => {
        const res = await productService.getDetailProduct(params.id)
        if (res.status === 200) {
            setProduct(res.data)
        }
     }
     getDetail()
    }, [])
    
  return (
    <div>
        <section className='flex'>
       
       
                <div className='flex m-7 '>
                {/* <div className='mr-2'>
                    <img src={product?.thumnail} alt="" className='mb-2'/>
                    <img src={product?.thumnail2} alt="" className='mb-2'/>
                    <img src={product?.thumnail} alt="" className='mb-2'/>
                </div> */}
                <div> 
                    <img src={product?.thumnail} alt="" />
                </div>
            </div>
        
            <div className='flex flex-col m-7'>
                <div>
                    <h1 className='text-2xl font-bold'>{product?.name}</h1>
                    <img src={img5} alt="" />
                    <div className='flex'>
                        <p className='text-2xl font-bold'>{product?.price}</p>
                        <p className='line-through text-2xl text-gray-400 pl-2'>$300</p>
                        <p className='text-red-400 bg-red-200 p-1 rounded-2xl ml-2'>-40%</p>
                    </div>
                    
                    <p>{product?.description}</p>
                </div>
                <div className='my-2 py-2 border-t-2 '>
                    <p>Select Colors</p>
                    <img src={img6} alt="" />
                </div>
                <div className='pb-2 border-t-2'>
                    <p>Choose Colors</p>
                    <div>
                        <button className='border-2 bg-gray-200 rounded-3xl hover:bg-black hover:text-white p-2 mr-2'>Small</button>
                        <button className='border-2 bg-gray-200 rounded-3xl hover:bg-black hover:text-white p-2 m-2'>Medium</button>
                        <button className='border-2 bg-gray-200 rounded-3xl hover:bg-black hover:text-white p-2 m-2'>Large</button>
                        <button className='border-2 bg-gray-200 rounded-3xl hover:bg-black hover:text-white p-2 m-2'>X-Large</button>
                    </div>
                </div>
                <div className='flex border-t-2 p-2'>
                    <div className='flex border-2 bg-gray-200 w-4/12 rounded-3xl'>
                        <button className='w-4/12 text-center '>-</button>
                        <p className='w-4/12 text-center p-5 '>1</p>
                        <button className='w-4/12 text-center '>+</button>
                    </div>
                    <div className=' w-8/12 '>
                        <button className='border-2 bg-black text-white rounded-3xl ml-2 p-5 w-full' onClick={addToCart}> Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        </section>
        <section className='flex flex-col mx-2'>
            <div className='flex w-full'>
                <a href="" className='w-4/12 border-b-2 p-3 text-center'>Product Details</a>
                <a href="" className='w-4/12  border-b-2 p-3 text-center'>Rating & Reviews</a>
                <a href="" className='w-4/12  border-b-2 p-3 text-center'>FAQs</a>
               
            </div>
            <div className='flex w-full my-3'>
                <div className='text-2xl w-6/12 font-bold'>
                    <h3>All Reviews</h3>
                </div>
                <div className='flex justify-end w-6/12'>
                       <button className='bg-gray-200 p-3 rounded-3xl'>Latest</button> 
                       <button className='bg-black text-white p-3 rounded-3xl ml-2'>Write a Revieiw</button>
                </div>
            </div>
            <div className='flex '>
                <div className='w-6/12 border-2 rounded-xl p-3 m-2'>
                    <h3 className='text-xl font-bold'>Samantha D.</h3>
                    <p>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                    <p className='pt-2'>Posted on August 14, 2023</p>
                </div>
                <div className='w-6/12  border-2 rounded-xl p-3 m-2'>
                    <h3 className='text-xl font-bold'>Alex M.</h3>
                    <p>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
                    <p className='pt-2'>Posted on August 15, 2023</p>
                </div>
            </div>
            <div className='flex'>
                <div className='w-6/12  border-2 rounded-xl p-3 m-2'>
                    <h3 className='text-xl font-bold'>Ethan R.</h3>
                    <p>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
                    <p className='pt-2'>Posted on August 16, 2023</p>
                </div>
                <div className='w-6/12  border-2 rounded-xl p-3 m-2'>
                    <h3 className='text-xl font-bold'>Olivia P.</h3>
                    <p>"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
                    <p className='pt-2'>Posted on August 17, 2023</p>
                </div>
            </div>
            <div className='flex'>
                <div className='w-6/12  border-2 rounded-xl p-3 m-2'>
                    <h3 className='text-xl font-bold'>Liam K.</h3>
                    <p>"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
                    <p className='pt-2'>Posted on August 18, 2023</p>
                </div>
                <div className='w-6/12 border-2 rounded-xl p-3 m-2 '>
                    <h3 className='text-xl font-bold'>Ava H.</h3>
                    <p>"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
                    <p className='pt-2'>Posted on August 19, 2023</p>
                </div>
                
            </div>
            <div className='text-center'>
                    <button className='border-2 rounded-3xl m-3 p-2'>Load More Reviews</button>
                </div>
        </section>
        <section className='flex flex-col my-5'>
            <div className='text-center text-2xl font-bold'> 
                <h1>YOU MIGHT ALSO LIKE</h1>
            </div>
            <div className='flex my-5'>
                <div className='p-2 w-3/12'>
                    <img src={img7} alt="" />
                    <p>Polo with Contrast Trims</p>
                    <p className='font-bold'>$212</p>
                </div>
                <div className='p-2 w-3/12'> 
                    <img src={img8} alt="" />
                    <p>Gradient Graphic T-shirt</p>
                    <p className='font-bold'>$212</p>
                </div>
                <div className='p-2 w-3/12'>
                    <img src={img9} alt="" />
                    <p>Polo with Tipping Details</p>
                    <p className='font-bold'>$212</p>
                </div>
                <div className='p-2 w-3/12'> 
                    <img src={img10} alt="" />
                    <p>Black Striped T-shirt</p>
                    <p className='font-bold'>$212</p>
                </div>
            </div>
            
           
        </section>
    </div>
    
  )
}

export default Product