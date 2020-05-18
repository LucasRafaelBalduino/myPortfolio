import express from 'express';
import mongosse from 'mongoose';
import cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    mongosse.connect('add mongodb api',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
