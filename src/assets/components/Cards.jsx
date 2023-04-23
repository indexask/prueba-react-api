import React from "react";
import { useState } from "react";
import { CardPokemon } from "./CardsPokemon";
import '../components/Cards.css'

export const Cards = ({results,busqueda}) => {

    const [resultadosNormales, setResultadosNormales] = useState(results)
    const [resultados, setResultados] = useState(results)
    return(
        console.log('esto es esto',resultados),
        <div className="container">
            <button
            onClick={()=>{
                results.sort((p1, p2)=>{  
                    if(p1.name < p2.name){
                        return -1;
                    }else if(p1.name > p2.name){
                        return 1;
                    } else {
                        return 0;
                    }
                })
                setResultados(results)
            }}
            >Ordenar A - Z</button>
            <button
            onClick={()=>{
                 setResultados(resultadosNormales)
            }}
            >Ordenar Por Id</button>
            <ul className="cards">
                 {
                    resultados 
                    .filter((p)=>{
                        if (busqueda === '') {
                            return p
                        } else {
                            const filtrado =  p.name.includes(busqueda)
                            return filtrado
                        }
                    })
                    .map ( p=>( 
                        <li className="card-item" key={p.name}>
                            <CardPokemon url={p.url} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}