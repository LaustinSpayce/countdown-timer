import React, { useState, useRef, useEffect } from 'react'
import CountDownTimer from './countdowntimer'

export default function CountdownItem(props) {
  const [taskName, settaskName] = useState("Default Task")
  const [taskEditing, settaskEditing] = useState(false)
  const inputRef = useRef(null)

  // Need to set the focus on the text box
  function ClickTask(event) {
    settaskEditing(true)
  }

  // Validate the text box, React controlled form
  function OnTextBoxChange(event) {
    settaskName(event.target.value)
  }


  // TODO: Don't allow an empty box!
  function onKeyPress(event) {
    const key = event.which || event.keyCode
    if (key === 13 ) { // Hit enter or return
      settaskEditing(false)
    }
  }

  // If you click away it'll commit the value
  function onTextEditorBlur(event) {
    settaskEditing(false)
  }

  // Check the task name is being edited or not, focus the input if it is
  useEffect(() => {
    if (taskEditing) {
      inputRef.current.select()
    }
  }, [taskEditing])

  const editor = <input className='text-center bg-gray-200 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none text-4xl' value={taskName} ref={inputRef} onChange={OnTextBoxChange} onKeyPress={onKeyPress} onBlur={onTextEditorBlur}/>
  const textDisplay = <p className='text-4xl py-2 px-4 leading-tight'>{taskName}</p>

  return (
    <div>
      <div onClick={(event) => {ClickTask(event)}}
      className='text-center'>{taskEditing ? editor : textDisplay}</div>
      <CountDownTimer />
    </div>
  )
}
