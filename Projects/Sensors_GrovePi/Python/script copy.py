import time
from grovepi import *
from grove_rgb_lcd import *

connection = mysql.connector.connect(
    host='192.168.0.170', database='Pi', user='Pi', password='hesloProPiDoDatabaze')


def insertVariblesIntoTable(connection, hum, temp, lux, noise):
    cursor = connection.cursor()
    mySql_insert_query = "INSERT INTO Laptop (Id, Name, Price, Purchase_date) VALUES (%s, %s, %s, %s)"
    now = time.strftime('%Y-%m-%d %H:%M:%S', datetime.now())
    recordTuple = (hum, temp, lux, noise, now)
    cursor.execute(mySql_insert_query, recordTuple)
    connection.commit()


while True:
    setRGB(40, 125, 0)
    temp, hum = dht(7, 0)
    t = str(temp)
    h = str(hum)
    lux = str(analogRead(1))
    noise = str(analogRead(0))
    insertVariblesIntoTable(connection, hum, temp, lux, noise)
    setText("Temp="+t+"C, Humidity="+h+"Lux level="+lux+", Sound="+noise+"db")
    time.sleep(1)
