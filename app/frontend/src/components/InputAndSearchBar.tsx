import { useState } from "react";
import Task from "../core/Task";
import Button from "./Button"
import Input from "./Input"

interface InputAndSearchBarProps {
  tasksOnChange?: (inputText: string) => void
  tasks?: Task[]
  searchResultTasks?: (tasks: Task[]) => void
  setsearchedTasks?: ([]) => void
}

export default function InputAndSearchBar(props: InputAndSearchBarProps) {

  const [inputText, setinputText] = useState<string>('')
  const [onSearch, setonSearch] = useState<boolean>(false)

  function saveButtonAction(props: InputAndSearchBarProps) {
    props.tasksOnChange?.(inputText);
    setinputText('')
  }

  function searchButtonAction(props: InputAndSearchBarProps) {
    const searchResultTasks = props.tasks.filter(task => task.description.toLocaleLowerCase().includes(inputText))
    setinputText('')
    setonSearch(true)
    props.searchResultTasks(searchResultTasks);
  }

  function cancelSearchButtonAction(){
    setonSearch(false)
    props.setsearchedTasks([]);
  }

  return (
    <div className="flex w-full">
      <Input
        value={inputText}
        onChange={setinputText}
      ></Input>
      <Button
        onClick={() => saveButtonAction(props)}
      >Save</Button>
      {!onSearch ? (
        <Button
          onClick={() => searchButtonAction(props)}
        >Search</Button>
      ) : (
        <Button
          onClick={() => cancelSearchButtonAction()}
        >Cancel</Button>
      )}
    </div>
  )
}