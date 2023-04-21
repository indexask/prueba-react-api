import React, { useState,useEffect } from "react";

export const UseFetch = (url) => {
    const [resultado,setResultado] = useState({cargando:true,data:null})

    useEffect(()=>{
        getDatos(url)
    },[url])


    async function getDatos(url) {
        setResultado({cargando:true,data:null})
        const resp=await fetch(url)
        const data=await resp.json()
        setResultado({cargando:false,data})
    }
    return resultado
}
