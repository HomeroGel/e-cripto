import React, { useState } from 'react'

export const CartWidget = () => {

    const[cart, setCart]=useState(0)
  return (
    <div className='flex items-center'>
        <button><img src="./cart.png" className='w-16' alt="" /></button>
        <span className='text-white'>{cart}</span>
    </div>
  )
}
