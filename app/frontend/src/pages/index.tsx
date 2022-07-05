import Layout from "../components/Layout"
import InputAndSearchBarProps from "../components/InputAndSearchBar"
import EditBar from "../components/EditBar"
import Table from "../components/Table"
import useTasks from "../hooks/useTasks"

export default function Home() {

  const {
    tasks,
    createNewTask,
    removeOneTask,
    sortAllTasks,
    editBarVisbile,
    setEditBarVisbile,
    taskOnUpdate,
    setTaskOnUpdate,
    searchResultTasks,
    searchedTasks,
    setsearchedTasks,
    updateTaskStatusAndDescription
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
            tasksOnChange={updateTaskStatusAndDescription}
            setEditBarVisbile={setEditBarVisbile}
            taskOnUpdate={taskOnUpdate}
          />
        }
        <Table
          tasks={searchedTasks.length < 1 ? tasks : searchedTasks}
          statusOnChange={updateTaskStatusAndDescription}
          removeOneTask={removeOneTask}
          sortAllTasks={sortAllTasks}
          setEditBarVisbile={setEditBarVisbile}
          setTaskOnUpdate={setTaskOnUpdate}
        />
      </Layout>
    </div>
  )
}