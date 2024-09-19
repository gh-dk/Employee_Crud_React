import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";
// import { Employee } from "../classes/Employee.class";
import { deleteEmployeeById, getAllEmployee } from "../model/employee.model";
import { useLoaderData } from "react-router-dom";
// import EmployeeOptions from "./EmployeeOptions";

function Employees() {
  const myloadedData = useLoaderData();
  console.log(myloadedData);

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

  return (
    <>
      {/* <EmployeeOptions /> */}
      <div className="flex flex-wrap mx-auto justify-center gap-3 py-5">
        {employeeData.map((emp, index) => (
          <EmployeeCard
            handleChildEditEvent={handleChildEditEvent}
            handleChildDeleteEvent={handleChildDeleteEvent}
            key={index}
            employeeData={emp}
          />
        ))}
      </div>
    </>
  );
}

export default Employees;
