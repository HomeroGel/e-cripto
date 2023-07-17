import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
      <h2 className="container mx-auto titleHero text-white text-5xl mt-36">Nuestros avatars</h2>
      <div className='flex flex-col items-center justify-center'>
          <ul className='container flex flex-wrap justify-center'>
            {avatars?.map(product => {
              return (
                <li className='bg border rounded-md m-6 p-10' key={product.id}>
                  <img 
                    src={product.image} 
                    alt={product.name} />
                    <div className='text-center'>
                      <strong>{product.name}</strong> - ${product.price}
                    </div>
                    <Link to={`/item/${product.id}`}><button className='bg-purple-700 text-white rounded-full'>Ver mas..</button></Link>
                </li>
              )
            })}
          </ul>


      </div>
    </>
  )
}
