import React from 'react'
import { indianfee } from '../Data/FeeData'
import './componet.css'
function Table2({ fee}) {
  return (
    <div className='w-full'>
      <table className='w-full banktable'>
        <tbody>
            {fee.col1.map((label,index)=>(
                <tr  key={index}>
                    <td className='font-bold'>{label}</td>
                    <td>{fee.col2[index]}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table2
