import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Hero } from './Hero'
//<img src="https://cdn2.unrealengine.com/s10-logo-cropped-769x740-527f1dff6d3b.png" alt="" />

export const ItemListContainer = (greeting) => {

  const [products, setProducts]=useState([])
  
  useEffect(() => {
    fetch(`/mocks/data.json`)
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])
    
  let avatars = products.avatars

  
  
  return (
    <>
      <Hero/>
      <h2 className="container mx-auto titleHero text-white text-5xl mt-36">Nuestros avatars</h2>
      <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
          <div className='container flex flex-wrap justify-center'>
            {avatars?.map(product => {
              return (
                <div className='bg border-8 rounded-md m-6 p-10 flex flex-col items-center' key={product.id}>
                  <img 
                    src={product.image} 
                    alt={product.name} />
                    <div className='text-center text-white mb-5'>
                      <strong>{product.name}</strong> - ${product.price}
                    </div>
                    <Link to={`/item/${product.id}`}><button className='bg-purple-700 text-white rounded-full px-4 py-2 font-bold hover:bg-purple-400 titleHero'>Ver mas..</button></Link>
                </div>
              )
            })}
          </div>
      </div>
      </div>
    </>
  )
}




{/* <ul className='container flex flex-wrap justify-center'>
            {avatars?.map(product => {
              return (
                <li className='bg border-8 rounded-md m-6 p-10 flex flex-col items-center' key={product.id}>
                  <img 
                    src={product.image} 
                    alt={product.name} />
                    <div className='text-center text-white mb-5'>
                      <strong>{product.name}</strong> - ${product.price}
                    </div>
                    <Link to={`/item/${product.id}`}><button className='bg-purple-700 text-white rounded-full px-4 py-2 font-bold hover:bg-purple-400 hover:border titleHero'>Ver mas..</button></Link>
                </li>
              )
            })}
          </ul> */}