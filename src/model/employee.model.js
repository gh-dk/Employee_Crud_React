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

function toBase64(arr) {
  return btoa(
    arr?.reduce((data, byte) => data + String.fromCharCode(byte), "")
  );
}
export function bufferToImage(data) {
  let profilePicBuffer = data.data.data;
  const url = `data:image/jpeg;base64,${toBase64(profilePicBuffer)}`;
  return url;
}
