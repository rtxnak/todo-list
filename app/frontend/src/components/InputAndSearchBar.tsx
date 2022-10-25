import { useContext } from 'react';
import { TaskContext } from '../hooks/taskContext';
import Button from "./Button"
import Input from "./Input"

export default function InputAndSearchBar() {

  const { createNewTask, setonSearch, onSearch, inputText, setinputText } = useContext(TaskContext)

  function saveButtonAction() {
    createNewTask?.(inputText);
    setinputText('')
  }

  function searchButtonAction() {
    setinputText('')
    setonSearch(true)
  }

  function cancelSearchButtonAction() {
    setinputText('')
    setonSearch(false)
  }

  return (
    <div
      data-testid="inputAndSearchBar"
    >
      <div>
        {onSearch ? (
          <label className="flex justify-center font-bold text-xl bg-purple-200 md:py-2 md:mx-2">
            {"Search Mode Activated"}
          </label>) : (
          <label className="flex justify-center font-bold text-xl bg-lime-200 md:py-2 md:mx-2">
            {"Create Mode Activated"}
          </label>
        )}
      </div>
      <div className="flex w-full">
        <Input
          value={inputText}
          onChange={setinputText}
        ></Input>
        <Button
          onClick={() => saveButtonAction()}
        >Save</Button>
        {!onSearch ? (
          <Button
            onClick={() => searchButtonAction()}
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