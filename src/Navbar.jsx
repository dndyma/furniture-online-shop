import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className="fixed flex justify-between min-h-[60px]  w-full z-50 bg-white rounded rounded-sm shadow-md">
      <div className="flex items-center">Dandy</div>
      <button
        id="hamburger"
        name="hamburger"
        type="button"
        className=" mr-5 md:hidden "
        onClick={handleClick}
      >
        <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
        <span className="hamburger-line transition duration-300 ease-in-out"></span>
        <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
      </button>
      <div
        className={`flex flex-col mr-3 absolute  gap-5 
        top-[50px] right-0 md:shadow-none shadow-slate-400 shadow-lg bg-white rounded rounded-md p-5
        ${open ? " " : "hidden"}
        md:static
      md:flex-row md:gap-9 md:items-center md:flex`}
      >
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
