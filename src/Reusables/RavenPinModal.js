import React, { useEffect } from 'react'
import RavenInputField from './RavenInputField'
import RavenModal from './RavenModal'

function RavenPinModal({
    onClose,
    visible,
    btnLabel,
    effect,
    btnColor,
    onBtnClick,
    disabled,
    pinColor,
    onComplete,
    onChange
    
}) {


  const [disabledBtn, setDisabled] = React.useState(true)
  const [pin, setPin] = React.useState('')
    
  React.useEffect(() => {
    setDisabled(pin.length > 5 ? false : true)

  }, [pin])
  
  return (
    <div className='raven_pin_modal_wrapper'>
        <RavenModal
        onClose={onClose}
        visble={visible}
        btnLabel={btnLabel ? (btnLabel) : 'Complete Transaction'}
        btnColor={btnColor}
        effect={effect}
        onBtnClick={onBtnClick}
        disabled = {disabled ? disabled : disabledBtn }
        >
        <div className="title">
          Complete Transaction
        </div>
        <p className="sub">
        Please kindly provide the 6-Digit OTP sent to the  email provided to verify account.
        </p>
        <div className="input">
        <RavenInputField
        type={`pin`}
        key={"resta"}
        onComplete={ (e) => {
          onComplete(e)
          }}
        onChange={e => setPin(e)}
        label={<>&nbsp;</>}
        color={pinColor}
      /> 
        </div>
        
      </RavenModal>
    </div>
  )
}

export default RavenPinModal