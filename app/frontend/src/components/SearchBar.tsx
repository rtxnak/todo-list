import { useState } from "react";
import Button from "./Button"
import Input from "./Input"

interface SearchBarProps {
  tasksOnChange?: (inputText: string) => void
}

export default function SearchBar(props: SearchBarProps) {

  const [inputText, setinputText] = useState('')

  return (
    <div className="flex w-full">
      <Input
        value={inputText}
        onChange={setinputText}
      ></Input>
      <Button
        onClick={() => props.tasksOnChange?.(inputText)}
      >Save</Button>
      <Button
      >Search</Button>
    </div>
  )
}