import { useState, useContext } from "react";
import { TaskContext } from '../hooks/taskContext';
import Button from "./Button"
import Input from "./Input"

export default function EditBar() {

  const { updateTaskStatusAndDescription, setEditBarVisbile, taskOnUpdate } = useContext(TaskContext)

  const [inputText, setinputText] = useState(taskOnUpdate.description)

  function updateButtonAction() {
    const task = taskOnUpdate
    updateTaskStatusAndDescription(task, inputText, 'description');
    setEditBarVisbile(false)
    setinputText('')
  }

  return (
    <div >
      <div>
        <label className="flex justify-center font-bold text-md md:text-xl bg-amber-200 py-2 md:mx-2">
          {`Edit mode Activated - Task: ${taskOnUpdate.description}`}
        </label>
      </div>
      <div className="flex w-full">
        <Input
          value={inputText}
          onChange={setinputText}
        ></Input>
        <Button
          onClick={() => updateButtonAction()}
        >Update</Button>
      </div>
    </div>
  )
}