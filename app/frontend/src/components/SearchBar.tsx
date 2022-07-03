import { useState } from "react";
import Button from "./Button"
import Input from "./Input"

interface SearchBarProps {
  tasksOnChange?: (inputText: string) => void
}

export default function SearchBar(props: SearchBarProps) {

  const [inputText, setinputText] = useState('')

  function saveButtonAction(props: SearchBarProps) {
    props.tasksOnChange?.(inputText);
    setinputText('')
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
      <Button
      >Search</Button>
    </div>
  )
}