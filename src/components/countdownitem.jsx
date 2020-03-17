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

  function onKeyPress(event) {
    const key = event.which || event.keyCode
    if (key === 13 ) {
      setTaskEditing(false)
    }
  }

  function onTextEditorBlur(event) {
    setTaskEditing(false)
  }

  let editor = <input value={TaskName} onChange={OnTextBoxChange} onKeyPress={onKeyPress} onBlur={onTextEditorBlur}/>
  let textDisplay = <p>{TaskName}</p>

  return (
    <div>
      <div onClick={(event) => {ChangeName(event)}}>{TaskEditing ? editor : textDisplay}</div>
      <h3>Time left: XX:XX</h3>
    </div>
  )
}