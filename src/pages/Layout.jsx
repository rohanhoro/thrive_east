import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import hero_bg from "../assets/pool.jpg";
import Hamburger from "../assets/Hamburger";
import logo from "../assets/logo_small.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState();

  useScrollToTop();

  return (
    <div
      className="relative min-h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${hero_bg})`,
      }}
    >
      <div className="sticky top-0 flex justify-between w-full items-center px-12 py-4 bg-secondary z-10">
        <div>
          <Link to="/">
            <img src={logo} alt="" width={72} />
          </Link>
        </div>

        <nav
          className={`bg-black/50 text-white flex justify-end max-md:w-screen max-md:absolute max-md:h-screen ${
            menuOpen ? "top-0 right-0" : "max-md:hidden"
          } `}
          onClick={() => setMenuOpen(false)}
        >
          <div className={`bg-secondary flex gap-14 py-4 px-6 max-md:px-22 max-md:w-[50%] max-md:pt-16 max-md:flex-col max-sm:px-12  max-xs:w-[70%] `}>
            <Link
              className="hover:text-primary"
              onClick={() => setMenuOpen(false)}
              to="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-primary"
              onClick={() => setMenuOpen(false)}
              to="projects"
            >
              Projects
            </Link>
            <Link
              className="hover:text-primary"
              onClick={() => setMenuOpen(false)}
              to="services"
            >
              Services
            </Link>
            <Link
              className="hover:text-primary"
              onClick={() => setMenuOpen(false)}
              to="aboutus"
            >
              About Us
            </Link>
            <Link
              className="hover:text-primary text-primary font-bold md:hidden"
              onClick={() => setMenuOpen(false)}
              to="contact"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        <Hamburger
          stroke={"white"}
          className={"md:hidden ml-auto"}
          onClick={() => setMenuOpen(!menuOpen)}
          syncState={menuOpen}
        />
        <Button
          className={"max-md:hidden"}
          text={"Contact Us"}
          link={"/contact"}
        />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
