import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TaskContext } from '../../hooks/taskContext'
import Table from '../../components/Table'


const tasksMock = [{ id: 1, description: "first task", status: "pending", date: "02/02/2002" }, { id: 2, description: "second task", status: "ongoing", date: "02/02/1990" }, { id: 3, description: "third task", status: "done", date: "02/02/2020" }, { id: 4, description: "fourth task", status: "pending", date: "02/02/2010" }]

describe("todo list tests", () => {
  it("render a table with tasks", () => {
    render(
      <TaskContext.Provider
        value={{
          filteredTasks: tasksMock,
          tasksSort: {
            direction: "ascending",
            type: "date",
          },
        }}
      >
        <Table />
      </TaskContext.Provider>
    )
    // check if all tasks are rendered
    expect(screen.getByTestId("task-id-1")).toBeInTheDocument();
    expect(screen.getByTestId("task-id-2")).toBeInTheDocument();
    expect(screen.getByTestId("task-id-3")).toBeInTheDocument();
    expect(screen.getByTestId("task-id-4")).toBeInTheDocument();
    expect(screen.getAllByTestId("task").length).toBe(4);
    expect(screen.getByTestId("task-description-1")).toHaveTextContent('first task');
    expect(screen.getByTestId("task-status-1")).toHaveTextContent('pending');
    expect(screen.getByTestId("task-date-1")).toHaveTextContent('02/02/2002');
    // check if all actions buttons are rendered
    expect(screen.getByTestId("status-pending-buttons-on-task-1")).toBeInTheDocument();
    expect(screen.getByTestId("status-onGoing-buttons-on-task-2")).toBeInTheDocument();
    expect(screen.getByTestId("status-done-buttons-on-task-3")).toBeInTheDocument();
    expect(screen.getByTestId("status-pending-buttons-on-task-4")).toBeInTheDocument();
    expect(screen.getAllByTestId("edit-button").length).toBe(4);
    expect(screen.getAllByTestId("sort-button").length).toBe(3);
  });
});