// import ConfirmBox from "./component/custom/ConfirmBox";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Learning from "./component/Learning";
import Home from "./component/views/Home";
import EmployeeForm from "./component/EmployeeForm";
import AdminLogin from "./component/AdminLogin";
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const MyContext = createContext();

function App() {
  const [title, settitle] = useState("Employee Crud");

  setTimeout(() => {
    settitle("new title");
  }, 2000);
  return (
    <>
      <MyContext.Provider value={{ title }}>
        <Header />
        {/* <Home /> */}
        <Outlet />
        <Footer />
        {/* <EmployeeForm /> */}
        {/* <AdminLogin /> */}
        {/* <ConfirmBox /> */}
        {/* <Learning /> */}
      </MyContext.Provider>
    </>
  );
}

export default App;
