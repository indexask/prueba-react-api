import { useState , useEffect } from 'react'
import './App.css'

function App() {
  
  const [info, setInfo] = useState([]);

  useEffect(() => {
    consultaApi();
  }, [])

  const getPokemon = async (url) => {
    const { data } = await fetch(url);
    return data;
};

  const consultaApi = async () =>{
    const consulta = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await consulta.json()
    const promesas = data.results.map(({url}) => getPokemon(url));
    const pokemones = await Promise.all(promesas);
    
    
    setInfo(data.results);
    console.log('promesas ',pokemones)
    
  
  }
  
  const consultaApi2 = async () => {
    const urll = await fetch(info[0].url)
    const datos = await urll.json()
    console.log('consulta',datos.sprites)
  }

  return (
    <div>

    <button onClick= {()=>{
      console.log(info)
    }} >xd</button>

    <ul>
          {info.map(pokemon =>
            <li key={pokemon.name} >
                {pokemon.name} , {pokemon.url}
              
                
            </li>)}
        </ul>
    </div>

    
    )
}

export default App
