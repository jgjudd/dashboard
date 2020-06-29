import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
  const [data, setData] = useState([{id: 0, caseName: 'example case'}])

  useEffect( () => {
    axios('localhost:5555/api/cases').then(res => console.log(res))
  })
  return (
    <main>
      {
        data.map((e) => <div key={e.id}>{e.id}, {e.caseName}</div>)
      }
    </main>
  )
}

export default Dashboard
