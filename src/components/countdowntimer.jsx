import React, { useState, useEffect, useRef } from 'react'
import useInterval from './useinterval'

export default function CountDownTimer(props) {
  const [timeRemaining, setTimeRemaining] = useState(600)
  const [isTimeEditing, setIsTimeEditing] = useState(false)
  const [intervalTimer, setIntervalTimer] = useState(null)
  const [timeInputString, setTimeInputString] = useState("")
  const [isRunning, setIsRunning] = useState(true)
  const inputRef = useRef(null)

  useInterval(() => {
    setTimeRemaining(timeRemaining - 1)
  }, isRunning ? 1000 : null );

  let hours = Math.floor((timeRemaining / 60) / 60)
  let minutes = Math.floor((timeRemaining / 60) % 60)
  let seconds = timeRemaining % 60
  
  const editor = <input/>
  const timeDisplay = <div>{hours} : {minutes} : {seconds}</div>

  return (
    <div>
      {isTimeEditing ? editor : timeDisplay}
    </div>
  )
}