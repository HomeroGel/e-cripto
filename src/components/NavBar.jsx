import React from 'react'
import { CartWidget } from './CartWidget'
import '../index.css'
import { Link as LinkRouter } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='nav container mx-auto flex items-center justify-around sticky top-5 left-0 right-0 z-10 shadow-xl rounded-lg'>
      <LinkRouter to={`/`}><img src="https://i.redd.it/dftozda294791.png" className='w-28' alt="" /></LinkRouter>
      <nav className='text-white'>
        <ul className='flex'>
          <LinkRouter to={`/category/:categoryId`}><li className='px-3'>Avatars</li></LinkRouter>
          <LinkRouter to={`/sobrenosotros`}><li href="#" className='px-3'>Sobre Nosotros</li></LinkRouter>
          <LinkRouter to={`/contacto`}><li href="#" className='px-3'>Contacto</li></LinkRouter>
        </ul>
      </nav>
      <LinkRouter to={`/carrito`}><CartWidget /></LinkRouter>
    </div>
  )
}
