import React from 'react'

export const ItemListContainer = (greeting) => {
  return (
    <div className='flex flex-col items-center justify-center mt-40'>
        <h1 className='text-2xl mb-10'>{greeting.title}</h1>
        <img src={greeting.img} className='w-2/6' alt="under construction" />
        <h2 className='text-xl mt-10'>{greeting.subTitle}</h2>
    </div>
  )
}
