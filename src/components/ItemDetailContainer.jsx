import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch(`/mocks/data.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const { items } = products

    let filterProducts = items && items.filter(item => item.id === parseInt(id))
    return (
        <div className=' mt-10 h-[70vh] flex items-center'>
            {filterProducts?.map(product => {
                return (
                    <div className='flex flex-col items-center justify-center  w-full' key={product.id}>
                        <p className='titleHero tracking-wide font-light text-white text-2xl'>{product.name} - ${product.price}</p>
                        <p className='titleHero text-white text-lg border-4 rounded-3xl px-5 '>{product.type}</p>
                        <div className='flex justify-evenly w-full mt-10'>
                            <div>
                                <img
                                    className='w-[25rem] h-auto'
                                    src={product.image}
                                    alt={product.name} />
                            </div>
                            <div className='text-center text-white mb-5 w-96 flex flex-col justify-around'>
                                <p className='text-white subFont text-xl'>{product.description}</p>
                                <button className='titleHero text-white text-lg bg-[#4CB8F9] hover:bg-[#50a8de] border-4 rounded-3xl px-4 py-2'>Agregar al carrito</button>
                            </div>
                        </div>
                        
                    </div>
                )
            })}
        </div>


    )
}

