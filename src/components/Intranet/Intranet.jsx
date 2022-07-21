import React from 'react'
import { Footer } from '../Footer'
import { Caeza } from './Caeza'
import { useState } from 'react'
import { useEffect } from 'react'

export const Intranet = (props) => {

    const getRegistros = () => {
        var datos = localStorage.getItem("registrosls");
        if (datos) {
            return JSON.parse(datos);
        }else{
            return [];
        }
    }

    const limpiarForm = () => {
        document.getElementById("bddHoH").reset();
    }

    const [registrosls, setRegistrosLS] = useState(getRegistros());

    const [isbn, setIsbn] = useState("");
    const [nombre, setNombre] = useState("");
    const [editorial, setEditorial] = useState("");
    const [valor, setValor] = useState("");



    const botonIngresar = (e) => {
        e.preventDefault();
        var contenido = { isbn, nombre, editorial, valor };
        setRegistrosLS([...registrosls, contenido]);
        limpiarForm();
    }

    const borrar = (idIndex) => {
        if(window.confirm("Esta seguro de eliminar el contenido seleccionado?")){
            var regsFiltrados = registrosls.filter((e, idIn) => {
                return  idIndex !== idIn
            });
            setRegistrosLS(regsFiltrados);
        }
    }




    useEffect(() => {
        localStorage.setItem("registrosls", JSON.stringify(registrosls));
    }, [registrosls]);


    const direccionar = () => {
        switch (props.ruta) {
            case "intranet":
                return (
                    <>
                        <div className='container'>
                            <br />
                               <div className='text-center border-bottom border-dark'>
                                    <h1>INVENTARIO HANDS OF HEAVEN</h1>
                               </div> 
                               <br />
                               <form id='bddHoH' onSubmit={ botonIngresar }>
                                    <div className='row text-center'>
                                            <div className='col-md-3 offset-md-2'>
                                                <label htmlFor="iIsbn" className='form-label'>ISBN</label>
                                                <input className='form-control text-center' type="text" id='iIsbn' onChange={(e)=>setIsbn(e.target.value)} required />
                                            </div>
                                            <br />
                                            <div className='col-md-4 offset-md'>
                                                <label htmlFor="iNombre" className='form-label'>Nombre de la obra</label>
                                                <input className='form-control text-center' type="text" id='iNombre' onChange={(e)=>setNombre(e.target.value)} required />
                                            </div>
                                    </div>
                                    <div className='row text-center'>
                                        <div className='col-md-3 offset-sm-2'>
                                            <label htmlFor="iEditorial" className='form-label'>Editorial</label>
                                            <input className='form-control text-center' type="text" id='iEditorial' onChange={(e)=>setEditorial(e.target.value)} required />
                                        </div>
                                        <br />
                                        <div className='col-md-2 offset-sm-1'>
                                            <label htmlFor="iValor" className='form-label'>Valor ($)</label>
                                            <input className='form-control text-center' type="number" id="iValor" onChange={(e)=>setValor(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div id='boton' className='text-center'>
                                        <br />
                                        <button className='btn btn-dark'>Ingresar</button>
                                        <br />
                                    </div>
                               </form>


                            <br />

                            <div className='table-responsive'>

                                <>
                                    <table className='table table-bordered table-hover'>
                                        <thead className='table-primary text-center'>
                                            <tr>
                                                <th>ID</th>
                                                <th>ISBN</th>
                                                <th>Nombre</th>
                                                <th>Editorial</th>
                                                <th>Valor</th>
                                                <th>Eliminar</th>
                                                <th>Modificar</th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center align-baseline'>
                                            {
                                                registrosls.map((contenido, idIn) => (
                                                    <tr>
                                                        <td>{idIn+1}</td>
                                                        <td>{contenido.isbn}</td>
                                                        <td>{contenido.nombre}</td>
                                                        <td>{contenido.editorial}</td>
                                                        <td>{contenido.valor}</td>
                                                        <td className='text-center'>
                                                            <button type='button' className='btn btn-outline-danger' onClick={ ()=>borrar(idIn) }>
                                                                <i className="bi bi-trash-fill"></i>
                                                            </button>
                                                        </td>
                                                        <td className='text-center'>
                                                            <button type='button' className='btn btn-outline-warning'>
                                                                <i class="bi bi-pencil"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </>

                            </div>

                        </div>
                    </>
                )
            default:
                break;
        }
    }
    return (
        <>
            <Caeza/>
            {direccionar()}
            <Footer/>
        </>
    )
}
