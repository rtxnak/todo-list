import { ITask } from "./ITask.interface"

export interface ITaskRepository {
  findAll(): Promise<ITask[]>
}
