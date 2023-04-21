import { useState , useEffect } from 'react'
import './App.css'
import { CardPokemon } from './assets/components/CardsPokemon'
import { UseFetch } from './assets/components/UseFetch'
import { Cards } from './assets/components/Cards'

function App({results}) {
  const [busqueda, setBusqueda] = useState('')

  const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const estado = UseFetch(url)
    const {cargando,data}=estado
    cargando? console.log('cargando'):console.log(data.results)

    

    const [mostrar, setMostrar] = useState(results)

    

 /*    const Filtro = (e) => {
        
      if (e.target.value === "") {
        setMostrar(mostrar)

      } else {

        let pokemonesFiltrados = mostrar.filter((c) => c.name.includes(e.target.value))
        setMostrar(pokemonesFiltrados)
      }
    };
   */
  

  return (

    <div>
      <button onClick={()=>{
        console.log(busqueda)
      }} >xd</button>
      <input type="text" onChange={(e)=>{
        setBusqueda(e.target.value)
      }} />
      
            <h1>Esta es la pagina pokemon</h1>


            {
                cargando
                ?
                <h1>cargando...</h1>
                :
                <Cards busqueda={busqueda} results={data.results} />
            }
        </div>
    
    )
}

export default App
