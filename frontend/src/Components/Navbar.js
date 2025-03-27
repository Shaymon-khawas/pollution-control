import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const lastScroll = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#ourinitiative", label: "Our Initiative" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
    { href: "/Register", label: "Login", isButton: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollingUp(currentScroll < lastScroll.current || currentScroll < 10);
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === "/Register") {
      navigate("/Register"); // Redirects correctly to Login page
      return;
    }

    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (href.startsWith("#")) {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 500);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-black text-white shadow-md transition-transform duration-300 z-50 ${
        scrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="cursor-pointer" onClick={(e) => handleClick(e, "/")}>
          <img src="/ENVA-image.png" alt="Logo" className="h-14 w-auto" />
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map(({ href, label, isButton }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className={`relative group text-lg ${
                isButton 
                  ? "bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300" 
                  : ""
              }`}
            >
              <span className={`${!isButton ? "text-white hover:text-gray-300 transition-colors duration-300" : ""}`}>
                {label}
              </span>
              {!isButton && (
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              )}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1.5 p-2"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="py-2 space-y-2">
          {navLinks.map(({ href, label, isButton }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className={`block px-4 py-2 text-lg transition-colors duration-300 ${
                isButton 
                  ? "bg-orange-500 mx-4 text-center rounded-full hover:bg-orange-600"
                  : "text-white hover:text-orange-500"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
