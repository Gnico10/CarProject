from fastapi import APIRouter
from config.db import connection
from models.index import cars
from schemas.index import Cars

car = APIRouter()

@car.get("/")
async def read_data():
    ''' Get all cars '''
    return connection.execute(cars.select()).fetchall()

@car.get("/{car_plate}")
async def read_data(car_plate: str):
    ''' Get car by car_plate '''
    return connection.execute(cars.select().where(cars.c.car_plate == car_plate)).fetchone()

@car.post("/")
async def write_data(car: Cars):
    ''' The car_plate is unique, so if the car_plate already exists, it will not be inserted. '''
    if not connection.execute(cars.select().where(cars.c.car_plate == car.car_plate)).fetchall():
        connection.execute(cars.insert().values(
                car_name=car.car_name, 
                car_plate=car.car_plate
                ))
        return car
    else:
        return {"message": "The car plate is already in use"}

@car.delete("/{car_plate}")
async def read_data(car_plate: str):
    ''' The car plate is unique, so we can delete the car by its plate.
        If not, we will get a message error '''
    if connection.execute(cars.select().where(cars.c.car_plate == car_plate)).fetchall():
        connection.execute(cars.delete().where(cars.c.car_plate == car_plate))
        return {"message": "The car has been deleted"}
    else:
        return {"message": "The car plate is not in use"}