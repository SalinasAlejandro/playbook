// Usando objeto express
const express = require('express');

// App de Express
const app = express();

app.use(express.json()); // Indicamos que usaremos JSON

// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;


app.get('/v1/explorers', (req, res) => {
    const explorer1 = { id: 1, name: "Dykeo" };
    const explorer2 = { id: 2, name: "Alejandro" };
    const explorer3 = { id: 3, name: "Salinas" };
    const explorer4 = { id: 4, name: "Lessli" };
    const explorers = [explorer1, explorer2, explorer3, explorer4];
    res.status(200).json(explorers);
});

app.get('/v1/explorers/:id', (req, res) => {
    const explorer = { id: 1, name: "Dykeo" };
    res.status(200).json(explorer);
});

app.post('/v1/explorers', (req, res) => {
    const resquestBody = req.body;
    res.status(201).json({ message: "Created" });
});

app.put('/v1/explorers/:id', (req, res) => {
    const resquestBody = req.body;
    res.status(200).json({ message: "Updated!" });
});

app.delete('/v1/explorers/:id', (req, res) => {
    const resquestBody = req.body;
    res.status(200).json({ message: "Deleted!" });
});


// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});