import express from 'express';
import mongosse from 'mongoose';
import cors from 'cors';
import path from 'path';
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
    this.server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
    mongosse.connect('sua api',
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
