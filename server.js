const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));

app.get('/api/content', (req, res) => {
  fs.readFile('./data/content.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error al cargar contenido');
    res.send(JSON.parse(data));
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});