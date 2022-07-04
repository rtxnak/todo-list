import Task from "../core/Task";
import { actionOnPeding, actionOnOngoing, actionOnFinished} from "../components/tableActionsButtons"


interface TableProps {
  tasks: Task[];
  statusOnChange?: (task: Task, status: string) => void
  removeOneTask?: (task: Task) => void
  sortAllTasks?: (task: Task[], type: string) => void
  setEditBarVisbile?: (value: boolean) => void
  setTaskOnUpdate?: (task: Task) => void
}

export default function Table(props: TableProps) {
  function tableHeader() {
    return (
      <tr>
        <th className="p-4">Task Description</th>
        <th className="p-4">Status</th>
        <th className="p-4">Created Date</th>
        <th className="p-4">Actions</th>
      </tr>
    )
  }

  function tableActions(task: Task, props) {
    return (
      task.status === "pending" ? actionOnPeding(task, props) : false ||
        task.status === "ongoing" ? actionOnOngoing(task, props) : false ||
          task.status === "done" ? actionOnFinished(task, props) : false
    )
  }

  function tableBody() {
    return props.tasks?.map((task, i) => {
      return (
        <tr key={task.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td>{task.description}</td>
          <td className="text-left p-4 items-center">{task.status}</td>
          <td className="text-left p-4 items-center">{task.date}</td>
          {tableActions(task, props)}
        </tr>
      )
    })
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-lime-600 to-purple-800
      `}>
        {tableHeader()}
      </thead>
      <tbody>
        {tableBody()}
      </tbody>
    </table>
  )
}