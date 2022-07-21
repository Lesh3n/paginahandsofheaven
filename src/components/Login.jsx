import React, { useState } from 'react'
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


export const Login = () => {
 const [error,setError] = useState()
 const [usuario, setUsuario] = useState("");
 const [pass, setPass] = useState("");
 const [users,setUsers] = useState([])
 const navigate = useNavigate()
 useEffect(()=>{
    setUsers(JSON.parse(localStorage.getItem("users")))
 },[])


 function iniciarSesion(e){
    e.preventDefault();
    var inUsuario = document.getElementById("inUsuario").value;
    var inPass = document.getElementById("inPass").value;
    if (inUsuario.length === 0 || inPass.length === 0) {
        alert("Uno o mas campos vacios!");
    }else{
        for (const item of users) {
            if (usuario == item['u'] && pass == item['p'])
            setError("");
            navigate('/intranet');
        }
    }
        setError("Usuario y/o contrasenia incorrectos!")
 }



  return (
    <>
        <div id='containerForm' className='container text-center'>
            <form id='formLogin'>
                <div id='headerLogin'>
                    <h1 className='text-center border-bottom border-dark'>LOGIN</h1>
                </div>
                <div id='entradaUsuario'>
                    <label htmlFor="inUsuario">Usuario</label>
                    <br />
                    <input type="text" id="inUsuario" className='text-center' onChange={ (e)=>setUsuario(e.target.value) } required/>
                </div>
                <br />
                <div id='entradaPass'>
                    <label htmlFor="inPass">Contraseña</label>
                    <br />
                    <input type="password" id="inPass" className='text-center' onChange={ (e)=>setPass(e.target.value) } required/>
                </div>
                <br />
                <button type='submit' className='btn btn-primary' value={'Login'} onClick={iniciarSesion}>Iniciar Sesion</button>
                <span>{error}</span>
            </form>
        </div>
    </>
  )
}
