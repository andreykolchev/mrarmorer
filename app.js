const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Node App</title>
    </head>
    <body>
      <h1>Hello World from Node.js</h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});