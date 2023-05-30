import './App.css'
import BannerAyuda from './components/BannerAyuda'
import ContainerContactos from './components/ContainerContactos'

function App() {

  return (
    <>
      <div className='main__container__contactos'>
        <div className="main__container__contactos__BannerAyuda">
          <BannerAyuda />
        </div>
        <div className='main__container__contactos__BannerAyuda'>
          <ContainerContactos />
          <ContainerContactos />
          <ContainerContactos />
        </div>
      </div>
    </>
  )
}

export default App
