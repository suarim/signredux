import React from 'react'
import Auth from './Components/Auth'
import Todo from './Components/Todo'
const App = () => {
  return (
    <div>
    { localStorage.getItem('token')?
      <Todo></Todo>:
      <Auth></Auth>
    }
    </div>
  )
}

export default App
