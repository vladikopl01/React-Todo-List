import React from "react"
import { useHistory } from "react-router-dom"

export const AboutPage: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>Information</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia
        deserunt ipsum nemo dolorem labore fugiat ea numquam voluptatibus eius?
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to Todo list
      </button>
    </>
  )
}
