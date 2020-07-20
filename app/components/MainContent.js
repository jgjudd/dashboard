import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import Dashboard from './screens/Dashboard'
import Calendar from './screens/Calendar'
import Tasks from './screens/Tasks'
import Cases from './screens/Cases'

const MainContent = () => {
  const context = useContext(AppContext)

  switch (context.currentScreen) {
    case 'dashboard': 
      return <Dashboard />
    case 'cases': 
      return <Cases />
    case 'calendar': 
      return <Calendar />
    case 'tasks': 
      return <Tasks />
    case 'clients': 
      return <main>Clients</main>
    case 'quotes': 
      return <main>Quotes</main>
    case 'invoices': 
      return <main>Invoices</main>
    case 'payments': 
      return <main>Payments</main>
    case 'timeentries': 
      return <main>Time Entries</main>
    default:
      return <main>Error</main>
  }
}

export default MainContent
