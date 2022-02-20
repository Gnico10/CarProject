from pydantic import BaseModel

class Cars(BaseModel):
    car_name: str
    car_plate: str

