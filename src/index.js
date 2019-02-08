const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);
mongoose.connect('URL', {
  useNewUrlParser: true,
});

app.use((request, response, next) => {
  request.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
