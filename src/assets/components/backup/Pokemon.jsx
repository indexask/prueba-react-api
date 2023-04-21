import React, {useState} from "react";
import { UseFetch } from "../UseFetch";
import { Cards } from "../Cards";


const Pokemon = () =>{
    const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const estado = UseFetch(url)
    const {cargando,data}=estado
    cargando? console.log('cargando'):console.log(data.results)


    return(
        <div>
            <h1>Esta es la pagina pokemon</h1>


            {
                cargando
                ?
                <h1>cargando...</h1>
                :
                <Cards results={data.results} />
            }
        </div>
    )
}


export default Pokemon