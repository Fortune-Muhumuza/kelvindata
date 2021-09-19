import { useState } from 'react';
import './App.css';
import Table from './components/Table';



function App() {

  const [phoneNumber, setPhoneNumber] = useState('')

  const onPhonenumberChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  return (
    <div className="app">
 <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
        {/* App title section */}
        <div className="row m-1 p-4">
          <div className="col">
            <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
              <i className="fa fa-check bg-primary text-white rounded p-2" />
              <u>Online directory</u>
            </div>
          </div>
        </div>
  
        <div className="row m-1 p-3">
          <div className="col col-11 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
              <div className="col">
                <input className="form-control form-control-lg border-0  bg-transparent rounded" type="text" value={phoneNumber} placeholder="Enter phone number .." onChange={onPhonenumberChange} />
              </div>

              <div className="col-auto px-0 mx-0 mr-2">
                <button type="button" className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 mx-4 border-black-25 border-bottom" />
        {/* View options section */}
        <div className="row m-1 p-3 px-5 justify-content-end">
          <div className="col-auto d-flex align-items-center">
            <label className="text-secondary my-2 pr-2 view-opt-label">Filter</label>
            <select className="custom-select custom-select-sm btn my-2">
              <option value="all" selected>All</option>
              <option value="completed">Male</option>
              <option value="active">Female</option>
            </select>
          </div>
          <div className="col-auto d-flex align-items-center px-1 pr-3">
            <label className="text-secondary my-2 pr-2 view-opt-label">Sort</label>
            <select className="custom-select custom-select-sm btn my-2">
              <option value="added-date-asc" selected>Added date</option>
              <option value="due-date-desc">Due date</option>
            </select>
            <i className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" data-toggle="tooltip" data-placement="bottom" title="Ascending" />
            <i className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none" data-toggle="tooltip" data-placement="bottom" title="Descending" />
          </div>
        </div>
      
        <div className="row mx-1 px-5 pb-3 w-80">
          <div className="col mx-auto">
          
              
          
          <Table phoneNumber={phoneNumber} />
           </div>
       
        </div>
      </div>
    </div>
  );
}

export default App;
