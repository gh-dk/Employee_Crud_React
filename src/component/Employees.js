import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";
// import { Employee } from "../classes/Employee.class";
import {
  deleteEmployeeById,
  getAllEmployee,
  getEmployeeByName,
} from "../model/employee.model";
import { useLoaderData } from "react-router-dom";
// import EmployeeOptions from "./EmployeeOptions";

function Employees() {
  const myloadedData = useLoaderData();

  const [employeeData, setemployeeData] = useState(myloadedData.data);

  const handleChildEditEvent = (id) => {
    alert("edit : " + id);
  };

  const handleChildDeleteEvent = async (id) => {
    const deleteConfirmation = window.confirm(
      "Are you sure you want to delete"
    );
    if (deleteConfirmation) {
      const response = await deleteEmployeeById(id);
      if (response.data.deletedCount > 0) {
        alert("deleted");
        await getEmployeeData();
      } else {
        alert("Failed to delete");
      }
    }
  };

  const getEmployeeData = async () => {
    const data = await getAllEmployee();
    console.log(data.data);
    setemployeeData(data.data);
  };

  const searchEmployeeByName = async (event) => {
    const searchValue = event.target.value.toLowerCase();
    console.log(searchValue);
    if (searchValue.length > 0) {
      const responseData = await getEmployeeByName(searchValue);
      if (responseData.data) {
        console.log(responseData.data);
        setemployeeData(responseData.data);
      } else {
        getEmployeeData();
      }
    } else {
      getEmployeeData();
    }
  };

  return (
    <>
      {/* <EmployeeOptions /> */}

      <div className="px-5 mt-5 flex justify-center gap-5">
        <input
          onChange={searchEmployeeByName}
          className="input"
          placeholder="Search"
        />
      </div>

      <div className="flex flex-wrap mx-auto justify-center gap-3 py-5">
        {employeeData.map((emp, index) => (
          <EmployeeCard
            handleChildEditEvent={handleChildEditEvent}
            handleChildDeleteEvent={handleChildDeleteEvent}
            key={index}
            employeeData={emp}
          />
        ))}

        {employeeData.length === 0 && <h1>not found</h1>}
      </div>
    </>
  );
}

export default Employees;
