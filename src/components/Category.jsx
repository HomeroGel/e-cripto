import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Category = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch(`/mocks/data.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const { items } = products

    let filterProducts = items && items.filter(item => item.category === category)
    return (
        <div className='container mx-auto flex flex-wrap justify-center mt-10'>
            {filterProducts?.map(product => {
                return (
                    <div className='bg border-8 rounded-md m-6 p-10 flex flex-col items-center' key={product.id}>
                        <p className=''>{product.type}</p>
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


    )
}
