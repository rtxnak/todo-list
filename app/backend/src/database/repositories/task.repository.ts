import { ITask } from "../../interfaces/ITask.interface";
import Task from "../models/Tasks";

export default class TaskRepository {
  findAll = async (): Promise<ITask[]> => {
    const result = await Task.findAll();
    return result;
  };
}