import { react, useEffect, useState } from 'react'
import Allocation from './Allocation'

export default function Home () {
  const [totalBudget, setTotalBudget] = useState(2000)
  let [remaining, setRemaining] = useState(1750)

  const data = [
    {
      department: 'Marketing',
      budget: 50
    },
    {
      department: 'Finance',
      budget: 50
    },
    {
      department: 'Sales',
      budget: 50
    },
    {
      department: 'Human Resource',
      budget: 50
    },
    {
      department: 'IT',
      budget: 50
    }
  ]

  const [deptData, setDeptData] = useState(data)

  const upd_allocation = (dept, type, amount) => {
    if (type === 'increase') {
      if (amount > remaining) {
        alert('Value should not excced the reamining fund $' + remaining)
        return
      }
      let tempData = deptData
      for (let i = 0; i < deptData.length; i++) {
        if (tempData[i].department === dept) {
          tempData[i].budget += 10
          setRemaining((remaining -= 10))
        }
      }
      setDeptData(tempData)

      console.log(remaining)
    } else if (type === 'decrease') {
      // if(amount>remaining){
      //   alert("Value is already $0")
      //   return
      // }
      let tempData = deptData
      for (let i = 0; i < deptData.length; i++) {
        if (tempData[i].department === dept) {
          if (deptData[i].budget < amount) {
            alert(
              'amount to decrease is already less than the assigned $' +
                tempData.amount
            )
            break
          }
          tempData[i].budget -= 10
          setRemaining((remaining += 10))
        }
      }
      setDeptData(tempData)
      console.log(remaining)
    }
  }

  useEffect(() => {
    console.log('updating')
  }, [deptData])

  return (
    <div className='container-fluid'>
      <h1>Company's Budget Allocation</h1>
      <div className='row'>
        <div className='card bg-secondary col-md-3 m-1'>
          <div className='card-body'>
            Budget $<input type='text' value={totalBudget} />
          </div>
        </div>

        <div className='card bg-success col-md-3 m-1'>
          <div className='card-body '>Remaining ${remaining}</div>
        </div>

        <div className='card bg-primary col-md-3 m-1'>
          <div className='card-body'>
            Spent So far : ${totalBudget - remaining}
          </div>
        </div>

        <div className='dropdown col-md-2 m-1'>
          <button
            className='btn btn-secondary dropdown-toggle'
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Currency ($ Dollar)
          </button>
          <ul className='dropdown-menu'>
            <li>
              <a className='dropdown-item' href='#'>
                $ Dollar
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                £ Pound
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                € Euro
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                ₹ Rupee
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h2>Allocation</h2>
      <Allocation
        key={JSON.stringify(deptData)}
        deptData={deptData}
        upd_allocation={upd_allocation}
      />
      <h2>Change Allocation</h2>
      <div className='row'>
        <div className='col-md-3'>
          <div className='input-group mb-33'>
            <select class='form-select' aria-label='Default select example'>
              <option selected>Department</option>
              {deptData.map((data, index) => {
                return (
                  <option value={data.department}>{data.department}</option>
                )
              })}
            </select>
          </div>
        </div>

        <div className='col-md-3'>
          <div className='input-group mb-33'>
            <select class='form-select' aria-label='Default select example'>
              <option selected value='increase'>
                Add
              </option>
              <option value='decrease'>Subtract</option>
            </select>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='input-group mb-33'>
            <span className='mx-2'>$</span>{' '}
            <input
              type='number'
              className='form-control'
              aria-label='Text input with dropdown button'
              name='amount'
              min='0'
            />
          </div>
        </div>
        <div className='col-md-3'>
          <div className='input-group mb-33'>
            <button className='btn btn-primary'>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}
