import React from 'react'
import { CartWidget } from './CartWidget'
import '../index.css'

export const NavBar = () => {
  return (
    <div className='nav flex items-center justify-around'>
        <img src="https://i.redd.it/dftozda294791.png" className='w-40 h-40' alt="" />
        <nav className='text-white'>
            <a href="#" className='px-3'>Productos</a>
            <a href="#" className='px-3'>Sobre Nosotros</a>
            <a href="#" className='px-3'>Contacto</a>
        </nav>
        <CartWidget/>
    </div>
  )
}
