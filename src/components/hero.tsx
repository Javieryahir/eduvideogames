


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

function Hero() {
 

  return (
    <div style={{
      
    }
      
    } className="bg-bg-100  flex flex-col items-center ">
      <nav className=" text-white p-4 text-center basis-2/12 ">
        <ul className="flex  justify-center pt-2 items-center gap-x-28 text-lg text-center gap-y-2 lg:text-xl flex-col md:flex-row font-semibold">
          <li><a href="#">Objetivos</a></li>
          <li><a href="#">Redes Sociales</a></li>
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Comentarios</a></li>
        </ul>
      </nav>
      <div className="  w-11/12 flex items-center justify-center md:flex-row flex-col basis-10/12 py-10 ">
        {/* Mitad izquierda: Imagen */}
        
        {/* Mitad derecha: Título y Descripción */}
        <div className="md:w-1/2 w-2/3 xl:p-20 ">
          <h1 className=" xl:text-7xl text-4xl md:text-5xl font-bold text-white md:text-left text-center">Indie Studios Hello World</h1>
          <p className="mt-4 text-base  text-white md:text-base md:text-left text-center xl:text-lg font-semilight">
          Somos una compañía de desarrollo de videojuegos indie, dedicados a crear experiencias creativas e innovadoras que cautiven a jugadores de todas las edades. 
          </p>
        </div>
        <div className="md:w-1/2 w-3/3">
          <img
            src="./src/assets/videogameilus.png" // Reemplaza con la URL de tu imagen
            alt="Imagen del héroe"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
export default Hero


  