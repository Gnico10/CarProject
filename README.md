## Car Project

![](https://github.com/Gnico10/CarProject/blob/main/frontend/src/assets/car_plate.png?raw=true)

To launch the application you must execute the following commands in docker.

```
$ docker-compose build
$ docker-compose up
```

## Backend
For document API http://localhost:8000/docs

### /cars/
You can try GET, POST, DELETE

#### GET all cars
```
$ curl -X GET "http://localhost:8000/cars/" -H "accept: application/json"
```

#### GET a car
```
$ curl -X GET "http://localhost:8000/cars/{car_plate}" -H "accept: application/json"
```
---

## Frontend
The frontend is deployed in http://localhost:3000/

