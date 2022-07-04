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
}

export default TaskController;