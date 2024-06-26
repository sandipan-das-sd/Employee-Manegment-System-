import React from "react";
import Sidebar from "./components/Sidebar";
// import { useEffect, useState } from "react";
// import { auth } from "./components/firebase";
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Myleave from "./components/Leave/Myleave";
import ApplyLeave from "./components/Leave/ApplyLeave";
import Addsalary from "./components/Salary/Addsalary";
import Managesalary from "./components/Salary/Managesalary";
import AddDepartment from "./components/Department/AddDepartment";
import ManageDepartment from "./components/Department/ManageDepartment";
import AddStaff from "./components/Staff/AddStaff";
import ManageStaff from "./components/Staff/ManageStaff";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Error from "./components/Login/Error";
import StaffList from "./components/Staff/StaffList";
import EditStaff from "./components/Staff/EditStaff";
import EditDepartment from "./components/Department/EditDepartment";
// import { useHistory } from "react-router-dom";
import ViewDepartment from "./components/Department/ViewDepartment";
import User from "./components/SignUpUser/User";
import VerifyUser from "./components/SignUpUser/VerifyUser";
function App() {
  // const [userName, setUserName] = useState("");

  //--------------------Auth Handeling-----------------------
  // let history = useHistory();
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserName(user.displayName);
  //     } else {
  //       setUserName("");
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []); // Empty dependency array to run the effect only once on mount

  // const isAuthenticated = userName !== "";

  //------Authentication Complete -------------------------------------------

  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
          <Route exact path="/staffList">
            <StaffList />
          </Route>
          <Route exact path="/Applyleave">
            <ApplyLeave />
          </Route>
          <Route exact path="/addDepartment">
            <AddDepartment />
          </Route>
          <Route exact path="/manageDepartment">
            <ManageDepartment />
          </Route>
          <Route exact path="/editDept">
          <EditDepartment />
          </Route>
          <Route exact path="/viewDept/:id">
          <ViewDepartment/>
          </Route>
          <Route exact path="/addStaff">
            <AddStaff />
          </Route>
          <Route exact path="/manageStaff/:id">
            <ManageStaff />
          </Route>
          <Route exact path="/editStaff/:id">
            <EditStaff />
          </Route>
          <Route exact path="/leavehistory">
            <Myleave />
          </Route>
          <Route exact path="/addsalary">
            <Addsalary />
          </Route>
          <Route exact path="/managesalary">
            <Managesalary />
          </Route>
          <Route exact path="/user/:token/:id">
            <VerifyUser>
              <User />
            </VerifyUser>
          </Route>


          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;