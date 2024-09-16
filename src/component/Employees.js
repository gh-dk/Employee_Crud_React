import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
// import { Employee } from "../classes/Employee.class";
import { getAllEmployee } from "../model/employee.model";
import { useLoaderData } from "react-router-dom";
// import EmployeeOptions from "./EmployeeOptions";

function Employees() {

  const myloadedData = useLoaderData();
  const [employeeData] = useState(myloadedData.data);

  const handleChildEditEvent = (id) => {
    alert("edit : " + id);
  };

  const handleChildDeleteEvent = (id) => {
    alert("delete : " + id);
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await getAllEmployee();
  //     console.log(data.data);
  //     setemployeeData(data.data);
  //   };
  //   getData();
  //   return () => {};
  // }, []);

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
