import React, { useState } from 'react'
import Select from 'react-select'
import Flatpicker from 'react-flatpickr'
// import moment from "moment";
import calendarIcon from '../img/calendarcalendar-icon.svg'
import searchIcon from '../img/search.svg'
import flagIcon from '../img/NGflag-select.svg'
// import ReactPhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import { NumericFormat } from 'react-number-format'
import { PatternFormat } from 'react-number-format'
import ProgressBar from './ProgressBar'
import { ColorRing } from 'react-loader-spinner'
import ReactPinField from 'react-pin-field'
import { FileUploader } from 'react-drag-drop-files'
import Countdown from '../helper/coutdown'
import { useEffect } from 'react'

interface Props {
  color?: any
  value?: any
  name?: string
  id?: any
  className?: any
  style?: any
  label?: any
  type?: any
  onChange?: any
  placeholder?: string
  errorText?: string
  showError?: boolean
  selectOption?: any
  selectStyles?: any
  selectValue?: any
  disabled?: boolean
  loading?: boolean
  searchable?: boolean
  multi?: boolean
  selectClassName?: any
  textareaColumn?: any
  textareaRow?: any
  numberPrefix?: any
  labelClassName?: any
  showColor?: boolean
  onActionClick?: any
  labelColor?: any
  labelSpanText?: string
  showPasswordStrength?: string
  onSubmit?: any
  onComplete?: any
  pinFieldNumber?: number
  countDownTime?: any
  onCountDownComplete?: any
  key?: any
  showCountDown?: boolean
  textColor?: any
  thousandFormat?: boolean
  onSizeError?: any
  maxSize?: any
  onRemoveFile?: any
  enableTime?: boolean
  selectMenuOpen?: any
  min?: number | undefined
  max?: number | undefined
  showValue?: boolean
  menuPlacement?: string
}

const reactSelectStyleTable = {
  control: (base: any, state: any) => ({
    ...base,
    border: state.isFocused ? '0.1rem solid #6F6F6F' : '0.1rem solid #6F6F6F',
    // backgroundColor: state.isSelected ? "#6F6F6F" : "white",
    boxShadow: state.isFocused ? '0.1rem solid #6F6F6F' : 0,
    '&:hover': {
      // border: state.isFocused ? 0 : 0
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#0b8376' : 'white',
  }),
}

const RavenInputField: React.FC<Props> = ({
  textColor,
  labelClassName,
  labelColor,
  labelSpanText,
  color,
  value,
  name,
  id,
  className,
  style,
  label,
  type,
  onChange,
  placeholder,
  errorText,
  showError,
  selectOption,
  selectStyles,
  selectValue,
  disabled,
  loading,
  searchable,
  multi,
  selectClassName,
  textareaColumn,
  textareaRow,
  numberPrefix,
  showColor,
  onActionClick,
  showPasswordStrength,
  onSubmit,
  onComplete,
  pinFieldNumber,
  countDownTime,
  showCountDown,
  thousandFormat,
  onSizeError,
  maxSize,
  onRemoveFile,
  enableTime,
  selectMenuOpen,
  showValue,
  min,
  max,
  menuPlacement,
}) => {
  const [showPasword, setShowPassword] = useState(false)
  const [completePin, setCompletePin] = useState(false)
  const [file, setFile] = useState<any>('')
  require(`flatpickr/dist/themes/${color?.split('-')[1] === 'dark' ? 'dark' : 'airbnb'}.css`)

  const [range, setRange] = useState(0)
  console.log(range)
  const handleRangeChange = (event: any) => {
    setRange(event.target.value)
    onChange(event)
  }

  function rangeStyle() {
    const styledRanges = document.getElementsByClassName('styled_range')
    for (let i = 0; i < styledRanges.length; i++) {
      let thumbRange: any = null,
        trackRange: any = null
      for (let j = 0; j < styledRanges[i].children.length; j++) {
        const child = styledRanges[i].children[j]
        if (child.className === 'thumb_range') thumbRange = child
        else if (child.className === 'track_range') trackRange = child
      }
      thumbRange.oninput = (function (thumbRange, trackRange) {
        return function () {
          trackRange.value = thumbRange.value
        }
      })(thumbRange, trackRange)
    }
  }

  useEffect(() => {
    rangeStyle()
  }, [range])

  const [validate, setValidate] = useState({
    hasLow: 0,
    hasCap: 0,
    hasNumber: 0,
    has8digit: 0,
    hasSpecial: 0,
  })

  const validatePassword = (password: any) => {
    if (password.match(/\d+/g)) {
      setValidate((o) => ({ ...o, hasNumber: 20 }))
    } else {
      setValidate((o) => ({ ...o, hasNumber: 0 }))
    }
    if (password.match(/[!@#$%^.&*_=+-]/g)) {
      setValidate((o) => ({ ...o, hasSpecial: 20 }))
    } else {
      setValidate((o) => ({ ...o, hasSpecial: 0 }))
    }

    if (password.match(/[A-Z]+/g)) {
      setValidate((o) => ({ ...o, hasCap: 20 }))
    } else {
      setValidate((o) => ({ ...o, hasCap: 0 }))
    }

    if (password.match(/[a-z]+/g)) {
      setValidate((o) => ({ ...o, hasLow: 20 }))
    } else {
      setValidate((o) => ({ ...o, hasLow: 0 }))
    }

    if (password.length > 7) {
      setValidate((o) => ({ ...o, has8digit: 20 }))
    } else {
      setValidate((o) => ({ ...o, has8digit: 0 }))
    }
  }

  function sumValue(a: any, b: any, c: any, d: any, e: any) {
    const sum = a + b + c + d + e
    return sum
  }
  const [timeOut, setTimeOut] = useState(false)
  if (type === 'upload') {
    return (
      <div className={`form-group form-group__${color} ${className}`}>
        {label && (
          <label htmlFor='' className='form-label'>
            {label}{' '}
            {labelSpanText && (
              <span onClick={onActionClick} className={`label-span text-${labelColor} ${labelClassName}`}>
                {labelSpanText}
              </span>
            )}
          </label>
        )}
        {!file && (
          <div className={`input-group upload-group ${file && 'upload-group-show'}`}>
            <FileUploader
              handleChange={(e: any) => {
                console.log(e)
                setFile(e)
                onChange && onChange(e)
              }}
              value={value || file}
              name='file'
              disabled={disabled}
              hoverTitle={'drop here'}
              onSizeError={onSizeError}
              maxSize={maxSize}

              // types={fileTypes}
            >
              <p className='upload-text'>
                <span className={labelColor ? `text-${labelColor}` : `text-purple-light`}>Click to upload</span> or drag
                and <br /> drop image file here
              </p>
            </FileUploader>
          </div>
        )}
        {/* {file && ( */}
        <div className={`display-wrap ${file && 'display-wrap-show'}`}>
          <div className='display-box'>
            <figure className='img-box'>
              <img src={file && URL.createObjectURL(file)} alt='' className='img' />
            </figure>
            <div className='text-box'>
              <p className='name'>{file?.name}</p>
              <p className='size'>{`${file?.size} kb`}</p>
            </div>
            <div
              onClick={() => {
                setFile('')
                onRemoveFile && onRemoveFile()
              }}
              className='cancel-box'
            >
              <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 352 512'>
                <path d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z' />
              </svg>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    )
  }

  if (type === 'submit') {
    return (
      <div className={`form-group form-group__${color} ${className}`}>
        {label && (
          <label htmlFor='' className='form-label'>
            {label}{' '}
            {labelSpanText && (
              <span onClick={onActionClick} className={`label-span text-${labelColor} ${labelClassName}`}>
                {labelSpanText}
              </span>
            )}
          </label>
        )}
        {loading ? (
          <div
            className={`input-submit input-submit-loading  text-${textColor} ${disabled && 'input-submit_disabled'}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '.5rem',
              padding: '.5rem 0rem',
            }}
          >
            {' '}
            Loading...
            <div
              className='loader-wrap'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ColorRing
                visible={true}
                height={'35'}
                width={'35'}
                ariaLabel='blocks-loading'
                wrapperClass='blocks-wrapper'
                colors={['#ffffff99', '#ffffff99', '#ffffff99', '#ffffff99', '#ffffff99']}
              />
            </div>
          </div>
        ) : (
          <input
            type='submit'
            value={value}
            onClick={onSubmit}
            className={`input-submit  text-${textColor} ${disabled && 'input-submit_disabled'}`}
            disabled={disabled}
          />
        )}
      </div>
    )
  }

  if (type === 'pin') {
    return (
      <div style={style} className={`form-group form-group__${color ? color : 'black-light'} ${className}`}>
        {label && (
          <label htmlFor='' className='form-label'>
            {label}{' '}
            {labelSpanText && (
              <span onClick={onActionClick} className={`label-span text-${labelColor} ${labelClassName}`}>
                {labelSpanText}
              </span>
            )}
          </label>
        )}
        {/* pin group start */}
        <div className={`pin-group pin-group_${color}`}>
          <div style={{ gridTemplateColumns: `repeat(${pinFieldNumber}, 1fr)` }} className={`pin_field_group`}>
            <ReactPinField
              type={`password`}
              length={pinFieldNumber || 6}
              className={`${`pin_field pin_field_${color}`} ${completePin && 'pin_field_completed'}`}
              onChange={(num) => {
                setCompletePin(false)
                onChange && onChange(num)
              }}
              onComplete={(num) => {
                onComplete && onComplete(num)
                setCompletePin(true)
              }}
              format={(k) => k.toUpperCase()}
              //  disabled={showTime}
              validate='0123456789'
              autoFocus
              // ref={ref}
            />
          </div>
          {/* count down start */}
          {showCountDown && (
            <div className='count-down-box'>
              <p className='text'>{timeOut ? 'Time out' : 'Code expires in'}</p>

              <p className='count'>
                <Countdown count={(e: any) => setTimeOut(e === '00:00' ? true : false)} countDownTime={countDownTime} />
              </p>
            </div>
          )}

          {/* count down end */}
        </div>
        {/* pin group end */}
      </div>
    )
  }

  if (type === 'phone') {
    return (
      <div style={style} className={`form-group form-group__${color} ${className}`}>
        {label && (
          <label htmlFor='' className='form-label'>
            {label}{' '}
            {labelSpanText && (
              <span onClick={onActionClick} className={`label-span text-${labelColor} ${labelClassName}`}>
                {labelSpanText}
              </span>
            )}
          </label>
        )}
        <div className={`input-group input-group__${color} input-group__phone`}>
          <div className={`phone-wrap ${showError && 'border-error'}`}>
            <figure className='img-box '>
              <img src={flagIcon} alt='' className='img' />
            </figure>
            <span>+234</span>
            <svg className='down-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
              <path d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z' />
            </svg>
          </div>
          <PatternFormat
            type='text'
            className={`form-input form-input_search form-input_${color}`}
            id={id}
            onChange={onChange}
            value={value}
            name={name}
            placeholder={placeholder || 'Placeholder Here'}
            format='### ### ### ##'
          />
          <div className='focus-border'></div>
        </div>
        {showError && <p className='error-text'>{errorText}</p>}
      </div>
    )
  }

  if (type === 'textarea') {
    return (
      <div className={`form-group form-group__${color} ${className}`}>
        {label && (
          <label htmlFor='' className='form-label'>
            {label}{' '}
            {labelSpanText && (
              <span onClick={onActionClick} className={`label-span text-${labelColor} ${labelClassName}`}>
                {labelSpanText}
              </span>
            )}
          </label>
        )}
        {/* <div className="input-group"> */}
        <textarea
          cols={textareaColumn || '30'}
          rows={textareaRow || '5'}
          style={{ resize: 'unset' }}
          id={id}
          onChange={onChange}
          value={value}
          name={name}
          placeholder={placeholder || 'Placeholder Here'}
          className={`form-input ${showError && 'border-error'}`}
        ></textarea>
        {/* </div> */}
        {showError && <p className='error-text'>{errorText}</p>}
      </div>
    )
  }

  if (type === 'search') {
    return (
      <div className={`form-group form-group__${color} ${className}`}>
        {label && (
          <label htmlFor='' className='form-label'>
            {label}{' '}
            {labelSpanText && (
              <span onClick={onActionClick} className={`label-span text-${labelColor} ${labelClassName}`}>
                {labelSpanText}
              </span>
            )}
          </label>
        )}
        <div className={`input-group input-group__${color} input-group__search ${showError && 'border-error'}`}>
          <div className='seach-box'>
            {' '}
            <figure className='img-box '>
              <img src={searchIcon} alt='' className='img' />
            </figure>
          </div>

          <input
            type='text'
            className='form-input form-input_search'
            id={id}
            onChange={onChange}
            value={value}
            name={name}
            placeholder={placeholder || 'Placeholder Here'}
          />
          <div className='focus-border'></div>
        </div>
        {showError && <p className='error-text'>{errorText}</p>}
      </div>
    )
  }
  if (type === 'date') {
    return (
      <div style={style} className={`form-group form-group__${color} ${className}`}>
        {label && (
          <label htmlFor='' className='form-label'>
            {label}{' '}
            {labelSpanText && (
              <span onClick={onActionClick} className={`label-span text-${labelColor} ${labelClassName}`}>
                {labelSpanText}
              </span>
            )}
          </label>
        )}
        <div className={`wrap ${showError && 'border-error'}`}>
          <Flatpicker
            id={id || `cal-${label}`}
            options={{ enableTime: enableTime ? true : false }}
            value={value}
            onChange={(date) => {
              onChange(date)
            }}
            name={name}
            className={`form-input input-calender input-calendar-${color}`}
            autoComplete='off'
            placeholder={placeholder || 'Placeholder Here'}
          />
          <label className='label-calendar' htmlFor={id || `cal-${label}`}>
            <figure className='img-box'>
              <img src={calendarIcon} alt='' className='img' />
            </figure>
          </label>
        </div>
        {showError && <p className='error-text'>{errorText}</p>}
      </div>
    )
  }
  if (type === 'select') {
    return (
      <div style={style} className={`form-group form-group__${color} ${className}`}>
        {label && (
          <label htmlFor='' className='form-label'>
            {label}{' '}
            {labelSpanText && (
              <span onClick={onActionClick} className={`label-span text-${labelColor} ${labelClassName}`}>
                {labelSpanText}
              </span>
            )}
          </label>
        )}
        <Select
          placeholder={placeholder || 'Placeholder Here'}
          styles={selectStyles || reactSelectStyleTable}
          menuIsOpen={selectMenuOpen}
          options={selectOption}
          value={value}
          onChange={(e) => onChange && onChange(e)}
          className={`react-select-class ${selectValue && 'react-select-class-selected'}  ${
            value && 'react-select-class-selected'
          } ${selectClassName} ${showError && 'border-error'}`}
          isDisabled={disabled}
          isLoading={loading}
          isSearchable={searchable}
          isMulti={multi}
          menuPlacement={menuPlacement || `bottom`}
        />
        {showError && <p className='error-text'>{errorText}</p>}
      </div>
    )
  }
  if (type === 'number') {
    return (
      <div className={`form-group form-group__${color} ${className}`} style={style}>
        {label && (
          <label htmlFor={id} className='form-label'>
            {label}{' '}
            {labelSpanText && (
              <span onClick={onActionClick} className={`label-span text-${labelColor} ${labelClassName}`}>
                {labelSpanText}
              </span>
            )}
          </label>
        )}
        {/* <div className="input-group"> */}
        <NumericFormat
          className={`form-input ${showError && 'border-error'}`}
          decimalScale={3}
          decimalSeparator='.'
          disabled={disabled}
          type='text'
          thousandsGroupStyle={thousandFormat ? 'lakh' : undefined}
          allowNegative
          prefix={numberPrefix}
          thousandSeparator={thousandFormat && ','}
          placeholder={placeholder || 'Placeholder Here'}
          id={id}
          onChange={onChange}
          value={value}
          name={name}
        />
        {showError && <p className='error-text'>{errorText}</p>}
      </div>
    )
  }
  if (type === 'password') {
    return (
      <div style={style} className={`form-group form-group__${color} form-group_password`}>
        {label && (
          <label htmlFor='' className='form-label'>
            {label}{' '}
            {labelSpanText && (
              <span onClick={onActionClick} className={`label-span text-${labelColor} ${labelClassName}`}>
                {labelSpanText}
              </span>
            )}
          </label>
        )}
        <div className={`input-group input-group__${color} ${showError && 'border-error'}`}>
          <input
            disabled={disabled}
            type={showPasword ? 'text' : 'password'}
            placeholder={placeholder || 'Placeholder Here'}
            className={`form-input`}
            id={id}
            onChange={(e) => {
              validatePassword(e.target.value)
              onChange && onChange(e)
            }}
            value={value}
            name={name}
          />
          <div className='focus-border'></div>
          <p
            className={`show-hide show-hide_${showColor} text-${showColor}`}
            onClick={() => setShowPassword(!showPasword)}
          >
            {showPasword ? 'Hide' : 'Show'}
          </p>
        </div>
        {showError && <p className='error-text'>{errorText}</p>}
        {/* password strength box start */}
        {showPasswordStrength && (
          <div className='progress-text-box'>
            <div className='progress-box'>
              <ProgressBar
                completed={
                  sumValue(
                    validate?.has8digit,
                    validate?.hasCap,
                    validate?.hasLow,
                    validate?.hasNumber,
                    validate?.hasSpecial,
                  ) < 20
                    ? 0
                    : sumValue(
                        validate?.has8digit,
                        validate?.hasCap,
                        validate?.hasLow,
                        validate?.hasNumber,
                        validate?.hasSpecial,
                      ) < 40
                    ? 50
                    : 100
                }
                bgcolor={
                  sumValue(
                    validate?.has8digit,
                    validate?.hasCap,
                    validate?.hasLow,
                    validate?.hasNumber,
                    validate?.hasSpecial,
                  ) < 20
                    ? ''
                    : sumValue(
                        validate?.has8digit,
                        validate?.hasCap,
                        validate?.hasLow,
                        validate?.hasNumber,
                        validate?.hasSpecial,
                      ) >= 20 &&
                      sumValue(
                        validate?.has8digit,
                        validate?.hasCap,
                        validate?.hasLow,
                        validate?.hasNumber,
                        validate?.hasSpecial,
                      ) <= 40
                    ? '#FF0F00'
                    : sumValue(
                        validate?.has8digit,
                        validate?.hasCap,
                        validate?.hasLow,
                        validate?.hasNumber,
                        validate?.hasSpecial,
                      ) > 40 &&
                      sumValue(
                        validate?.has8digit,
                        validate?.hasCap,
                        validate?.hasLow,
                        validate?.hasNumber,
                        validate?.hasSpecial,
                      ) <= 80
                    ? '#EA872D'
                    : sumValue(
                        validate?.has8digit,
                        validate?.hasCap,
                        validate?.hasLow,
                        validate?.hasNumber,
                        validate?.hasSpecial,
                      ) === 100
                    ? '#1ACE37'
                    : ''
                }
              />
              <ProgressBar
                completed={
                  sumValue(
                    validate?.has8digit,
                    validate?.hasCap,
                    validate?.hasLow,
                    validate?.hasNumber,
                    validate?.hasSpecial,
                  ) < 40
                    ? 0
                    : sumValue(
                        validate?.has8digit,
                        validate?.hasCap,
                        validate?.hasLow,
                        validate?.hasNumber,
                        validate?.hasSpecial,
                      ) > 40 &&
                      sumValue(
                        validate?.has8digit,
                        validate?.hasCap,
                        validate?.hasLow,
                        validate?.hasNumber,
                        validate?.hasSpecial,
                      ) <= 60
                    ? 50
                    : 100
                }
                bgcolor={
                  sumValue(
                    validate?.has8digit,
                    validate?.hasCap,
                    validate?.hasLow,
                    validate?.hasNumber,
                    validate?.hasSpecial,
                  ) <= 40
                    ? ''
                    : sumValue(
                        validate?.has8digit,
                        validate?.hasCap,
                        validate?.hasLow,
                        validate?.hasNumber,
                        validate?.hasSpecial,
                      ) > 40 &&
                      sumValue(
                        validate?.has8digit,
                        validate?.hasCap,
                        validate?.hasLow,
                        validate?.hasNumber,
                        validate?.hasSpecial,
                      ) <= 80
                    ? '#EA872D'
                    : sumValue(
                        validate?.has8digit,
                        validate?.hasCap,
                        validate?.hasLow,
                        validate?.hasNumber,
                        validate?.hasSpecial,
                      ) === 100
                    ? '#1ACE37'
                    : ''
                }
              />
              <ProgressBar
                completed={
                  sumValue(
                    validate?.has8digit,
                    validate?.hasCap,
                    validate?.hasLow,
                    validate?.hasNumber,
                    validate?.hasSpecial,
                  ) < 100
                    ? 0
                    : 100
                }
                bgcolor={
                  sumValue(
                    validate?.has8digit,
                    validate?.hasCap,
                    validate?.hasLow,
                    validate?.hasNumber,
                    validate?.hasSpecial,
                  ) < 100
                    ? ''
                    : '#1ACE37'
                }
              />
            </div>
            <p className='text'>Password Strength</p>
          </div>
        )}
        {/* password strength box end */}
      </div>
    )
  }

  if (type === 'range') {
    return (
      <div className={`form-group form-group__${color} slider-contain ${className}`} style={style}>
        {label && (
          <label htmlFor={id} className={'form-label range-label'}>
            {label}{' '}
            {showValue && (
              <span
                style={{ fontWeight: 700, fontSize: '1.4rem' }}
                onClick={onActionClick}
                className={`label-span  text-${labelColor} ${labelClassName}`}
              >
                {range}
              </span>
            )}
          </label>
        )}
        {/* <div className="input-group"> */}

        <div className='styled_range'>
          <input
            type='range'
            disabled={disabled}
            placeholder={placeholder || 'Placeholder Here'}
            className={'track_range'}
            min={min ? min : 0}
            max={max ? max : 100}
            id={id}
            value={range}
          />
          <input
            type='range'
            min={min ? min : 0}
            max={max ? max : 100}
            id={id}
            value={range}
            onChange={handleRangeChange}
            className='thumb_range'
          />
        </div>
        {/* </div> */}
        {showError && <p className='error-text'>{errorText}</p>}
      </div>
    )
  }
  return (
    <div className={`form-group form-group__${color} ${className}`} style={style}>
      {label && (
        <label htmlFor={id} className='form-label'>
          {label}{' '}
          {labelSpanText && (
            <span onClick={onActionClick} className={`label-span text-${labelColor} ${labelClassName}`}>
              {labelSpanText}
            </span>
          )}
        </label>
      )}
      {/* <div className="input-group"> */}
      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder || 'Placeholder Here'}
        className={`form-input ${showError && 'border-error'}`}
        id={id}
        onChange={onChange}
        value={value}
        name={name}
      />
      {/* </div> */}
      {showError && <p className='error-text'>{errorText}</p>}
    </div>
  )
}

export default RavenInputField
