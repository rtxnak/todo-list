import express from 'express';

class App {
  public app: express.Application

  constructor() {
    this.app = express();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT);
    console.log(`Server is running at http://localhost:${PORT}`);
  }

  private routes(): void {
    this.app.get('/', (_req, res, _next) => {
      res.send('TO DO LIST BACKEND')
    })
  }
}

export { App };
