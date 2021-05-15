import React from 'react'
import Propiedad from './Propiedad'
import '../styles/listaPropiedades.css'
const searchProp = ""
const FiltrarPropiedad = props => {
    return ( 
        <div className="lista-propiedades">
            {
                props.data.filter((element)=>{
                    if(searchProp == ""){
                        return element;
                    }else if (element.data.city.toLowerCase().includes(searchProp.toLowerCase())){
                        return element;
                    }
                }).map((element,key) => {
                    return(
                        <Propiedad data={element} key={key} />
                    )
                })
            }

            
        </div>
    )
}


export default FiltrarPropiedad
