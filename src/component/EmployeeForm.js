import React, { useEffect, useState } from "react";
import { Employee } from "../classes/Employee.class";

function EmployeeForm() {
  const [empFormData, setempFormData] = useState(new Employee());

  function updateEmpFormValue(event) {
    setempFormData({ ...empFormData, [event.target.name]: event.target.value });
  }

  // useEffect(() => {
  //   console.log(empFormData);
  // });

  function submitForm(e) {
    e.preventDefault();
    console.log(empFormData);
  }
  return (
    <section className="bg-gray-2 rounded-xl max-w-[600px] mx-auto">
      <div className="p-8 shadow-lg">
        <form onSubmit={submitForm} className="space-y-4">
          <div className="w-full">
            <label className="sr-only" htmlFor="id">
              Id
            </label>
            <input
              className="input input-solid max-w-full"
              placeholder="Id"
              type="number"
              id="id"
              value={empFormData._id}
              name="_id"
              onChange={updateEmpFormValue}
              required
            />
          </div>
          <div className="w-full">
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              className="input input-solid max-w-full"
              placeholder="Name"
              type="text"
              id="name"
              value={empFormData.name}
              name="name"
              onChange={updateEmpFormValue}
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="input input-solid"
                placeholder="Email address"
                type="email"
                id="email"
                value={empFormData.email}
                name="email"
                onChange={updateEmpFormValue}
                required
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="age">
                age
              </label>
              <input
                className="input input-solid"
                placeholder="Age"
                type="number"
                id="age"
                value={empFormData.age}
                name="age"
                onChange={updateEmpFormValue}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="date">
                Joining Date
              </label>
              <input
                className="input input-solid"
                placeholder="Joining Date"
                type="date"
                id="date"
                value={empFormData.joiningDate}
                name="joiningDate"
                onChange={updateEmpFormValue}
                required
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="dept">
                dept
              </label>
              <select
                className="input input-solid"
                id="dept"
                value={empFormData.dept}
                name="dept"
                onChange={updateEmpFormValue}
                required
              >
                <option value="">Select dept</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Engineer">Engineer</option>
                <option value="HR">HR</option>
                <option value="Developer">Developer</option>
                <option value="Watchman">Watchman</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <label className="sr-only" htmlFor="address">
              Address
            </label>

            <textarea
              className="textarea textarea-solid max-w-full"
              placeholder="Address"
              rows="8"
              id="address"
              value={empFormData.address}
              name="address"
              onChange={updateEmpFormValue}
              required
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="rounded-lg btn btn-primary btn-block"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EmployeeForm;
