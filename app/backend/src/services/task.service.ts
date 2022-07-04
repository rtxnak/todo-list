import { ITaskRepository } from "../interfaces/ITaskRespository.interface";
import { ITaskFindAllResult } from "../interfaces/ITaskFindAllResult.interface";
import { ITask } from "../interfaces/ITask.interface";
import { ITaskCreateResult } from "../interfaces/ITaskCreateResult.interface";
import { ITaskDestroyResult } from "../interfaces/ITaskDestroyResult.interface";

class TaskService {
  private _ITaskRepository: ITaskRepository

  constructor(iTaskRepository: ITaskRepository) {
    this._ITaskRepository = iTaskRepository
  }

  async findAll(): Promise<ITaskFindAllResult> {
    const result = await this._ITaskRepository.findAll();
    return { code: 200, result };
  }

  async create(task: ITask): Promise<ITaskCreateResult> {
    const taskStatus = task;
    taskStatus.status = 'pending';
    const result = await this._ITaskRepository.create(task);
    return { code: 201, result };
  }

  async update(id: number, description: string, status: string) {
    const updateResult = await this._ITaskRepository.update(id, description, status);
    if (updateResult) {
      const result = {
        update: {
          description,
          status,
        },
        message: 'task updated',
      };
      return { code: 200, result };
    }
    const result = { message: 'task have not been updated' };
    return { code: 400, result };
  }

  async destroy(id: number): Promise<ITaskDestroyResult> {
    const deletedResult = await this._ITaskRepository.destroy(id);
    if (deletedResult) {
      const result = { message: 'task deleted' };
      return { code: 200, result };
    }
    const result = { message: 'task have not been deleted' };
    return { code: 400, result };
  }
}

export default TaskService;