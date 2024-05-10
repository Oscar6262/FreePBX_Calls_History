import mysql.connector


config = {
    "user": "admindb",
    "password": "admin",
    "host": "192.168.100.236",
    "database": "asteriskcdrdb",
    "port": "3306",
    "raise_on_warnings": True,
}


def filtrado(params):
    try:
        

        conn = mysql.connector.connect(**config)
        query = """
            SELECT calldate, src, dst, duration, disposition, ciudad 
            FROM ViewSucursales 
            WHERE (src = %(src)s OR %(src)s IS NULL) 
                AND (dst = %(dst)s OR %(dst)s IS NULL) 
                AND (calldate BETWEEN %(d1)s AND %(d2)s OR %(d1)s IS NULL AND %(d2)s IS NULL) 
                AND (disposition = %(status)s OR %(status)s IS NULL) 
                AND (ciudad = %(city)s OR %(city)s IS NULL);  
        """

        cursor = conn.cursor(dictionary=True)

        cursor.execute(
            query,
            params
        )
        data = cursor.fetchall()

        cursor.close()
        conn.close()
        return data

    except mysql.connector.Error as err:
        print("Error de conexión a la base de datos:", err)


# connect_and_write_to_csv()
