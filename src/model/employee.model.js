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

export async function getEmployeeByName(empname) {
  const response = await axios.get(url + "/search/" + empname);
  return response;
}

export async function addEmployee(formData) {
  const response = await axios.post(`${url}/add`, formData);
  return response;
}

export async function updateEmployee(_id, formData) {
  console.log("im update model",_id, formData);

  const response = await axios.patch(url + "/update/" + _id, formData);
  return response;
}

export async function updateProfilePicOnly(_id, formData) {
  const response = await axios.patch(
    url + "/update/profilePic/" + _id,
    formData
  );
  return response;
}

export async function deleteEmployeeById(_id) {
  const response = await axios.delete(url + "/delete/" + _id);
  return response;
}

function toBase64(arr) {
  return btoa(
    arr?.reduce((data, byte) => data + String.fromCharCode(byte), "")
  );
}
export function bufferToImage(data) {
  let profilePicBuffer = data?.data?.data;
  const url = `data:image/jpeg;base64,${toBase64(profilePicBuffer)}`;
  return url;
}
