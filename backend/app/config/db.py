from multiprocessing import connection
from sqlalchemy import create_engine, MetaData

user_name = 'root'
password = 'root'
host = 'db' # docker-compose.yml
database_name = 'car_project'

DATABASE = 'mysql+pymysql://%s:%s@%s/%s' % (
    user_name,
    password,
    host,
    database_name,
)


engine = create_engine(DATABASE)
meta = MetaData()
connection = engine.connect()
