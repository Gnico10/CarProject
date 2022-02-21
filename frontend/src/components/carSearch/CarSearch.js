import React, { useState, useEffect } from 'react';

import { CarSearchBar } from './CarSearchBar';
import { CarItem } from './CarItem';
import { CarList } from './CarList';

import { useFetchCar } from '../../hooks/useFetchCars';

/*
    This component is responsible for displaying 
    the search form and results.
*/
export const CarSearch = () => {
    const [carPlate, setCarPlate] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const {data: car, loading} = useFetchCar(carPlate);
    
    useEffect(() => {
        if (carPlate.length >= 6) 
            setIsSearching(true);
    }, [carPlate]);   


    return (
        <>
            <CarList/>
            <br/>
            <CarSearchBar carPlate={carPlate} setCarPlate={setCarPlate}/>
            {     
                (isSearching && (
                    loading ? (
                        <>
                            <div className='container pt-5'>   
                            <div className='card text-white bg-dark text-centerr mb-3 animate__animated animate__pulse'>
                                <div className='card-body'>
                                <h5 className='card-title'>Loading...</h5>
                                </div>
                            </div>
                            </div>
                        </>
                    ): (
                        <CarItem car={car}/>
                    ))
                )
            }
        </>
    )
}
