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
    amount = parseInt(amount)
    if (type === 'increase') {
      if (amount > remaining) {
        alert(
          'Value should not excced the reamining fund {selectedCurrency}' +
            remaining
        )
        return
      }
      let tempData = deptData
      for (let i = 0; i < deptData.length; i++) {
        if (tempData[i].department === dept) {
          tempData[i].budget += amount
          setRemaining((remaining -= amount))
        }
      }
      setDeptData(tempData)

      console.log(remaining)
    } else if (type === 'decrease') {
      // if(amount>remaining){
      //   alert("Value is already {selectedCurrency}0")
      //   return
      // }
      let tempData = deptData
      for (let i = 0; i < deptData.length; i++) {
        if (tempData[i].department === dept) {
          if (deptData[i].budget < amount) {
            alert(
              'amount to decrease is already less than the assigned {selectedCurrency}' +
                tempData.amount
            )
            break
          }
          tempData[i].budget -= amount
          setRemaining((remaining += amount))
        }
      }
      setDeptData(tempData)
      console.log(remaining)
    }
  }

  useEffect(() => {
    console.log('updating')
  }, [deptData])

  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [actionType, setActionType] = useState('increase')
  const [amount, setAmount] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState('$')

  const handleSaveClick = () => {
    // Call the test function with the selected values
    upd_allocation(selectedDepartment, actionType, amount)
  }

  return (
    <div className='container-fluid'>
      <h2>Company's Budget Allocation</h2>
      <div className='row'>
        <div className='card bg-secondary col-md-3 m-1'>
          <div className='card-body' style={{ color: 'white' }}>
            Budget {selectedCurrency}
            <input type='text' value={totalBudget} />
          </div>
        </div>

        <div className='card bg-success col-md-3 m-1'>
          <div className='card-body ' style={{ color: 'white' }}>
            Remaining {selectedCurrency}
            {remaining}
          </div>
        </div>

        <div className='card bg-primary col-md-3 m-1'>
          <div className='card-body' style={{ color: 'white' }}>
            Spent So far : {selectedCurrency}
            {totalBudget - remaining}
          </div>
        </div>

        <div className='dropdown col-md-2 m-1'>
          <select
            className='form-select'
            aria-label='Default select example'
            value={selectedCurrency}
            onChange={e => setSelectedCurrency(e.target.value)}
          >
            <option value='$'>Currency ($ Dollar)</option>
            <option value='£'>Currency ( £ Pound)</option>
            <option value='€'>Currency (€ Euro)</option>
            <option value='₹'>Currency (₹ Rupee)</option>
          </select>
        </div>
      </div>
      <h2>Allocation</h2>
      <Allocation
        key={JSON.stringify(deptData)}
        deptData={deptData}
        upd_allocation={upd_allocation}
        selectedCurrency={selectedCurrency}
      />
      <h2>Change Allocation</h2>
      <div className='row'>
        <div className='col-md-3'>
          <div className='input-group mb-3'>
            <select
              className='form-select'
              aria-label='Default select example'
              value={selectedDepartment}
              onChange={e => setSelectedDepartment(e.target.value)}
            >
              <option value='' disabled>
                Department
              </option>
              {deptData.map((data, index) => (
                <option key={index} value={data.department}>
                  {data.department}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='col-md-3'>
          <div className='input-group mb-3'>
            <select
              className='form-select'
              aria-label='Default select example'
              value={actionType}
              onChange={e => setActionType(e.target.value)}
            >
              <option value='increase'>Add</option>
              <option value='decrease'>Subtract</option>
            </select>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='input-group mb-3'>
            <span className='mx-2'>{selectedCurrency}</span>{' '}
            <input
              type='number'
              className='form-control'
              aria-label='Text input with dropdown button'
              name='amount'
              min={0}
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className='col-md-3'>
          <div className='input-group mb-3'>
            <button className='btn btn-primary' onClick={handleSaveClick}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
