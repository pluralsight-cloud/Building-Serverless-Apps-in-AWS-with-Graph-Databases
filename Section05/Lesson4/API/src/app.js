
import express from "express";
import serverless from "serverless-http";
import bodyParser from "body-parser";

const port = process.env.PORT || 3000;
const app = express();

import mainRoutes from './routes/main.routes.js'
import peopleRoutes from './routes/person.routes.js';
import hobbiesRoutes from './routes/hobby.routes.js'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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