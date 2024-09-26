import React from 'react'
import img1 from '../../assets/img/Frame 33 (3).png'
import img2 from '../../assets/img/Frame 33 (4).png'
import img3 from '../../assets/img/Frame 33 (5).png'
import { cartState } from '../../store/cart'
//import { useRecoilValue } from 'recoil'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const Cart = () => {
    const carts = useRecoilValue(cartState);
    console.log("carts", carts);
    const setCartState = useSetRecoilState(cartState); 

    const removeFromCart = (productId) =>{
        const updatedCart = carts.filter(item => item.id !== productId);
        setCartState(updatedCart);
    }
    const increaseQuantity = (productId) => {
        setCartState((prevCart) =>
            prevCart.map((item) =>
                item.id == productId ? {...item, quantity: item.quantity + 1} : item
            )
        );
    };
    const reduceQuantity = (productId) => {
        setCartState((prevCart) =>
            prevCart.map((item) =>
                item.id == productId ? {...item, quantity: Math.max(item.quantity - 1, 0)} : item
            )
        );
    };

    const subTotal = () => {
        return carts.reduce((total, product) => { 
            return total + product.price * product.quantity;
        }, 0);
    };

    const disconnt = () => {
        return subTotal() * 0.20
    };

    const calculateTotal = () => {
        
        return subTotal() - disconnt() + 15
    };

    return (
        <div className='flex'>
            <section className='flex w-full'>
                <div className='w-8/12 border-2 border-2 rounded-xl m-2 p-2'>
                    {/* 
                <div className='flex m-2'>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div className='m-2 w-full'>
                        <div className='flex'>
                            <p className=' font-bold w-6/12'>Gradient Graphic T-shirt</p>
                            <i className="flex w-6/12 justify-end fas fa-trash text-red-500"></i>
                        </div>
                        <p>Size: Large</p>
                        <p>Color: White</p>
                        
                        <div className='flex w-full'>
                            <div className='w-6/12'>
                                <p className='font-bold text-2xl'>$145</p>
                            </div>
                            <div className='flex justify-end w-6/12'>
                                <div className='flex bg-gray-200 rounded-2xl'>
                                    <button className='p-2'>-</button>
                                    <p className='p-2'>1</p>
                                    <button className='p-2'>+</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex m-2'>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <div className='m-2 w-full'>
                        <div className='flex'>
                            <p className=' font-bold w-6/12'>Gradient Graphic T-shirt</p>
                            <i className="flex w-6/12 justify-end fas fa-trash text-red-500"></i>
                        </div>
                        <p>Size: Large</p>
                        <p>Color: White</p>
                        <div className='flex w-full'>
                            <div className='w-6/12'>
                                <p className='font-bold text-2xl'>$145</p>
                            </div>
                            <div className='flex justify-end w-6/12'>
                                <div className='flex bg-gray-200 rounded-2xl'>
                                    <button className='p-2'>-</button>
                                    <p className='p-2'>1</p>
                                    <button className='p-2'>+</button>
                                </div>
                                
                            </div>
                        </div>
                        </div>
                       
                        </div>             
                       
                    </div>

                </div> */}
                    {
                        carts.map((item) => (
                            <div key={item.id} className='flex m-2'>
                                <div>
                                    <img src={item?.image} alt="" width={200} className='rounded-md' />
                                </div>
                                <div className='m-2 w-full'>
                                    <div className='flex'>
                                        <p className=' font-bold w-6/12'>{item?.name}</p>
                                        <button className='flex w-6/12 justify-end fas fa-trash text-red-500' onClick={() => removeFromCart(item.id)}></button>
                                    </div>
                                    <div className='flex w-full'>
                                        <div className='w-6/12'>
                                            <p className='font-bold text-2xl'>${item?.price}</p>
                                        </div>
                                        <div className='flex justify-end w-6/12'>
                                            <div className='flex bg-gray-200 rounded-2xl'>
                                                <button className='p-2' onClick={() => reduceQuantity(item.id)}>-</button>
                                                <p className='p-2'>{item?.quantity}</p>
                                                <button className='p-2'  onClick={() => increaseQuantity(item.id)}>+</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className='w-4/12 border-2 p-3 m-2 rounded-xl'>
                    <p className='font-bold my-4'>Order Summary</p>
                    <div className='flex mb-2'>
                        <p className='w-6/12'>Subtotal</p>
                        <p className='flex justify-end w-6/12  font-bold '>${subTotal()}</p>
                    </div>
                    <div className='flex mb-2'>
                        <p className='w-6/12'>Disconnt (-20%)</p>
                        <p className='flex justify-end w-6/12  font-bold  text-red-500'>-${disconnt()}</p>
                    </div>
                    <div className='flex mb-2'>
                        <p className='w-6/12'>Delivery Fee</p>
                        <p className='flex justify-end w-6/12  font-bold '>$15</p>
                    </div>
                    <div className='flex border-t-2 w-full py-3 '>
                        <p className='w-6/12 '>Total</p>

                        <p className='flex justify-end w-6/12  font-bold '>${calculateTotal()}</p>


                    </div>
                    <div className='flex py-5'>
                        <input type="text" placeholder=" Add promo code" className='border-2 rounded-xl w-8/12' />

                        <button className='ml-2 p-3 rounded-xl text-white bg-black w-4/12'>Apply</button>
                    </div>
                    <div>
                        <button className='w-full rounded-xl my-3 bg-black text-white  p-3'>Go to Checkout</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart