import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h2 className='marginheader'>Hyper</h2>
        <nav>
          <ul className='marginheader'>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>


      <main>
        <section className='section 1'>
          <div className='div_section1'>
            <h2>Encuentra el teclado perfecto para desatar tu potencial informático</h2>
            <img src="https://i.blogs.es/8c11b5/teclados-ap/1366_2000.jpeg" alt="" />
          </div>
        </section>

        <section className='section2'>
          <div className='cards'>
            <div className="card">
              <img src="https://ferratoinsumos.com.ar/sistemastock/images/166180554268714IMG.PNG" alt="" />
              <h3>Teclado Gamer MecÁnico - Draconic Blanco - REDRAGON</h3>
              <h4>Precio: 200$</h4>
              <div className='div_button'>
                <button>Ver más</button>
              </div>
            </div>
            <div className="card">
            <img src="https://acdn.mitiendanube.com/stores/001/418/967/products/arena-bloque-3-cable-desmontable-600x6001-2d71db265633d7106216400374491279-640-0.png" alt="" />
              <h3>ARENA T-TGK321</h3>
              <h4>Precio: 350$</h4>
              <div className='div_button'>
                <button>Ver más</button>
              </div>
            </div>
            <div className="card">
            <img src="https://ddtech.mx/assets/uploads/2053aa615ecee36b10cbf82b96f0de65.png" alt="" />
              <h3>Teclado Gamer Inalambrico Mecanico 60% REDRAGON FIZZ PRO K616 / Redragon Switch / RGB / Gris / Blanco</h3>
              <h4>Precio: 120$</h4>
              <div className='div_button'>
                <button>Ver más</button>
              </div>
            </div>
          </div>
        </section>

        <section className='section3'>
          <div className='nosotros'>
            <h3>Sobre Nosotros</h3>
            <p>
            ¡Bienvenido/a a nuestro sitio web de venta de teclados!

En Hyper, estamos apasionados por ofrecerte la mejor experiencia al momento de buscar y adquirir el teclado perfecto para ti. Nos enorgullece ser líderes en el mercado y ofrecer una amplia gama de teclados de alta calidad, adaptados a tus necesidades y preferencias.

Nuestro equipo está compuesto por entusiastas de la tecnología y fanáticos de los teclados. Entendemos cuán importante es contar con un teclado cómodo, funcional y duradero, ya sea que seas un apasionado de los videojuegos, un profesional creativo o simplemente disfrutes escribiendo. Es por eso que nos esforzamos en garantizar que cada producto que ofrecemos cumpla con los más altos estándares de calidad.

Sabemos que la elección de un teclado puede ser abrumadora debido a la gran cantidad de opciones disponibles en el mercado. Por eso, nuestro sitio web está diseñado para facilitarte la búsqueda y ayudarte a encontrar el teclado perfecto para ti. Contamos con un amplio catálogo de teclados de marcas reconocidas, asegurándote la mejor calidad y confiabilidad.

Además, nuestro equipo de atención al cliente está siempre dispuesto a ayudarte. Ya sea que necesites asesoramiento sobre qué tipo de teclado se adapta mejor a tus necesidades o tengas preguntas generales sobre nuestros productos, estaremos encantados de atenderte. Queremos asegurarnos de que tengas una experiencia de compra satisfactoria y te sientas respaldado/a en cada etapa del proceso.

En Hyper, no solo nos preocupamos por ofrecerte una amplia selección de teclados de excelente calidad, sino que también nos esforzamos por brindarte la mejor experiencia de compra en línea. Nuestro sitio web está diseñado de manera intuitiva y fácil de navegar, facilitando el proceso de búsqueda y compra. Además, ofrecemos envío rápido y seguro a tu hogar, para que puedas disfrutar de tu nuevo teclado en poco tiempo.

Confía en nosotros para encontrar el teclado perfecto que mejore tu experiencia de escritura, trabajo o juegos. Estamos aquí para ayudarte a encontrar el mejor teclado para ti, brindándote productos de calidad, atención al cliente excepcional y una experiencia de compra en línea satisfactoria.

¡Gracias por elegir Hyper como tu destino principal para encontrar el teclado perfecto!
            </p>
          </div>
        </section>

      </main>


      <footer>
        <h3>@juanBautistaMinutillo</h3>
        <a href="">Volver a arriba</a>
      </footer>
    </>
  )
}

export default App
