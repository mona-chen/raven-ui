import React, { useContext } from 'react'
import TableContext, { TableContextProvider } from '../context/TableContext'

interface Props {
  headerList?: any[]
  tableStrip?: any
  className?: string
  action?: any
  children?: any
}

const RavenTable: React.FC<Props> = ({ headerList, tableStrip, className, action, children }) => {
  const tableCtx = useContext(TableContext)
  return (
    <TableContextProvider>
      <table className={`table ${tableStrip && 'table_strip'} ${className} `}>
        {/* table head start */}
        <thead className='table-head'>
          <tr
            onClick={() => {
              tableCtx?.setShowDropActive('')
            }}
          >
            {headerList &&
              headerList.map((chi, idx) => {
                const { label } = chi
                return <th key={idx}>{label || chi}</th>
              })}
            {action && <th className='action'>ACTION(S)</th>}
          </tr>
        </thead>
        {/* table head end */}
        {/* table body start */}
        <tbody className='table-body'>{children}</tbody>
        {/* table body end */}
      </table>
    </TableContextProvider>
  )
}

export default RavenTable
