import { useState , useEffect } from 'react'
import './App.css'
import { UseFetch } from './assets/components/UseFetch'
import { Cards } from './assets/components/Cards'

function App({results}) {
  const [busqueda, setBusqueda] = useState('')

  const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=52')
    const estado = UseFetch(url)
    const {cargando,data}=estado
    cargando? console.log('cargando'):console.log(data.results)
    return (
      
      <div>
      <h3>Busca tu pokemon preferido:</h3>
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
