import { ITaskRepository } from "../interfaces/ITaskRespository.interface";
import { ITaskFindAllResult } from "../interfaces/ITaskFindAllResult.interface";

class TaskService {
  private _ITaskRepository: ITaskRepository

  constructor(iTeamRepository: ITaskRepository) {
    this._ITaskRepository = iTeamRepository
  }

  async findAll(): Promise<ITaskFindAllResult> {
    const result = await this._ITaskRepository.findAll();
    return { code: 200, result };
  }
}

export default TaskService;