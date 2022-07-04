import Layout from "../components/Layout"
import SearchBar from "../components/InputAndSearchBar"
import EditBar from "../components/EditBar"
import Table from "../components/Table"
import useTasks from "../hooks/useTasks"

export default function Home() {

  const {
    tasks,
    createNewTask,
    updateTaskStatus,
    removeOneTask,
    sortAllTasks,
    editBarVisbile,
    setEditBarVisbile,
    taskOnUpdate,
    setTaskOnUpdate,
    updateTaskDescription
  } = useTasks();
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-lime-100 to-purple-300
      text-white
    `}>
      <Layout title={"TO DO LIST"}>
        {!editBarVisbile ?
          (<SearchBar tasksOnChange={createNewTask} />) :
          <EditBar
            tasksOnChange={updateTaskDescription}
            setEditBarVisbile={setEditBarVisbile}
            taskOnUpdate={taskOnUpdate}
          />
        }
        <Table
          tasks={tasks}
          statusOnChange={updateTaskStatus}
          removeOneTask={removeOneTask}
          sortAllTasks={sortAllTasks}
          setEditBarVisbile={setEditBarVisbile}
          setTaskOnUpdate={setTaskOnUpdate}
        />
      </Layout>
    </div>
  )
}