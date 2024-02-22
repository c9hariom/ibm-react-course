import { react, useState } from 'react'
import Allocation from './Allocation'

export default function Home() {


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

    return (
      <div className='container-fluid'>
        <h1>Company's Budget Allocation</h1>
        <div className='row'>
          <div class='card bg-secondary col-md-3 m-1'>
            <div class='card-body'>
              Budget $<input type="text" value="2000"/>

            </div>
          </div>

          <div class='card bg-success col-md-3 m-1'>
            <div class='card-body '>Remaining $1000</div>
          </div>

          <div class='card bg-primary col-md-3 m-1'>
            <div class='card-body'>Spent So far : $1000</div>
          </div>

          <div class='dropdown col-md-2 m-1'>
            <button
              class='btn btn-secondary dropdown-toggle'
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Currency ($ Dollar)
            </button>
            <ul class='dropdown-menu'>
              <li>
                <a class='dropdown-item' href='#'>
                  $ Dollar
                </a>
              </li>
              <li>
                <a class='dropdown-item' href='#'>
                £ Pound
                </a>
              </li>
              <li>
                <a class='dropdown-item' href='#'>
                € Euro
                </a>
              </li>
              <li>
                <a class='dropdown-item' href='#'>
                ₹ Rupee
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h2>Allocation</h2>
        <Allocation deptData={deptData}/>
        <h2>Change Allocation</h2>
        <div className="row">
          <div className="col-md-3">
            <div class="input-group mb-33">
              <input type="text" class="form-control" aria-label="Text input with dropdown button" value="Department" disabled/>
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" >Choose</button>
              <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-3">
            <div class="input-group mb-33">
              <input type="text" class="form-control" aria-label="Text input with dropdown button" value="Allocation" disabled/>
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" >Add</button>
              <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-3">
            <div class="input-group mb-33">
            <span className='mx-2'>$</span> <input type="text" class="form-control" aria-label="Text input with dropdown button" name="newBudget"/>
            </div>
          </div>

          <div className="col-md-3">
            <div class="input-group mb-33">
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
