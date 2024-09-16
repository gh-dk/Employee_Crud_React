import React from "react";
import { Link } from "react-router-dom";

function EmployeeCard({
  employeeData,
  handleChildEditEvent,
  handleChildDeleteEvent,
}) {
  return (
    <div className="card card-image-cover max-w-[250px] group">
      <img
        className="aspect-square object-cover saturate-0 group-hover:saturate-100 m-3  group-hover:m-0 rounded-md duration-500 transition-all"
        src={employeeData.profilePic}
        alt=""
      />
      <div className="card-body p-3 pt-1">
        <h2 className="card-header">
          {employeeData.name}{" "}
          <span className="text-sm p-2 bg-blue-400/30  rounded-full h-8 flex justify-center items-center">
            #{employeeData._id}
          </span>
        </h2>
        <div className="flex flex-col justify-between gap-2 text-sm">
          <p className="text-content2  bg-slate-500/50 rounded-2xl p-2">
            Email : {employeeData.email}
          </p>
          <p className="text-content2 w-[100%] text-center bg-yellow-500/20 rounded-2xl p-2">
            {employeeData.joiningDate}
          </p>
        </div>
        <p className="text-content2 w-full text-center bg-green-500/20 rounded-2xl p-2">
          {employeeData.dept}
        </p>
        <p className="text-content2 text-sm text-center">
          {employeeData.address}
        </p>
        <div className="card-footer gap-2">
          <Link
            to={"../editEmployee/" + employeeData._id}
            className="block w-full"
          >
            <button className="btn btn-solid-primary w-full">Edit</button>
          </Link>
          <Link to={""} className="block w-full">
            <button
              onClick={() => {
                handleChildDeleteEvent(employeeData._id);
              }}
              className="btn btn-solid-error w-full"
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
