import React from 'react'
import ListaPropiedades from './ListaPropiedades'
import '../styles/home.css'
import FiltrarPropiedad from './FiltrarPropiedad'
import Propiedad from './Propiedad'
import '../styles/listaPropiedades.css'

const Home = (props) => {
    // ROSITA aquí solo dejamos el Filter para que filtre la lista mediante el props.searchProp que es el dato que viene desde el buscador.
    return (
        <div className="container-home">
            <div className="container-title">
                <span className="title-header">{props.title}</span>
                <span className="count">{`${props.data.length}+ stays`}</span>
                
            </div>
            
            <div className="lista-propiedades">
            {
                props.data.filter((element)=>{
                    console.log(element.city);
                    if(props.searchProp == ""){
                        return element;
                    }else if (element.city.toLowerCase().includes(props.searchProp.toLowerCase())){
                        return element;
                    }
                }).map((element,key) => {
                    return(
                        <Propiedad data={element} key={key} />
                    )
                })
            }
            </div>

        </div>
    )
}

export default Home
