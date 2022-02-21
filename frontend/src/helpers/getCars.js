
const carAPI = 'http://127.0.0.1:8000';

/*
    getCars()
    This function returns the cars from the database
*/
export const getCars = async() => {
    const url = `${carAPI}/cars/`;
    const resp = await fetch(url);
    const data = await resp.json();

    // extract the cars from the response.
    const cars = data.map(car => {
        return {
            id: car.id,
            car_name: car.car_name,
            car_plate: car.car_plate,
        };
    });

    return cars;
};

/*
    getCar(car_plate)
    This function returns the car with a car_plate from the database
*/
export const getCar = async(car_plate) => {
    const url = `${carAPI}/cars/${car_plate}`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
};

/*
    postCar(car):
    This function adds a car to the database
*/
export const postCar = async(car) => {
    const url = `${carAPI}/cars/`;
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
    });
    const { data } = await resp.json();

    return data;
};

/*
    deleteCar(car_plate):
    This function deletes a car from the database
*/
export const deleteCar = async(car_plate) => {
    const url = `${carAPI}/cars/${car_plate}`;
    const resp = await fetch(url, {
        method: 'DELETE',
    });
    const { data } = await resp.json();

    return data;
};