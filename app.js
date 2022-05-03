const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Funciona!');
})

app.listen(port, () => {
  console.log(`Ocurrencia en el puerto ${port}`);
})

//! Configuraciones del servidor

app.use(express.static("public")); // Indica dónde están todos los elementos estáticos.

//! Conexionado con HTML

app.get('/home', (req, res) => { 
    res.sendFile(__dirname + "/views/home.html"); // Con __dirname hacemos un PATH ABSOLUTO.
});

app.get('/about', (req, res) => { 
    res.sendFile(__dirname + "/views/about.html"); // Con __dirname hacemos un PATH ABSOLUTO.
});

app.get('/works', (req, res) => { 
    res.sendFile(__dirname + "/views/works.html"); // Con __dirname hacemos un PATH ABSOLUTO.
});

app.get('/gallery', (req, res) => { 
    res.sendFile(__dirname + "/views/gallery.html"); // Con __dirname hacemos un PATH ABSOLUTO.
});
