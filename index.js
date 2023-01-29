// express stuff
const express = require('express');
const app = express();



//enable router and routes
const router = require('./routes/routes');
const { dataLoad } = require('./middleware/dataLoad');
app.use(dataLoad)
app.use('/', router);

// starting the server
app.listen(3001, () => {
    console.log("Server started on port 3001. Ctrl^c to quit.");
  });