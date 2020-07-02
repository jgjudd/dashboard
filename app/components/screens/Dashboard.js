import React, { useEffect, useState } from 'react'
//import axios from 'axios'
import '../../styles/screens/Dashboard.css'

const Dashboard = () => {
  //const [data, setData] = useState([{id: 0, caseName: 'example case'}])

  // useEffect( () => {
  //   axios('localhost:5555/api/cases').then(res => console.log(res))
  // })
  return (
    <div className='dashboard'>
      <h3>Dashboard</h3>
      <div className='monitors'>
        <div className='monitor1'>Monitor 1</div>
        <div className='monitor2'>Monitor 2</div>
        <div className='monitor3'>Monitor 3</div>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Case</th>
          <th>ID</th>
        </tr>
        <tr>
          <td>
            Justin
          </td>
          <td>
            Murder
          </td>
          <td>
            3
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Dashboard
