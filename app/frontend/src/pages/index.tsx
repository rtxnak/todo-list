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
    editBarVisbile,
    setEditBarVisbile,
    taskOnUpdate,
    setTaskOnUpdate,
    updateTaskStatusAndDescription,
    onSearch,
    setonSearch,
    inputText,
    setinputText,
    tasksSort,
    setTaskSort,
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
            setonSearch={setonSearch}
            onSearch={onSearch}
            inputText={inputText}
            setinputText={setinputText}
          />) :
          <EditBar
            tasksOnChange={updateTaskStatusAndDescription}
            setEditBarVisbile={setEditBarVisbile}
            taskOnUpdate={taskOnUpdate}
          />
        }
        <Table
          tasks={tasks}
          statusOnChange={updateTaskStatusAndDescription}
          removeOneTask={removeOneTask}
          tasksSort={tasksSort}
          setTaskSort={setTaskSort}
          setEditBarVisbile={setEditBarVisbile}
          setTaskOnUpdate={setTaskOnUpdate}
        />
      </Layout>
    </div>
  )
}