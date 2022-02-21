import {useState, useEffect} from "react";
import { getCar, getCars } from "../helpers/getCars";


export const useFetchCars = (cars) => {
    // Init state.
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Fetch the cars and change state.
    useEffect(() => {
        getCars().then(resp_cars => {
            setState({
                data: resp_cars,
                loading: false
            });
        });
    }, [cars]);

    return state; // { data: [], loading: true }
};

export const useFetchCar = (car_plate) => {
    // Init state.
    const [state, setState] = useState({
        data: null,
        loading: true
    });

    // Fetch the car with car_plate and change state.
    useEffect(() => {
        getCar(car_plate).then(resp_car => {
            if (resp_car) {
                setState({
                    data: resp_car,
                    loading: false
                });
            } else {
                setState({
                    data: null,
                    loading: false
                });    
            }
        });
    }, [car_plate]);

    return state; // { data: null, loading: true }
};