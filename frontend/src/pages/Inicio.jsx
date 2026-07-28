import Hero from '../components/Hero'
import Features from '../components/Features'
import WhyUs from '../components/WhyUs'
import usePageMeta from '../hooks/usePageMeta'

function Inicio() {
  usePageMeta(
    'Vany Clean | Limpieza de Oficinas y Empresas en CABA',
    'Servicios profesionales de limpieza y maestranza para empresas, oficinas, consorcios, salud y estacionamientos en CABA y alrededores. Más de 25 años de experiencia.'
  )

  return (
    <>
      <Hero />
      <Features />
      <WhyUs />
    </>
  )
}

export default Inicio
