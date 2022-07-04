import { ITask } from "./ITask.interface"
import { ITaskCreateResult } from "./ITaskCreateResult.interface"
import { ITaskFindAllResult } from "./ITaskFindAllResult.interface"

export interface ITaskService {
  create(body: ITask): Promise<ITaskCreateResult>
  findAll(): Promise<ITaskFindAllResult>
}
