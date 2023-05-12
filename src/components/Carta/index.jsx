import {CorpoDaCarta} from './style'

import Draggable from 'react-draggable'
import React, { forwardRef } from 'react';



function Carta({limiteDoSpawn}){
    console.log(limiteDoSpawn)
    
    const ConteudoDaCarta = forwardRef((props, ref) => {
        return (
            <Draggable>
                <CorpoDaCarta ref={ref }  onClick={() =>{console.log('aaa')}}/>
            </Draggable>
          
        )
      })
    
    const ref = React.useRef(null)
    return(
        <ConteudoDaCarta 
        ref={ref}
       
        />
    )
}

export {Carta}