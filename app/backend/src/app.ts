import express from 'express';
import taskRouter from './routes/task.route';

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
    this.app.use('/', taskRouter);
  }
}

export { App };
