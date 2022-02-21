import React, { useState } from 'react'
import { useFetchCars } from '../../hooks/useFetchCars';

export const CarList = () => {
    const [isShowCars, setIsShowCars] = useState(false);
    const {data: cars} = useFetchCars();
    return (
        <div className='container pt-3'>
            <div className='card border-primary text-center mb-1' >
            <div className='card-body text-primary'>
                <div className='card-title'>
                    <h5 className='card-title'>Cars list to test</h5>  
                    {
                        isShowCars 
                            ? <button className='btn btn-secondary' onClick={() => setIsShowCars(false)}>Hide Cars</button>  
                            : <button className='btn btn-primary' onClick={() => setIsShowCars(true)}>View Cars</button>  
                    } 
                </div>

                {   
                    isShowCars && (

                        <div className='card-text animate__animated animate__fadeIn'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                    <th scope='col'>ID</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Plate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cars.map((icar) => (
                                            <tr key={icar.car_plate}>
                                                <th scope='row'>{icar.id}</th>
                                                <td>{icar.car_name}</td>
                                                <td>{icar.car_plate}</td>
                                            </tr>
                                        ))
                                    } 
                                </tbody>
                            </table>    
                        </div>
                    )
                }
            </div>
            </div>
        </div>
    );
}
