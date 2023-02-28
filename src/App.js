import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";
import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import { useStateContext } from "./contexts/ContextProvider";
import Login from "./pages/Login";
import SeaEntry from "./pages/SeaEntry";
import Home from "./pages/Home";
import AddUser from "./admin/AddUser";
const App = () => {
  const { user, activeMenu, setActiveMenu } = useStateContext();
  console.log(user);

  return (
    <div>
      <BrowserRouter>
        {user ? (
          <>
            <div className="flex relative dark:bg-main-dark-bg">
              <div
                className="fixed right-4 bottom-4"
                style={{ zIndex: "1000" }}
              >
                <TooltipComponent content="settings" position="Top">
                  <button>
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>
              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )}
              <div
                className={
                  activeMenu
                    ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                    : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
                }
              >
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                  <Navbar />
                </div>
                <div>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/SeaEntry" element={<SeaEntry />} />
                  </Routes>
                  {/* Admin Access */}
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/addUser" element={<AddUser />} />
                  </Routes>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
