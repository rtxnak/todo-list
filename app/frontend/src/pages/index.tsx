import Layout from "../components/Layout"
import Table from "../components/Table"
import { TaskContextProvider } from "../hooks/taskContext"

export default function Home() {
  return (
    <div className={`
    flex justify-center items-start h-screen md:items-center
    bg-gradient-to-r from-lime-100 to-purple-300
    `}>
      <Layout title={"TO DO LIST"}>
        <TaskContextProvider>
          <Table />
        </TaskContextProvider>
      </Layout>
    </div>
  )
}