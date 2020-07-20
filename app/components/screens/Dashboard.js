import React, { useEffect, useState } from 'react'
//import axios from 'axios'
import '../../styles/screens/Dashboard.css'

const Case = () => {
  return <div className='case'>This is a case</div>
}

const Dashboard = () => {
  //const [data, setData] = useState([{id: 0, caseName: 'example case'}])

  // useEffect( () => {
  //   axios('localhost:5555/api/cases').then(res => console.log(res))
  // })

  // TODO: Build Row Component, Get Data, Loop through data, add rows to table
  // Each Row needs a click event that will navigate to specific case data
  return (
    <div className='dashboard'>
      <h3>Dashboard</h3>
      <div className='monitors'>
        <div className='monitor1'>Monitor 1</div>
        <div className='monitor2'>Monitor 2</div>
        <div className='monitor3'>Monitor 3</div>
      </div>
      <div className='case-list'>
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
      </div>
    </div>
  )
}

export default Dashboard
