import React, { useEffect, useState } from "react";
import { Employee } from "../classes/Employee.class";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  addEmployee,
  updateEmployee,
  updateProfilePicOnly,
} from "../model/employee.model";

function EmployeeForm() {
  const loadedData = useLoaderData();

  const [empFormData, setempFormData] = useState(
    loadedData?.data || new Employee()
  );
  const [updateMode, setupdateMode] = useState(false);
  console.log(empFormData);

  const navigate = useNavigate();

  function updateEmpFormValue(event) {
    setempFormData({ ...empFormData, [event.target.name]: event.target.value });
  }

  function updateEmpFormFile(event) {
    setempFormData({
      ...empFormData,
      [event.target.name]: event.target.files[0],
    });
  }

  async function updateImageOnly(id) {
    let formData = new FormData();
    formData.append("profilePic", empFormData.profilePic);
    const response = await updateProfilePicOnly(id, formData);
    console.log(response);
    if (response.data) {
      navigate("/employee");
    }
  }

  useEffect(() => {
    if (loadedData) {
      setupdateMode(true);
      const updatesJoiningDate = new Date(
        empFormData.joiningDate
      ).toLocaleDateString("en-CA");
      setempFormData({ ...empFormData, joiningDate: updatesJoiningDate });
    }
  }, [loadedData]);

  //submit form
  async function submitForm(e) {
    e.preventDefault();
    const formData = new FormData();
    for (const key in empFormData) {
      formData.append(key, empFormData[key]);
    }

    if (updateMode) {
      const data = await updateEmployee(empFormData._id, empFormData);
      if (data.data) {
        alert("Employee Updated");
        navigate("/employee");
        console.log(data);
      } else alert("error");
    } else {
      const data = await addEmployee(formData);
      if (data.data) {
        alert("Employee Added with id " + empFormData._id);
        navigate("/employee");
      } else alert("error");
    }
  }
  return (
    <section className="bg-gray-2 rounded-xl max-w-[600px] mx-auto">
      <div className="p-8 shadow-lg">
        <h1 className="text-center text-2xl font-bold mb-5">
          {!updateMode ? "Add" : "Update"} Employee
        </h1>

        {updateMode && (
          <div className="my-10">
            <h1>Update Image </h1>
            <br />
            <input
              className="input input-solid"
              placeholder="Email address"
              type="file"
              id="profilePic"
              name="profilePic"
              onChange={updateEmpFormFile}
              required
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                updateImageOnly(empFormData._id);
              }}
            >
              Update Image
            </button>
          </div>
        )}

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
              readOnly={updateMode}
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
            <div className="">
              <label className="sr-only " htmlFor="email">
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

            {!updateMode && (
              <div className="">
                <label className="sr-only " htmlFor="email">
                  profilePic
                </label>
                <input
                  className="input input-solid"
                  placeholder="Email address"
                  type="file"
                  id="profilePic"
                  name="profilePic"
                  onChange={updateEmpFormFile}
                  required
                />
              </div>
            )}
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
                <option value="software developer">software developer</option>
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

          <div className="w-full">
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              className="input input-solid max-w-full"
              placeholder="password"
              type="text"
              id="password"
              value={empFormData.password}
              name="password"
              onChange={updateEmpFormValue}
              required
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="rounded-lg btn btn-primary btn-block"
            >
              {!updateMode ? "Submit" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EmployeeForm;
