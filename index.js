const express = require('express');
const path = require('path');

const port = process.env.PORT || 3005;

const app = express();
app.use(express.static(path.join(__dirname, './build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`connected on port ${port}`);
});
