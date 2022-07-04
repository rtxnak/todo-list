
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
}