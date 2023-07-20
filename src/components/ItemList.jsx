import { useEffect, useState } from 'react'
import { Item } from './Item'

export const ItemList = () => {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch(`/mocks/data.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    // let avatars = products.avatars
    const {items} = products

    return (
        <div className='container mx-auto flex flex-wrap justify-center'>
            {items && items.map(product => {
                return (
                    <Item key={product.id} product={product}/>
                )
            })}
        </div>
            // <Item products={products} />
        
    )
}
