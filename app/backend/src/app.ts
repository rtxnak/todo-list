import express, { json } from 'express';

class App {
  public app: express.Application

  constructor() {
    this.app = express();
    this.routes();
  }

  middlewares() {
    this.app.use(json());
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT);
  }

  private routes(): void {
    this.app.get('/', (req, res, next) => {
      res.send('TO DO LIST BACKEND')
    })
  }
}

export { App };
