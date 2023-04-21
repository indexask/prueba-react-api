import React from "react";
import { useState } from "react";
import { CardPokemon } from "./CardsPokemon";
import '../components/Cards.css'


export const Cards = ({results,busqueda}) => {
    return(
        <div className="container">
            <ul className="cards">
                {
                    results
                    .filter((p)=>{
                        if (busqueda === '') {
                            console.log(p.name)
                            return p
                        } else {
                            p.name.includes(busqueda)
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