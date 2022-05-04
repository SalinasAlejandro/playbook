//Usando objeto express
const express = require('express');

//app de express
const app = express();

//Puerto en que vamos a ver nuestra app: 3000
const port = 3000;

//path inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

//Respondiendo texto localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a Launch X');
});

//Regresando un objeto localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = { name: "Explorer", msg: "Hola" };
    res.send(explorer);
});

//Query Params: Recibir parámetro por URL localhost:3000/explorers/name
app.get('/explorers/:name', (req, res) => {
    res.send(req.params);
});

//Con ésto inicializamos la app
app.listen(port, () => {
    console.log("Se está escuchando por el puerto", port);
});
