import React, { useState } from 'react'
import Select from 'react-select'
import arrowRightImg from '../img/table-icon.svg'

const SmallTable = () => {
  const [selectValue, setSelectValue] = useState({
    label: 'amount',
    value: 'amount',
  })
  const reactSelectStyleTable = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      // backgroundColor: state.isSelected ? "#6F6F6F" : "white",
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
        // border: state.isFocused ? 0 : 0
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#0b8376' : 'white',
    }),
  }

  const optionTable = [
    { label: 'Date', value: 'date' },
    { label: 'Type', value: 'type' },
    { label: 'Value', value: 'value' },
    { label: 'Direction', value: 'Direction' },
    {
      label: 'Amount',
      value: 'amount',
    },
  ]

  const testList = [
    {
      name: 'timi test',
      bank: 'gtb',
      amount: '#120,920',
      date: '12/03/1995',
      type: 'debit',
      value: 'keke',
    },
    {
      name: 'tayo test',
      bank: 'zenith',
      amount: '#92,830',
      date: '12/03/1995',
      type: 'debit',
      value: 'keke',
    },
    {
      name: 'nonso test',
      bank: 'raven',
      amount: '#5,180',
      date: '12/03/1995',
      type: 'debit',
      value: 'keke',
    },
    {
      name: 'bolu test',
      bank: 'uba',
      amount: '#67,140',
      date: '12/03/1995',
      type: 'debit',
      value: 'keke',
    },
  ]

  const formatHeaderListOption = (list) => {
    const newList = list.filter((chi) => chi?.value !== selectValue?.value)
    return newList
  }

  return (
    <div className='mobile-table-wrap'>
      {/* header wrap start */}
      <div className='header-wrap'>
        <div className='title'>NARRATION</div>
        <div className='title'>
          <Select
            styles={reactSelectStyleTable}
            className='select-title'
            value={selectValue}
            options={formatHeaderListOption(optionTable)}
            onChange={(e) => {
              setSelectValue(e)
            }}
          />
        </div>
      </div>
      {/* header wrap end */}
      {/* mobile body start */}
      <div className='mobile-body'>
        {testList.map((chi, idx) => {
          const { name, amount, bank, date, type, value } = chi
          return (
            <div key={idx} className='table-row'>
              <div className='value'>
                <figure className='img-box'>
                  <img src={arrowRightImg} alt='' className='img' />
                </figure>
                <div className='text-box'>
                  {' '}
                  <p className='value-one'>{name}</p>
                  <p className='value-two'>{bank}</p>
                </div>
              </div>
              <div className='value'>
                <div className='text-box'>
                  {' '}
                  <p className='value-one '>{chi[`${selectValue.value}`]}</p>
                  <p className='value-two'></p>
                </div>
              </div>
            </div>
          )
        })}
        {/* row start */}

        {/* row-end */}
      </div>
      {/* mobile body end */}
    </div>
  )
}

export default SmallTable
