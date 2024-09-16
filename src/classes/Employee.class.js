export class Employee {
  constructor(
    _id = "",
    name = "",
    profilePic = "",
    address = "",
    joiningDate = "",
    dept = "",
    age = "",
    email = ""
  ) {
    this._id = _id;
    this.name = name;
    this.profilePic = profilePic;
    this.address = address;
    this.joiningDate = joiningDate;
    this.dept = dept;
    this.age = age;
    this.email = email;
  }
}
