import React from 'react'
import {NavLink} from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <ul className="nav bg-dark">
                <li className="nav-item">
                    <NavLink to={"/"} className="nav-link" >Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/quienessomos"} className="nav-link" >Quienes Somos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/historia"} className="nav-link" >Nuestra Historia</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/lanzamientos"} className="nav-link" >Próximos Lanzamientos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/contacto"} className="nav-link" >Contáctanos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/login"} className="nav-link" >Intranet</NavLink>
                </li>
            </ul>
        </>
    )
}
