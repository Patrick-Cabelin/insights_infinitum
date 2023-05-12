import { Box, Deck, Spawn } from "./style";
import { useState, useEffect } from "react";

import { Carta } from "../Carta";

function Card() {
   
    const [cartaSpawnada, setCartaSpawnada] = useState([])
    const [cartaNoBaralho, setCartaNoBaralho] = useState([])
    const [mesa, setMesa] = useState([])
    const [numeroDaCarta, setNumeroDaCarta]= useState(0)
    let limite

    function spawnar(){

      setCartaSpawnada(carta => [...carta, <Carta key={cartaSpawnada.length} limiteDoSpawn={limite} />])
      setNumeroDaCarta(cartaSpawnada.length)
      cartomancia()
    }
    
    function cartomancia(){
      const baralho = cartaSpawnada.filter(carta => carta.key == numeroDaCarta)
      const mesa = cartaSpawnada.filter(carta => carta.key !== baralho.key)
      setCartaNoBaralho(baralho)
      setMesa(mesa)
    }
    
    useEffect(()=>{
      if(cartaSpawnada.length == 1 ){
        limite = document.getElementById('spawner').childElementCount
        setCartaNoBaralho(cartaSpawnada[0])
      console.log(limite)
      }
    },[cartaSpawnada])
  
    useEffect(()=>{

    } ,[])
    return (
    <Box id='box'>
      <Deck onClick={spawnar}/>

      <Spawn id='spawner'>
        {cartaNoBaralho}     
      </Spawn>
     {mesa}
    </Box>
  );
}

export { Card };

