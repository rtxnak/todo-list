
import { ITask } from "../../interfaces/ITask.interface";
import Task from "../models/Tasks";

export default class TaskRepository {
  findAll = async (): Promise<ITask[]> => {
    const result = await Task.findAll();
    return result;
  };

  create = async (task: any): Promise<ITask> => {
    const result = await Task.create(task);
    return result;
  };

  update = async (id: number, description: string, status: string) => {
    const update = await Task.update(
      { description, status },
      { where: { id } },
    );
    const result = update[0];
    return result;
  };

  destroy = async (id: number) => {
    const result = await Task.destroy(
      { where: { id } },
    )
    return result;
  }
}