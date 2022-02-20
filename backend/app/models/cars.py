from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String;
from config.db import meta

cars = Table(
    'cars', 
    meta,
    Column('id', Integer, primary_key=True, autoincrement=True),
    Column('car_name', String(30), nullable=False),
    Column('car_plate', String(7), nullable=False, unique=True),
    )