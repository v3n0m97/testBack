const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log(req);
  res.send("done");
});

app.listen(5000, () => {
  console.log('server connected');
});
