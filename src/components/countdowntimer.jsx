import React, { useState, useEffect, useRef } from 'react'
import useInterval from './useinterval'

export default function CountDownTimer(props) {
  const [timeRemaining, setTimeRemaining] = useState(600)
  const [isTimeEditing, setIsTimeEditing] = useState(false)
  const [timeInputString, setTimeInputString] = useState("")
  const [isRunning, setIsRunning] = useState(true)
  const inputRef = useRef(null)

  function ClickBox(event) {
    setIsTimeEditing(true)
    setIsRunning(false)
  }

  function ParseTimeInput(event) {
    setIsTimeEditing(false)
    setIsRunning(true)
    let parseTimeArray = timeInputString
    let secondsInput = parseTimeArray.slice(-2)
    let minutesInput = parseTimeArray.slice(-4, -2)
    let hoursInput = parseTimeArray.slice(0, -4)
    secondsInput = secondsInput ? parseInt(secondsInput) : 0
    minutesInput = minutesInput ? parseInt(minutesInput) * 60 : 0
    hoursInput = hoursInput ? parseInt(hoursInput) * 3600 : 0
    let secondsTotal = secondsInput + minutesInput + hoursInput
    console.log(secondsTotal)
    setTimeRemaining(secondsTotal)
  }

  function OnTimeBoxChange(event) {
    setTimeInputString(event.target.value)
  }

  function onTimeEditorBlur(event){
    ParseTimeInput()
  }

  function onKeyPress(event) {
    const key = event.which || event.keyCode
    if (key === 13 ) {
      ParseTimeInput()
    }
  }

  useInterval(() => {
    if(timeRemaining <= 0) {
      setIsRunning(false)
    } else {
      setTimeRemaining(timeRemaining - 1)
    }
  }, isRunning ? 1000 : null );

   // Check the task name is being edited or not, focus the input if it is
   useEffect(() => {
    if (isTimeEditing) {
      inputRef.current.select()
    }
  }, [isTimeEditing])

  let hours = Math.floor((timeRemaining / 60) / 60)
  let minutes = Math.floor((timeRemaining / 60) % 60)
  let seconds = timeRemaining % 60

  const editor = <input value={timeInputString} ref={inputRef} onChange={OnTimeBoxChange} onKeyPress={onKeyPress} onBlur={onTimeEditorBlur}/>

  const timeDisplay = <div onClick={ClickBox}>{hours} : {minutes} : {seconds}</div>

  return (
    <div>
      {isTimeEditing ? editor : timeDisplay}
    </div>
  )
}