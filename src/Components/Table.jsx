import React from 'react'
import { indianfee } from '../Data/FeeData'
import './componet.css'
function Table({row1, row2, fee}) {
  return (
    <div className='w-full'>
      <table className='w-full feetable'>
        <thead>
            <tr>
                <th>{row1}</th>
                <th>{row2}</th>
            </tr>
        </thead>
        <tbody>
            {fee.col1.map((label,index)=>(
                <tr key={index}>
                    <td>{label}</td>
                    <td>{indianfee.col2[index]}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
Table