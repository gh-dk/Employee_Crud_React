import React, { useState } from "react";

function EmployeeformLearn() {
  const [_id, set_id] = useState("");
  function change_id(event) {
    set_id(event.target.value);
    console.log(event.target.value);
  }
  return (
    <>
      <h4 className="text-center text-xl font-bold mb-4">EMPLOYEE FORM</h4>
      <div className="flex justify-center">
        <form className="w-1/2 bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              htmlFor="_id"
              className="block text-sm font-medium text-gray-700"
            >
              ID
            </label>
            <input
              type="number"
              className="mt-1 block w-full px-3 py-2 bg-black border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="_id"
              value={_id}
              onChange={change_id}
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
            <button
              type="reset"
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EmployeeformLearn;
