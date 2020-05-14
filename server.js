const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/swflix'));

app.all('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/dist/swflix/index.html'));
});

app.listen(process.env.PORT || 8080);
