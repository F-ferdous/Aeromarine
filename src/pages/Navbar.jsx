import React, { useEffect } from "react";
import { AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
const NavButton = ({ title, customFunc, icon, dotColor, color }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    setScreenSize,
    logout,
    user,
    setUser,
  } = useStateContext();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <>
      <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton
          title="Menu"
          customFunc={() =>
            setActiveMenu((prevActiveState) => !prevActiveState)
          }
          color="#FF5C8E"
          icon={<AiOutlineMenu />}
        />
        <div className="flex pt-2">
          <span className="text-md font-semibold">
            Partex Aeromarine Logistics Ltd.
          </span>
        </div>
        <div className="flex">
          <div className="flex items-center gap-2  p-1 hover:bg-light-gray rounded-lg">
            <p>
              <span className="text-gray-700 text-14">Hi, </span>
              <span className="text-gray-700 ml-1 text-14 font-bold">
                {user && user.email}
              </span>
            </p>
            <button
              type="button"
              onClick={handleLogout}
              className="flex text-sm p-2 pr-4 pl-4 border border-[#FF5C8E]  rounded-full hover:bg-[#FF5C8E] hover:text-white"
            >
              <AiOutlineLogout className="mt-1 " />
              <span className="capitalize">Logout</span>
            </button>
          </div>
        </div>
      </div>
      <hr className="" />
    </>
  );
};

export default Navbar;
