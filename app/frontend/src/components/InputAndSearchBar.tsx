import { useState } from "react";
import Button from "./Button"
import Input from "./Input"

interface InputAndSearchBarProps {
  tasksOnChange?: (inputText: string) => void
}

export default function InputAndSearchBar(props: InputAndSearchBarProps) {

  const [inputText, setinputText] = useState('')

  function saveButtonAction(props: InputAndSearchBarProps) {
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