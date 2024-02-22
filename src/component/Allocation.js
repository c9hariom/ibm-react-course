import {React,useEffect}  from 'react'
  
const Allocation = (props) => {

    

  useEffect(() => {
    console.log("updating")
  }, [props.deptData])



  return (
    <div className='row'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Department</th>
            <th scope='col'>Allocation Budget</th>
            <th scope='col'>Increase by 10</th>
            <th scope='col'>Decrease by 10</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {props.deptData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.department}</td>
                <td>{props.selectedCurrency}{data.budget}</td>
                <td>
                  <button className='btn btn-primary' onClick={()=>{props.upd_allocation(data.department,"increase",10)}}>+</button>
                </td>
                <td>
                  <button className='btn btn-danger' onClick={()=>{props.upd_allocation(data.department,"decrease",10)}}>-</button>
                </td>
                <td>
                  <button className='btn btn-secondary'>x</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Allocation
