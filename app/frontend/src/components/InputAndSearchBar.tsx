import Task from "../core/Task";
import Button from "./Button"
import Input from "./Input"

interface InputAndSearchBarProps {
  tasksOnChange?: (inputText: string) => void
  tasks?: Task[]
  setonSearch?: (boolean: boolean) => void
  onSearch?: boolean
  setinputText?: (text: string) => void
  inputText?: string
}

export default function InputAndSearchBar(props: InputAndSearchBarProps) {
  function saveButtonAction(props: InputAndSearchBarProps) {
    props.tasksOnChange?.(props.inputText);
    props.setinputText('')
  }

  function searchButtonAction(props: InputAndSearchBarProps) {
    props.setinputText('')
    props.setonSearch(true)
  }

  function cancelSearchButtonAction() {
    props.setinputText('')
    props.setonSearch(false)
  }

  return (
    <div>
      <div>
        {props.onSearch ? (
          <label className="flex justify-center font-bold text-xl bg-purple-200 py-2 mx-2">
            {"Search Mode Activated"}
          </label>) : (
          <label className="flex justify-center font-bold text-xl bg-lime-200 py-2 mx-2">
            {"Create Mode Activated"}
          </label>
        )}
      </div>
      <div className="flex w-full">
        <Input
          value={props.inputText}
          onChange={props.setinputText}
        ></Input>
        <Button
          onClick={() => saveButtonAction(props)}
        >Save</Button>
        {!props.onSearch ? (
          <Button
            onClick={() => searchButtonAction(props)}
          >SearchON</Button>
        ) : (
          <Button
            onClick={() => cancelSearchButtonAction()}
          >SearchOFF</Button>
        )}
      </div>
    </div>
  )
}