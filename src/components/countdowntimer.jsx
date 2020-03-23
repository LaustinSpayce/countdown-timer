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
    setTimeRemaining(secondsTotal)
  }

  function OnTimeBoxChange(event) {
    if (event.target.value >= 0 && event.target.value.length < 7) {
      setTimeInputString(event.target.value)
    }
  }

  // If you click away it commits
  function onTimeEditorBlur(event){
    ParseTimeInput(event)
  }

  function onKeyPress(event) {
    const key = event.which || event.keyCode
    if (key === 13 ) {
      ParseTimeInput(event)
    }
  }

  function soundAlarm() {
    console.log('times is up!')
  }

  useInterval(() => {
    if(timeRemaining <= 1) {
      setIsRunning(false)
      setTimeRemaining(0)
      soundAlarm()
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

  let hours = ((Math.floor((timeRemaining / 60) / 60))).toString().padStart(2, '0')
  let minutes = ((Math.floor((timeRemaining / 60) % 60))).toString().padStart(2, '0')
  let seconds = (timeRemaining % 60).toString().padStart(2, '0')

  const editor = <div><input className='text-6xl m-12 w-auto' value={timeInputString} type="number" ref={inputRef} onChange={OnTimeBoxChange} onKeyPress={onKeyPress} onBlur={onTimeEditorBlur}/></div>

  const timeDisplay = <div className='text-6xl' onClick={ClickBox}>{hours} : {minutes} : {seconds}</div>

  return (
    <div className='text-center'>
      {isTimeEditing ? editor : timeDisplay}
    </div>
  )
}