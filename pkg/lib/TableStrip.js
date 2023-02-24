import React from 'react'
import tableImg from '../img/table-icon.svg'
import editIcon from '../img/edit-icon.svg'
import actionIcon from '../img/action-icon.svg'

const TableStrip = () => {
  return (
    <>
      {/* table start */}
      <table className='table table_strip'>
        {/* table head start */}
        <thead className='table-head'>
          <tr>
            <th>NARRATION</th>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>TRANSACTION DATE</th>
            <th>ACTION(S)</th>
          </tr>
        </thead>
        {/* table head end */}
        {/* table body start */}
        <tbody className='table-body'>
          <tr className='table-row'>
            <td className='table-data'>
              <div className='img-text'>
                <figure className='img-box'>
                  <img src={tableImg} alt='' className='img' />
                </figure>
                <span>Olakunle Olutayo — GTBank</span>
              </div>
            </td>
            <td className='table-data'>Money Received</td>
            <td className='table-data'>₦12,000,000.00</td>
            <td className='table-data'>5 Sept, 2022 - 5:48PM</td>
            <td className='table-data'>
              {' '}
              <div className='action-box'>
                {' '}
                <figure className='img-box'>
                  <img src={editIcon} alt='' className='img' />
                </figure>
                <figure className='img-box'>
                  <img src={actionIcon} alt='' className='img' />
                </figure>
              </div>
            </td>
          </tr>
          <tr className='table-row'>
            <td className='table-data'>
              {' '}
              <div className='img-text'>
                <figure className='img-box'>
                  <img src={tableImg} alt='' className='img' />
                </figure>
                <span>Olakunle Olutayo — GTBank</span>
              </div>
            </td>
            <td className='table-data'>Money Received</td>
            <td className='table-data'>₦12,000,000.00</td>
            <td className='table-data'>5 Sept, 2022 - 5:48PM</td>
            <td className='table-data'>
              <div className='action-box'>
                {' '}
                <figure className='img-box'>
                  <img src={editIcon} alt='' className='img' />
                </figure>
                <figure className='img-box'>
                  <img src={actionIcon} alt='' className='img' />
                </figure>
              </div>
            </td>
          </tr>
        </tbody>
        {/* table body end */}
      </table>
      {/* table end */}
    </>
  )
}

export default TableStrip
