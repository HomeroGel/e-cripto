import React from 'react'
import { CartWidget } from './CartWidget'
import '../index.css'
import { Link as LinkRouter } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='nav container mx-auto flex items-center justify-around sticky top-5 left-0 right-0 z-10 shadow-xl rounded-lg max-[660px]:w-[85%] max-[660px]:mx-auto max-[660px]:px-5'>
      <LinkRouter to={`/`}><img src="https://i.redd.it/dftozda294791.png" className='w-28' alt="" /></LinkRouter>
      <nav className='text-white'>
        <ul className='flex'>
          <LinkRouter to={`/category/avatar`}><li className='px-3 subFont'>Avatars</li></LinkRouter>
          <LinkRouter to={`/category/kudos`}><li className='px-3 subFont'>Kudos</li></LinkRouter>
        </ul>
      </nav>
      <LinkRouter to={`/carrito`}><CartWidget /></LinkRouter>
    </div>
  )
}
