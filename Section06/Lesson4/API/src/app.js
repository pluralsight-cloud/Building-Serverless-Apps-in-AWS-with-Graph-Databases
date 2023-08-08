const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

const mainRoutes = require('./routes/main.routes.js');
const peopleRoutes = require('./routes/person.routes.js');
const hobbiesRoutes = require('./routes/hobby.routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', peopleRoutes);
app.use('/', hobbiesRoutes);
app.use('/', mainRoutes);

if (process.env.PROVIDER === 'aws') {
  exports.handler = serverless(app);
} else {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
}