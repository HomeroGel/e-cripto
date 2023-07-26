export const Hero = () => {

  return (
    <>
        <h1 className="titleHero text-white text-6xl text-center mt-8 max-[600px]:text-4xl">Bienvenidos</h1>
        <h2 className="titleHero text-white text-5xl text-center max-[600px]:text-4xl">a la tienda de Fall Guys</h2>
        <div className="flex justify-center mt-10">
            <img className="animacion max-[767px]:hidden" src="https://cdn2.unrealengine.com/ui-burgerbear-standard-0009-2800x3450-0c4a4090a9f7.png?resize=1&w=840" alt="" />
            <img className="animacion max-[660px]:w-[400px] max-[767px]:block max-[1280px]:hidden" src="https://cdn2.unrealengine.com/ui-tombraider-standard-0011-2800x3450-edbbb01239c1.png?resize=1&w=840" alt="" />
            <img className="animacion max-[767px]:hidden" src="https://cdn2.unrealengine.com/ui-fullyposable-standard-0006-2800x3450-cbac47215b2c.png?resize=1&w=840" alt="" />
        </div>
        {/* <button>Explorar</button> */}
    </>
  )
}
