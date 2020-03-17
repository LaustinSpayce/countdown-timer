import React, { useState } from 'react'

export default function CountdownItem(props) {
  const [TaskName, setTaskName] = useState("Default Task")
  const [TaskEditing, setTaskEditing] = useState(false)

  function ChangeName(event) {
    setTaskEditing(true)
    console.log('clicky click')
  }

  function OnTextBoxChange(event) {
    setTaskName(event.target.value)
  }


  

  return (
    <div>
      <div onClick={(event) => {ChangeName(event)}}>Task: <input value={TaskName} onChange={OnTextBoxChange}/></div>
      <h3>Time left: XX:XX</h3>
    </div>
  )
}