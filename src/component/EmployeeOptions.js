import React from "react";

function EmployeeOptions() {
  return (
    <div className="px-5 mt-5 flex justify-center gap-5">
      <button class="btn btn-primary">Add Employee</button>
      <input className="input" placeholder="Search" />
      <select className="select">
        <option>ASC</option>
        <option>DESC</option>
      </select>
      <select className="select">
        <option>ID</option>
        <option>NAME</option>
        <option>SALARY</option>
      </select>
    </div>
  );
}

export default EmployeeOptions;
