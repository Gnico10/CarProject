import React from 'react';
import { useState } from 'react';

/*
    This component is responsible for displaying
    the seach form in an inputValue field.
*/
export const CarSearchBar = ({carPlate, setCarPlate}) => {
    const [inputValue, setInputValue] = useState(carPlate);

    const handleImputFormChange = (e) => {
        setInputValue(e.target.value);
    };
 
    const handleImputForm = (e) => {
        // submit form
        e.preventDefault();

        if (inputValue.length >= 6) {
            setCarPlate(inputValue);
            setInputValue('');
        }    
    };

    return (
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-10 col-lg-8'>
                        <form className='card card-sm' 
                                onSubmit={handleImputForm} >
                            <div className='card-body row no-gutters align-items-center'>
                                <div className='col'>
                                    <input className='form-control form-control-lg form-control-borderless' 
                                            type='search' 
                                            placeholder='Enter at least 6 characters'
                                            value={inputValue}
                                            onChange={handleImputFormChange}/>
                                </div>
                                <div className='col-auto'>
                                    <button className='btn btn-lg btn-success' type='submit'>Search</button>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
