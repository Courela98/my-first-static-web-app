const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem-vindo a Azure App Service - Node.js');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Servidor a correr');
});