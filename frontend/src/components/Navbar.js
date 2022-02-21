import React from 'react';
import car_plate_img from '../assets/car_plate.png';

export const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-dark bg-dark">
          <div className="navbar-brand">
              <img src={car_plate_img} 
                  width="80" 
                  height="60" 
                  className="d-inline-block align-center pr-2" 
                  alt="car_plate" />
              Car Plate Project
          </div>
        </nav>
    </>
  );
}
