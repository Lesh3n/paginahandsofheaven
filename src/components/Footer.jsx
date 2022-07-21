import React from 'react'
import logo from '../assets/img/HANDS OF HEAVEN LOGO.png'

export const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <img width="80" height="80" src={logo}/>
                        </a>
                        <span className="text-muted">&copy; 2021 ANARIBCA, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="https://twitter.com/h4ndofheav3n" target={"_blank"}><i className="bi bi-twitter fs-3"></i></a></li>
                        <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/h4nd.of.h3aven/" target={'_blank'}><i className='bi bi-instagram fs-3'></i></a></li>
                        <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/Hands-Of-Heaven-100543209316211" target={'_blank'}><i className='bi bi-facebook fs-3'></i></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}
