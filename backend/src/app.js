import express from 'express';
import mongosse from 'mongoose';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    mongosse.connect('mongodb+srv://admin:PALADINO1994@cluster0-njglh.mongodb.net/test?retryWrites=true&w=majority',
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
