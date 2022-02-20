from fastapi import FastAPI
from routes.index import car

app = FastAPI()


app.include_router(car, prefix="/car")