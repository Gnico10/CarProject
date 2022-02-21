import React from 'react';
// import 'index.css';

import { Navbar } from './components/Navbar';
import { CarSearch } from './components/carSearch/CarSearch';

export const App = () => {
    return ( 
        <>
            <Navbar/>
            <CarSearch/>



            <footer className="footer font-small fixed-bottom darken-3 text-white bg-dark">
                <div className="footer-copyright text-center py-3">
                    © 2022 Copyright:
                    <a className='text-white'
                        href='https://www.linkedin.com/in/gast%C3%B3n-medina-531088130/'> Gastón Medina</a>
                </div>
            </footer>
        </>
    );
}