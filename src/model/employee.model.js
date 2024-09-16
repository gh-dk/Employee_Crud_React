import axios from "axios";

const url = "http://localhost:3001";

export async function getAllEmployee() {
  const response = await axios.get(url);
  return response;
}

export async function getEmployeeById(_id) {
  const response = await axios.get(url + "/" + _id);
  return response;
}

export async function addEmployee(formData) {
  const response = await axios.post(`${url}/add`, formData);
  return response;
}

export function updateEmployee() {}

export function deleteEmployeeById() {}
