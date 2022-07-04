import { ITask } from "./ITask.interface"
import { ITaskCreateResult } from "./ITaskCreateResult.interface"
import { ITaskFindAllResult } from "./ITaskFindAllResult.interface"
import { ITaskUpdateResult } from "./ITaskUpdateResult.interface"

export interface ITaskService {
  update(id: number, description: string, status: string): Promise<ITaskUpdateResult>
  create(body: ITask): Promise<ITaskCreateResult>
  findAll(): Promise<ITaskFindAllResult>
}
