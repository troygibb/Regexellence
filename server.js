const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
app.set('port', port);

app.use(express.static(path.join(__dirname, '/build	')));

app.get('/', (req, res) => {
  console.log('Serving /');
  res.sendFile(path.join(__dirname, '/build/index.html')
});

app.listen(port, function() {console.log(`Listening on http://localhost:${port}/`)});
