import React from 'react'

const Header = (props) => {
    //ROSITA: este nuevo componente va a tener el buscador que mediente al props.setSearchProp pasa el dato que pone el usuario para filtrar al componente padre.
    return (
        <div>
            <input className="search-input" type= "search" placeholder="Buscar por ciudad.." 
                onChange= {(event)=> {
                    props.setSearchProp(event.target.value)
                }} />
        </div>
    )
}

export default Header
