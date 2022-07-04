export interface ITaskUpdateResult {
  code: number,
  result: {
    update: {
      description: string
      status: string
    },
    message: string,
  } | {
    message: string
  }
}