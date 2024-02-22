import react from 'react'
import Home from './component/Home'

function App () {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col text-center'>
            <h1 className='display-6 fw-bold animate__animated animate__fadeIn infinite'>
              Developer @c9hariom
            </h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <Home></Home>
      </div>
    </div>
  )
}

export default App
