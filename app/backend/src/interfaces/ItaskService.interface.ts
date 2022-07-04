import { ITaskFindAllResult } from "./ITaskFindAllResult.interface"

export interface ITaskService {
  findAll(): Promise<ITaskFindAllResult>
}
