import { Link, Outlet, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import messageIcon from "../../assets/icons/message.svg";
import teamIcon from "../../assets/icons/team.svg";
import userIcon from "../../assets/icons/user.svg";
import logo from "../../assets/logo_small.png";

const navItems = [
  {
    id: 1,
    listName: "Enquiries",
    icon: messageIcon,
    path: "/admin",
  },
  {
    id: 2,
    listName: "Team members",
    icon: teamIcon,
    path: "/admin/team",
  },
  {
    id: 3,
    listName: "Profile",
    icon: userIcon,
    path: "/admin/profile",
  },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="bg-secondary flex h-fit text-white">
      <div className="flex flex-col items-center bg-tertiary w-60 p-4">
        <div className="pb-4">
          <img src={logo} alt="Thrive East Logo" className="h-16" />
        </div>
        <ul className="flex flex-col gap-6 w-full border-t-2 border-secondary pt-4">
          {navItems.map((navItem) => (
            <Link
              key={navItem.id}
              to={navItem.path}
              className="flex gap-2 hover:text-primary"
            >
              <img src={navItem.icon} />
              {navItem.listName}
            </Link>
          ))}
        </ul>
        <button
          onClick={handleLogout}
          className="hover:text-primary cursor-pointer w-full text-start my-6"
        >
          Log out
        </button>
      </div>
      <Outlet />
    </div>
  );
}
