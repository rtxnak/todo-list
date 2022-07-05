import { NextFunction, Request, Response } from 'express';
import { ITaskService } from '../interfaces/ItaskService.interface';

class TaskController {
  private _ITaskService: ITaskService

  constructor(iTaskService: ITaskService) {
    this._ITaskService = iTaskService;
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks = await this._ITaskService.findAll();
      return res.status(tasks.code as number).json(tasks.result);
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;
      const taskCreated = await this._ITaskService.create(body);
      return res.status(taskCreated.code as number).json(taskCreated.result);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, description, status } = req.body;
      const taskUpdated = await this._ITaskService
        .update(Number(id), description, status);
      return res.status(taskUpdated.code as number).json(taskUpdated.result);
    } catch (err) {
      next(err);
    }
  }

  async destroy(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;
      const taskDeleted = await this._ITaskService.destroy(Number(id));
      return res.status(taskDeleted.code as number).json(taskDeleted.result);
    } catch (err) {
      next(err);
    }
  }
}

export default TaskController;