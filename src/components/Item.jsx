import { Link } from "react-router-dom"

export const Item = ({product}) => {
  return (
    <div  className='bg border-8 rounded-md m-6 p-10 flex flex-col items-center justify-center' key={product.id}>
      <p className='text-white titleHero font-light mb-2'>{product.type}</p>
      <img
        src={product.image}
        alt={product.name} />
      <div className='text-center text-white mb-5'>
        <strong>{product.name}</strong> - ${product.price}
      </div>
      <Link to={`/item/${product.id}`}><button className='bg-purple-700 text-white rounded-full px-4 py-2 font-light hover:bg-purple-400 titleHero'>Ver mas..</button></Link>
    </div>
  )
}



// eslint-disable-next-line no-lone-blocks
{/* {avatars?.map(product => {
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
            })} */}
