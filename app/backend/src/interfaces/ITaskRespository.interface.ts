import { ITask } from "./ITask.interface"

export interface ITaskRepository {
  create(task: ITask): Promise<ITask>
  findAll(): Promise<ITask[]>
}
