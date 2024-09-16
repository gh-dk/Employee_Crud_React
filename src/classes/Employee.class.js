export class Employee {
  constructor(
    _id = "",
    name = "",
    profilePic = "",
    address = "",
    joiningDate = "",
    dept = "",
    email = ""
  ) {
    this._id = _id;
    this.name = name;
    this.profilePic = profilePic;
    this.address = address;
    this.joiningDate = joiningDate;
    this.dept = dept;
    this.email = email;
  }
}
