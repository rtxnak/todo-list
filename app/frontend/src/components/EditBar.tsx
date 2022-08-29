import { useState } from "react";
import Task from "../core/Task";
import Button from "./Button"
import Input from "./Input"

interface EditBarProps {
  tasksOnChange?: (task: Task, inputText: string, type: string) => void
  setEditBarVisbile?: (value: boolean) => void
  taskOnUpdate: Task;
}

export default function EditBar(props: EditBarProps) {

  const [inputText, setinputText] = useState('')

  function updateButtonAction(props: EditBarProps) {
    const task = props.taskOnUpdate
    props.tasksOnChange?.(task, inputText,'description');
    props.setEditBarVisbile?.(false)
    setinputText('')
  }

  return (
    <div >
      <div>
        <label className="flex justify-center font-bold text-xl bg-amber-200 py-2 mx-2">
          {`Edit mode Activated - Task: ${props.taskOnUpdate.description}`}
        </label>
      </div>
      <div className="flex w-full">
        <Input
          value={inputText}
          onChange={setinputText}
        ></Input>
        <Button
          onClick={() => updateButtonAction(props)}
        >Update</Button>
      </div>
    </div>
  )
}