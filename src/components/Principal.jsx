import React from 'react'
import { Inicio } from './Inicio'
import { QuienesSomos } from './QuienesSomos'
import { Historia } from './Historia'
import { Lanzamientos } from './Lanzamientos'
import { Contacto } from './Contacto'
import { Login } from './Login'
import { Intranet } from './Intranet/Intranet'
import { Header } from './Header'
import { Footer } from './Footer'
import { useState } from 'react'
import { useEffect } from 'react'

export const Principal = (props) => {

    const [users, setUsers] = useState([{ 'u': 'admin', 'p': 'clave' }])
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [])

    const direccionar = ()=>{
        switch (props.ruta) {
            case "/":
                return <Inicio/>
            case "quienessomos":
                return <QuienesSomos/>
            case "historia":
                return <Historia/>
            case "lanzamientos":
                return <Lanzamientos/>
            case "contacto":
                return <Contacto/>
            case "login":
                return <Login/>
            default:
                return <p className='text-center'>ERROR 404 - La vista no existe.</p>;
        }
    }






    return (
        <>
            <Header/>
            {direccionar()}
            <Footer/>
        </>
    )
}
