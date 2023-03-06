import React, { useContext, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import editIcon from '../img/edit-icon.svg'
import actionIcon from '../img/action-icon.svg'
import RavenDropDown from './RavenDropDown'
import TableContext from '../context/TableContext'
require('react-loading-skeleton/dist/skeleton.css')

interface Props {
  one?: any
  oneObj?: any
  two?: any
  twoObj?: any
  three?: any
  threeObj?: any
  four?: any
  five?: any
  six?: any
  seven?: any
  eight?: any
  nine?: any
  ten?: any
  eleven?: any
  twelve?: any
  loading?: any
  onRowClick?: any
  action?: any
  onEdit?: any
  dontShowEdit?: any
  dontShowAction?: any
  rowNo?: any
  editText?: any
  deleteText?: any
  downloadText?: any
  onDelete?: any
  onDownload?: any
  className?: any
  imgActionOne?: any
  imgActionTwo?: any
  imgActionThree?: any
  imgActionFour?: any
  onClickActionOne?: any
  onClickActionTwo?: any
  onClickActionThree?: any
  onClickActionFour?: any
  actionDropAuto: any
}

const RavenTableRow: React.FC<Props> = ({
  one,
  oneObj,
  two,
  twoObj,
  three,
  threeObj,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  loading,
  onRowClick,
  action,
  onEdit,
  dontShowEdit,
  dontShowAction,
  rowNo,
  editText,
  deleteText,
  downloadText,
  onDelete,
  onDownload,
  imgActionOne,
  imgActionTwo,
  imgActionThree,
  imgActionFour,
  onClickActionOne,
  onClickActionTwo,
  onClickActionThree,
  onClickActionFour,
  actionDropAuto,
  className,
}) => {
  const [showDropAction, setShowDropAction] = useState(false)
  const tableCtx = useContext(TableContext)

  return (
    <tr
      style={{
        zIndex: showDropAction && rowNo === tableCtx?.dropDownActive ? '3' : '1',
      }}
      className={`table-row ${className}`}
    >
      {one && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? <Skeleton width={`70%`} height={17} /> : <span>{one}</span>}
        </td>
      )}
      {oneObj && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? (
            <div className='img-text'>
              {' '}
              <Skeleton width={30} height={30} circle style={{ marginRight: '1rem' }} />{' '}
              <Skeleton width={150} height={17} />
            </div>
          ) : (
            <div className='img-text'>
              <figure className='img-box'>
                <img src={oneObj?.img} alt='' className='img' />
              </figure>
              <span>{oneObj?.label}</span>
            </div>
          )}
        </td>
      )}
      {two && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? <Skeleton width={`70%`} height={17} /> : <span>{two}</span>}
        </td>
      )}
      {twoObj && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? (
            <div className='img-text'>
              {' '}
              <Skeleton width={30} height={30} circle style={{ marginRight: '1rem' }} />{' '}
              <Skeleton width={`70%`} height={17} />
            </div>
          ) : (
            <div className='img-text'>
              <figure className='img-box'>
                <img src={twoObj?.img} alt='' className='img' />
              </figure>
              <span>{twoObj?.label}</span>
            </div>
          )}
        </td>
      )}
      {three && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? <Skeleton width={`70%`} height={17} /> : <span>{three}</span>}
        </td>
      )}
      {threeObj && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? (
            <div className='img-text'>
              {' '}
              <Skeleton width={30} height={30} circle style={{ marginRight: '1rem' }} />{' '}
              <Skeleton width={`70%`} height={17} />
            </div>
          ) : (
            <div className='img-text'>
              <figure className='img-box'>
                <img src={threeObj?.img} alt='' className='img' />
              </figure>
              <span>{threeObj?.label}</span>
            </div>
          )}
        </td>
      )}
      {four && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? <Skeleton width={`70%`} height={17} /> : <span>{four}</span>}
        </td>
      )}
      {five && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? <Skeleton width={`70%`} height={17} /> : <span>{five}</span>}
        </td>
      )}
      {six && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? <Skeleton width={`70%`} height={17} /> : <span>{six}</span>}
        </td>
      )}
      {seven && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? <Skeleton width={`70%`} height={17} /> : <span>{seven}</span>}
        </td>
      )}
      {eight && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? <Skeleton width={`70%`} height={17} /> : <span>{eight}</span>}
        </td>
      )}
      {nine && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? <Skeleton width={`70%`} height={17} /> : <span>{nine}</span>}
        </td>
      )}
      {ten && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? <Skeleton width={`70%`} height={17} /> : <span>{ten}</span>}
        </td>
      )}
      {eleven && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? <Skeleton width={`70%`} height={17} /> : <span>{eleven}</span>}
        </td>
      )}
      {twelve && (
        <td
          onClick={() => {
            onRowClick && onRowClick()
            tableCtx?.setShowDropActive('')
          }}
          className='table-data'
        >
          {loading ? <Skeleton width={`70%`} height={17} /> : <span>{twelve}</span>}
        </td>
      )}
      {action && (
        <td className='table-data'>
          <div className='action-box'>
            {' '}
            {!dontShowEdit && (
              <>
                {loading ? (
                  <Skeleton circle width={30} height={30} />
                ) : (
                  <figure onClick={onEdit} className='img-box'>
                    <img src={editIcon} alt='' className='img' />
                  </figure>
                )}
              </>
            )}
            {imgActionOne && (
              <>
                {loading ? (
                  <Skeleton circle width={30} height={30} />
                ) : (
                  <figure onClick={onClickActionOne} className='img-box'>
                    <img src={imgActionOne} alt='' className='img' />
                  </figure>
                )}
              </>
            )}
            {imgActionTwo && (
              <>
                {loading ? (
                  <Skeleton circle width={30} height={30} />
                ) : (
                  <figure onClick={onClickActionTwo} className='img-box'>
                    <img src={imgActionTwo} alt='' className='img' />
                  </figure>
                )}
              </>
            )}
            {!dontShowAction && (
              <>
                {loading ? (
                  <Skeleton circle width={30} height={30} />
                ) : (
                  <div className='action-wrap'>
                    <figure
                      onClick={() => {
                        // setIndexNo();
                        tableCtx?.setShowDropActive(rowNo)
                        tableCtx?.dropDownActive === rowNo
                          ? setShowDropAction(!showDropAction)
                          : setShowDropAction(true)
                      }}
                      className='img-box '
                    >
                      <img src={actionIcon} alt='' className='img' />
                    </figure>
                    {/* action drop start */}
                    <div
                      className={`drop-box ${showDropAction && tableCtx?.dropDownActive === rowNo && 'drop-box-show'}`}
                    >
                      {editText || deleteText || downloadText ? (
                        <RavenDropDown
                          type='edit-delete'
                          editText={editText}
                          deleteText={deleteText}
                          downloadText={downloadText}
                          onEdit={onEdit}
                          onDelete={onDelete}
                          onDownload={onDownload}
                        />
                      ) : (
                        ''
                      )}
                    </div>
                    {/* action drop end */}
                  </div>
                )}
              </>
            )}
            {actionDropAuto && (
              <>
                {loading ? (
                  <Skeleton circle width={30} height={30} />
                ) : (
                  <div className='action-wrap'>
                    <figure
                      onClick={() => {
                        // setIndexNo();
                        tableCtx?.setShowDropActive(rowNo)
                        tableCtx?.dropDownActive === rowNo
                          ? setShowDropAction(!showDropAction)
                          : setShowDropAction(true)
                      }}
                      className='img-box '
                    >
                      <img src={imgActionThree} alt='' className='img' />
                    </figure>
                    {/* action drop start */}
                    <div
                      className={`drop-box ${showDropAction && tableCtx?.dropDownActive === rowNo && 'drop-box-show'}`}
                    >
                      {actionDropAuto}
                    </div>
                    {/* action drop end */}
                  </div>
                )}
              </>
            )}
            {imgActionThree && (
              <>
                {loading ? (
                  <Skeleton circle width={30} height={30} />
                ) : (
                  <figure onClick={onClickActionThree} className='img-box'>
                    <img src={imgActionThree} alt='' className='img' />
                  </figure>
                )}
              </>
            )}
            {imgActionFour && (
              <>
                {loading ? (
                  <Skeleton circle width={30} height={30} />
                ) : (
                  <figure onClick={onClickActionFour} className='img-box'>
                    <img src={imgActionFour} alt='' className='img' />
                  </figure>
                )}
              </>
            )}
          </div>
        </td>
      )}
    </tr>
  )
}

export default RavenTableRow
