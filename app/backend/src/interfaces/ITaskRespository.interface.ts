import { ITask } from "./ITask.interface"

export interface ITaskRepository {
  update(id: number, description: string, status: string): Promise<number>
  create(task: ITask): Promise<ITask>
  findAll(): Promise<ITask[]>
}
