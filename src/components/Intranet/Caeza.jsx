import React from 'react'
import {NavLink} from 'react-router-dom'

export const Caeza = () => {
    return (
        <>
            <ul className="nav bg-dark">
                <li className="nav-item">
                    <NavLink to={"/"} className="nav-link" >CERRAR SESION</NavLink>
                </li>
            </ul>
        </>
    )
}