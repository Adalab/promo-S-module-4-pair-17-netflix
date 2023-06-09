const express = require('express');
const cors = require('cors');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});


const mysql = require('mysql2/promise');

let connection;  // Aquí almacenaremos la conexión a la base de datos

mysql
  .createConnection({
    host: 'localhost',
    database: 'netflix',
    user: 'root',
    password: '',
  })
  .then(conn => {
    connection = conn;
    connection
      .connect()
      .then(() => {
        console.log(`Conexión establecida con la base de datos (identificador=${connection.threadId})`);
      })
      .catch((err) => {
        console.error('Error de conexion: ' + err.stack);
      });
  })
  .catch((err) => {
    console.error('Error de configuración: ' + err.stack);
  });

  app.get('/user', (req, res) => {
    console.log('Pidiendo a la base de datos información de los empleados.');
    connection
      .query('SELECT * FROM netflix')
      .then(([results, fields]) => {
        console.log('Información recuperada:');
        results.forEach((result) => {
          console.log(result);
        });
  
        res.json(results);
      })
      .catch((err) => {
        throw err;
      });
  });

