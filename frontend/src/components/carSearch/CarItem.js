import React from 'react';

/*
    This component is responsible for displaying
    the search results or an error message.
*/
export const CarItem = ({car}) => {
  if (car) {
    return (
      <>
        <div className='container pt-5 d-flex justify-content-center'>
          <div className='card text-white bg-success text-center px-5 animate__animated animate__backInRight'>
            <div className='card-header'>Car Plate: 
              <div className='font-weight-bold'> {car.car_plate} </div>
            </div>
            <div className='card-body'>
              <div className='card-text'>Car Name: 
                <div className='font-weight-bold'> {car.car_name} </div>
              </div>
            </div>
          </div>  
        </div> 
      </>
    );
  } else {
    return(
      <>
        <div className='container pt-5'>   
          <div className='card text-white bg-danger text-centerr animate__animated animate__backInLeft'>
            <div className='card-body'>
              <h5 className='card-title'>Car not found!</h5>
            </div>
          </div>
        </div>
      </>
    );
  } 
}
