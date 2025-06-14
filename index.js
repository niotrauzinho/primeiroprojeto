const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(`IP capturado: ${ip}`);
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
console.log("Tentando iniciar o servidor...");
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

