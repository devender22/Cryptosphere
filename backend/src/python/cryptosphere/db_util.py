import mysql.connector
from mysql.connector import errorcode

config = {
    'host': 'cryptosphere.mysql.database.azure.com',
    'user': 'abhirami',
    'password': 'Desisproject@1',
    'database': 'cryptodb',
    'client_flags': [mysql.connector.ClientFlag.SSL],
    'port': '3306',
    # Path to SSL certificate
    'ssl_ca': '/home/anushka/Downloads/DigiCertGlobalRootCA.crt.pem'
}


# Connect to MySQL data_base
def get_db_connection():
    global data_base
    global cursor_object
    try:
        data_base = mysql.connector.connect(**config)
        print("Connection established")
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with the username or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
        exit(1)
    else:
        cursor_object = data_base.cursor()

