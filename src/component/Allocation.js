import React  from 'react'
  
const Allocation = (props) => {
  return (
    <div className='row'>
      <table class='table'>
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
              <tr>
                <td>{data.department}</td>
                <td>${data.budget}</td>
                <td>
                  <button className='btn btn-primary'>+</button>
                </td>
                <td>
                  <button className='btn btn-danger'>-</button>
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
