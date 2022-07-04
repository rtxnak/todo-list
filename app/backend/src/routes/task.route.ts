import { Router } from 'express';

import TaskController from '../controller/task.controller';
import TaskService from '../services/task.service';
import TaskRepository from '../database/repositories/task.repository';

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

const taskRouter = Router();

taskRouter.get('/', (req, res, next) => {
  taskController.findAll(req, res, next);
});

taskRouter.post('/', (req, res, next) => {
  taskController.create(req, res, next);
});

taskRouter.put('/', (req, res, next) => {
  taskController.update(req, res, next);
});

taskRouter.delete('/', (req, res, next) => {
  taskController.destroy(req, res, next);
});

export default taskRouter;