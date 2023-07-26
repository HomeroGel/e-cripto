import { ItemList } from './ItemList'
//<img src="https://cdn2.unrealengine.com/s10-logo-cropped-769x740-527f1dff6d3b.png" alt="" />

export const ItemListContainer = () => {

  // const [products, setProducts]=useState([])
  
  // useEffect(() => {
  //   fetch(`/mocks/data.json`)
  //     .then(res => res.json())
  //     .then(data => setProducts(data))
  //   }, [])
    
  // let avatars = products.avatars

  
  
  return (
    <>
      <h2 className="container mx-auto titleHero text-white text-5xl mt-36 max-[767px]:text-4xl max-[767px]:text-center">Nuestros items</h2>
      <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
          <div>
            
            <ItemList />
          </div>
      </div>
      </div>
    </>
  )
}



