import React from "react";
import EmployeeCard from "./EmployeeCard";
import { Employee } from "../classes/Employee.class";
// import EmployeeOptions from "./EmployeeOptions";

function Employees() {
  // Employee data using Employee class
  const employeeData = [
    new Employee(
      1,
      "John Doe",
      "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid",
      "123 Elm Street, Springfield",
      "2020-01-15",
      "Admin",
      35
    ),
    new Employee(
      2,
      "Jane Smith",
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
      "456 Maple Avenue, River City",
      "2019-03-22",
      "Manager",
      28
    ),
    new Employee(
      3,
      "Sam Johnson",
      "https://images.ottplay.com/images/sunil-1711201576.jpg?impolicy=ottplay-20210210&width=600",
      "789 Oak Road, Hill Valley",
      "2021-07-10",
      "Engineer",
      68
    ),
    new Employee(
      4,
      "Davis Emil",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D",
      "135 Cedar Street, Gotham",
      "2018-09-05",
      "HR",
      32
    ),
    new Employee(
      5,
      "Michael Brown",
      "https://images.unsplash.com/photo-1503443062224-9f77d743cf25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2V8ZW58MHx8MHx8fDA%3D",
      "246 Pine Street, Metropolis",
      "2022-05-18",
      "Developer",
      27
    ),
    new Employee(
      6,
      "Olivia Garcia",
      "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/KGF-1-1.jpg",
      "357 Birch Lane, Star City",
      "2017-12-02",
      "Watchman",
      63
    ),
    new Employee(
      7,
      "Liam Martinez",
      "https://images.ottplay.com/images/vinayakan-1711129613.jpg?impolicy=ottplay-20210210&width=600",
      "468 Willow Road, Central City",
      "2023-02-20",
      "Marketing",
      72
    ),
    new Employee(
      8,
      "Sophia Lee",
      "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhY2V8ZW58MHx8MHx8fDA%3D",
      "579 Cherry Boulevard, Coast City",
      "2016-04-30",
      "Support",
      24
    ),
  ];

  const handleChildEditEvent = (id) => {
    alert("edit : " + id);
  };

  const handleChildDeleteEvent = (id) => {
    alert("delete : " + id);
  };

  return (
    <>
      {/* <EmployeeOptions /> */}
      <div className="flex flex-wrap mx-auto justify-center gap-3 py-5">
        {employeeData
          .filter((e) => e.age)
          .map((emp, index) => (
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
