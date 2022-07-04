import Layout from "../components/Layout"
import InputAndSearchBarProps from "../components/InputAndSearchBar"
import Table from "../components/Table"
import useTasks from "../hooks/useTasks"

export default function Home() {

  const {
    tasks,
    createNewTask,
    updateTaskStatus,
    removeOneTask,
  } = useTasks();
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-lime-100 to-purple-300
      text-white
    `}>
      <Layout title={"TO DO LIST"}>
        <InputAndSearchBarProps tasksOnChange={createNewTask} />
        <Table
          tasks={tasks}
          statusOnChange={updateTaskStatus}
          removeOneTask={removeOneTask}
        />
      </Layout>
    </div>
  )
}