const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log(req);
  res.send("done");
});

app.get('/test', (req, res) => {
  console.log('Test console log');
  res.send("Test route executed.");
});

app.listen(3000, () => {
  console.log('Server connected on port 3000');
});
