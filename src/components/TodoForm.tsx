import React, { useState, useRef } from "react"

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>("")

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const ref = useRef<HTMLInputElement>(null)

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      // console.log(title)
      // setTitle("")
      props.onAdd(ref.current!.value)
      ref.current!.value = ""
    }
  }

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Name of task"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Name of task
      </label>
    </div>
  )
}
