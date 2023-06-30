import React from 'react'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
  return (
    <div className='bg-slate-950 flex items-center justify-around'>
        <img src="./logo.png" className='w-36 h-36' alt="" />
        <nav className='text-white'>
            <a href="#" className='px-3'>Productos</a>
            <a href="#" className='px-3'>Sobre Nosotros</a>
            <a href="#" className='px-3'>Contacto</a>
        </nav>
        <CartWidget/>
    </div>
  )
}
