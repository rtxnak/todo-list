import Layout from "../components/Layout"
import InputAndSearchBarProps from "../components/InputAndSearchBar"
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
    updateTaskDescription,
    searchResultTasks,
    searchedTasks,
    setsearchedTasks,
  } = useTasks();
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-lime-100 to-purple-300
      text-white
    `}>
      <Layout title={"TO DO LIST"}>
        {!editBarVisbile ?
          (<InputAndSearchBarProps
            tasksOnChange={createNewTask}
            tasks={tasks}
            searchResultTasks={searchResultTasks}
            setsearchedTasks={setsearchedTasks}
          />) :
          <EditBar
            tasksOnChange={updateTaskDescription}
            setEditBarVisbile={setEditBarVisbile}
            taskOnUpdate={taskOnUpdate}
          />
        }
        <Table
          tasks={searchedTasks.length < 1 ? tasks : searchedTasks}
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