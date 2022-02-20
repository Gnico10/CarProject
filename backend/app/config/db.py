from multiprocessing import connection
from sqlalchemy import create_engine, MetaData

engine = create_engine('mysql+pymysql://root:root@localhost:3306/car_project')
meta = MetaData()
connection = engine.connect()
