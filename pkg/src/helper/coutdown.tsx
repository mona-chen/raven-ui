/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useState, useRef, useEffect } from 'react'

const Countdown: React.FC<any> = (props) => {
  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null)

  // The state for our timer
  const [timer, setTimer] = useState('00:00:00')

  const getTimeRemaining = (e: any) => {
    const total: any = Date.parse(e.toISOString()) - Date.parse(new Date().toISOString())
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / 1000 / 60 / 60) % 24)
    return {
      total,
      hours,
      minutes,
      seconds,
    }
  }

  const startTimer = (e: any) => {
    const { total, minutes, seconds } = getTimeRemaining(e)
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        // (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds),
      )
    }
  }

  const clearTimer = (e: any) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula below
    setTimer('00:05:00')

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current)
    const id: any = setInterval(() => {
      startTimer(e)
    }, 1000)
    Ref.current = id
  }

  const getDeadTime = () => {
    const deadline = new Date()

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + props.countdownTime ? props.countdownTime : 300)
    return deadline
  }

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime())
  }, [])

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  // const onClickReset = () => {
  //   clearTimer(getDeadTime())
  // }

  props.count ? props.count(timer) : ''

  // onClickReset(props.clearTimer)

  return <React.Fragment>{timer}</React.Fragment>
}

export default Countdown
