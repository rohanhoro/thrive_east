import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import logOutIcon from "../../assets/icons/logout.svg";
import messageIcon from "../../assets/icons/message.svg";
import teamIcon from "../../assets/icons/team.svg";
import userIcon from "../../assets/icons/user.svg";
import sliderIcon from "../../assets/icons/slider.svg";
import logo from "../../assets/logo_small.png";

export default function AdminDashboardLayout() {
  const [enquiryCount, setEnquiryCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [profileCount, setProfileCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState();

  const navItems = [
    {
      id: 1,
      listName: "Dashboard",
      icon: sliderIcon,
      path: "/admin",
      notification: 0,
    },
    {
      id: 2,
      listName: "Enquiries",
      icon: messageIcon,
      path: "/admin/enquiries",
      notification: enquiryCount,
    },
    {
      id: 3,
      listName: "Team members",
      icon: teamIcon,
      path: "/admin/team",
      notification: teamCount,
    },
    {
      id: 4,
      listName: "Profile",
      icon: userIcon,
      path: "/admin/profile",
      notification: profileCount,
    },
  ];

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const handleEnquiryCount = async () => {
      const response = await axiosInstance.get("/enquiries/count");
      const count = response.data.count;
      setEnquiryCount(count);
      console.log(count);
    };
    handleEnquiryCount();

    const interval = setInterval(handleEnquiryCount, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-secondary flex h-fit text-white ">
      <div className="flex flex-col items-center bg-tertiary max-md:min-w-8 w-fit min-w-60 p-4">
        <div className="pb-4">
          <img src={logo} alt="Thrive East Logo" className="h-16 max-md:h-4" />
        </div>
        <ul className="flex flex-col gap-6 w-full border-t-2 border-secondary pt-4">
          {navItems.map((navItem) => (
            <Link
              key={navItem.id}
              to={navItem.path}
              className="group relative flex hover:text-primary"
            >
              <img src={navItem.icon} />
              {navItem.notification > 0 && (
                <span className="absolute -top-1 left-3  group-hover:text-white bg-red-600 h-4 min-w-4 px-1 rounded-full text-center text-xs">
                  {navItem.notification <= 99 ? navItem.notification : "99+"}
                </span>
              )}
              <div className="ml-4 text-nowrap max-md:hidden">
                {navItem.listName}
              </div>
            </Link>
          ))}
        </ul>
        <button
          onClick={handleLogout}
          className="flex hover:text-primary cursor-pointer w-full text-start my-6 text-nowrap"
        >
          <img src={logOutIcon} />
          <div className="ml-4 max-md:hidden">Log out</div>
        </button>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
