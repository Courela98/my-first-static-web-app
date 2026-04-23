const express = require('express');
const app = express();

const html = `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>A minha App</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f5f5f5;
      font-family: sans-serif;
    }

    .card {
      background: white;
      border-radius: 16px;
      padding: 48px 56px;
      text-align: center;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    }

    .dot {
      width: 12px;
      height: 12px;
      background: #22c55e;
      border-radius: 50%;
      display: inline-block;
      margin-bottom: 24px;
    }

    h1 {
      font-size: 1.8rem;
      color: #111;
      margin: 0 0 8px;
    }

    p {
      color: #888;
      margin: 0;
      font-size: 0.95rem;
    }

    #clock {
      display: block;
      margin-top: 24px;
      font-size: 2rem;
      font-weight: bold;
      color: #111;
      letter-spacing: 0.05em;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="dot"></div>
    <h1>Servidor Online V2</h1>
    <p>Azure App Service · Node.js</p>
    <span id="clock"></span>
  </div>

  <script>
    const clock = document.getElementById('clock');
    function tick() {
      clock.textContent = new Date().toLocaleTimeString('pt-PT');
    }
    tick();
    setInterval(tick, 1000);
  </script>
</body>
</html>`;

app.get('/', (req, res) => res.send(html));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Servidor a correr na porta ' + port));