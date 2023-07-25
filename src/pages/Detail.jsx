import React from 'react'
import { ItemDetailContainer } from '../components/ItemDetailContainer'
import { Link } from 'react-router-dom'

export const Detail = () => {
  return (
    <div className='container mx-auto'>
        <Link to={`/`}><button className='font-light bg-purple-700 text-white rounded-full px-4 py-2 mt-12 hover:bg-purple-400 titleHero'>Volver</button></Link>
        <ItemDetailContainer/>
    </div>
  )
}
