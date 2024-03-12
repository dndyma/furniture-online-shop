import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const count = useSelector((state) => state.counter.value);
  return (
    <nav className="fixed flex justify-between min-h-[60px]  w-full z-50 bg-white  rounded-sm shadow-md">
      <div className="flex items-center">
        <a href="#">
          {" "}
          <img
            src="../public/2.png"
            className="ml-9 w-[70px] h-full scale-150"
          />
        </a>
      </div>
      <button
        id="hamburger"
        name="hamburger"
        type="button"
        className={`mr-5 ${open ? "hamburger-active" : "md:hidden"}`}
        onClick={handleClick}
      >
        <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
        <span className="hamburger-line transition duration-300 ease-in-out"></span>
        <span className="hamburger-line origin-bottom-left transition duration-299 ease-in-out"></span>
      </button>
      <div
        className={`text-dark flex flex-col   absolute  gap-5 
        top-[50px] right-0 md:shadow-none shadow-slate-400 shadow-lg bg-white rounded rounded-md p-5
        ${open ? " " : "hidden"}
        md:static
      md:flex-row md:gap-9 md:items-center md:flex font-semibold`}
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
          style={{ cursor: "pointer" }}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="Shopage"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
          style={{ cursor: "pointer" }}
        >
          Shop
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
          style={{ cursor: "pointer" }}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
          style={{ cursor: "pointer" }}
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center mr-11 cursor-pointer relative">
        <Link style={{ position: "relative" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-cart2"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>
        </Link>
        <div className="absolute bg-red-400 text-white w-4 h-4 rounded-full text-center text-[12px] top-4 -right-1">
          {count}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
