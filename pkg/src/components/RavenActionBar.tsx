import React, { useState } from 'react'
import errorIcon from '../img/error-toast-icon.svg'
// import successIcon from "../img/toast-success-icon.svg";
import warningIcon from '../img/toast-warning-icon.svg'
import infoIcon from '../img/toast-info-icon.svg'

interface Props {
  msg: string
  actionText: string
  onCancel: any
  onAction: any
  visible: boolean
  type: string
  className: string
}
const RavenActionBar = ({ msg, actionText, onCancel, onAction, visible, type, className }: Props) => {
  const [translateUp, setTranslateUp] = useState(false)

  const handleOnCancel = () => {
    setTranslateUp(true)
    setTimeout(() => {
      onCancel()
      //   setTranslateUp(false);
    }, 500)
  }
  if (type === 'error') {
    return (
      <div className='action-bar-wrapper-box'>
        <div
          className={`action_bar mb-20 ${className} action_bar__error ${translateUp && 'action_bar__transform'} ${
            visible && 'action_bar_show'
          }`}
        >
          <figure className='img-box'>
            <img src={errorIcon} alt='' className='img' />
          </figure>
          <p className='text'>{msg}</p>
          <div
            onClick={() => {
              onAction && onAction()
            }}
            className='action-box'
          >
            <p className='text'>{actionText}</p>
            <div className='arrow-icon'>
              <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
              </svg>
            </div>
          </div>
          <div
            onClick={() => {
              onCancel && handleOnCancel()
            }}
            className='cancel'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
              <path d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z' />
            </svg>
          </div>
        </div>
      </div>
    )
  }
  if (type === 'warning') {
    return (
      <div className='action-bar-wrapper-box'>
        <div
          className={`action_bar mb-20 ${className} action_bar__warning ${translateUp && 'action_bar__transform'} ${
            visible && 'action_bar_show'
          }`}
        >
          <figure className='img-box'>
            <img src={warningIcon} alt='' className='img' />
          </figure>
          <p className='text'>{msg}</p>
          <div
            onClick={() => {
              onAction && onAction()
            }}
            className='action-box'
          >
            <p className='text'>{actionText}</p>
            <div className='arrow-icon'>
              <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
              </svg>
            </div>
          </div>
          <div
            onClick={() => {
              onCancel && handleOnCancel()
            }}
            className='cancel'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
              <path d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z' />
            </svg>
          </div>
        </div>
      </div>
    )
  }
  if (type === 'info') {
    return (
      <div className='action-bar-wrapper-box'>
        <div
          className={`action_bar mb-20 ${className} action_bar__info ${translateUp && 'action_bar__transform'} ${
            visible && 'action_bar_show'
          }`}
        >
          <figure className='img-box'>
            <img src={infoIcon} alt='' className='img' />
          </figure>
          <p className='text'>{msg}</p>
          <div
            onClick={() => {
              onAction && onAction()
            }}
            className='action-box'
          >
            <p className='text'>{actionText}</p>
            <div className='arrow-icon'>
              <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
              </svg>
            </div>
          </div>
          <div
            onClick={() => {
              onCancel && handleOnCancel()
            }}
            className='cancel'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
              <path d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z' />
            </svg>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='action-bar-wrapper-box'>
      <div
        className={`action_bar mb-20 ${className} action_bar__info ${translateUp && 'action_bar__transform'} ${
          visible && 'action_bar_show'
        }`}
      >
        <figure className='img-box'>
          <img src={infoIcon} alt='' className='img' />
        </figure>
        <p className='text'>{msg}</p>
        <div
          onClick={() => {
            onAction && onAction()
          }}
          className='action-box'
        >
          <p className='text'>{actionText}</p>
          <div className='arrow-icon'>
            <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
              <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
            </svg>
          </div>
        </div>
        <div
          onClick={() => {
            onCancel && handleOnCancel()
          }}
          className='cancel'
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
            <path d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z' />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default RavenActionBar
