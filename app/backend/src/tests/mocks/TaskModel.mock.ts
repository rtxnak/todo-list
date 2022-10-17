import { ITask } from "../../interfaces/ITask.interface";

const taskModelMock: ITask[] = [
  {
    id: 1,
    description: "first task",
    status: "pending",
    date: "02/02/2002"
  },
  {
    id: 2,
    description: "second task",
    status: "ongoing",
    date: "02/02/1990"
  },
  {
    id: 3,
    description: "third task",
    status: "done",
    date: "02/02/2020"
  },
  {
    id: 4,
    description: "fourth task",
    status: "pending",
    date: "02/02/2010"
  }
];

export default taskModelMock;