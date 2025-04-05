import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLeaf,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdOutlineDesignServices } from "react-icons/md";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const linkVariants = {
    initial: { y: 0 },
    hover: {
      y: -2,
      color: "#16a34a", // Green-600
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  const mobileNavLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo and Brand */}
            <motion.div
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
              className="flex items-center"
            >
              <div
                className={`text-${isScrolled ? "green-600" : "white"} mr-2`}
              >
                <FaLeaf size={28} />
              </div>
              <span
                className={`font-bold text-xl ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Dans Property Maintenance and Pressure Cleaning
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`${
                    isScrolled ? "text-gray-700" : "text-white"
                  } font-medium text-xl hover:text-green-600 transition duration-300`}
                >
                  {link.name}
                </motion.a>
              ))}
              <a href="/contactus">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md flex items-center transition duration-300"
                >
                  <FaPhoneAlt className="mr-2" size={14} />
                  Contact Us
                </motion.button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`${
                  isScrolled ? "text-gray-800" : "text-white"
                } focus:outline-none`}
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg z-50 overflow-y-auto"
          >
            <div className="flex justify-end p-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-800 focus:outline-none"
              >
                <FaTimes size={24} />
              </motion.button>
            </div>

            <div className="px-4 py-4">
              <div className="flex items-center mb-6">
                <div className="text-green-600 mr-2">
                  <FaLeaf size={24} />
                </div>
                <span className="font-bold text-xl text-gray-800">
                  Your Company Name
                </span>
              </div>

              <div className="flex flex-col space-y-4 mb-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    custom={index}
                    variants={mobileNavLinkVariants}
                    initial="hidden"
                    animate="visible"
                    href={link.path}
                    className="text-gray-700 hover:text-green-600 font-medium text-lg py-2 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md flex items-center justify-center mb-6"
              >
                <FaPhoneAlt className="mr-2" size={14} />
                Contact Us
              </motion.button>

              <div className="mt-8">
                <p className="text-gray-500 font-medium mb-4">
                  Contact Information
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <FaPhoneAlt className="mr-3 text-green-600" />
                    <p>(555) 123-4567</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MdEmail className="mr-3 text-green-600" />
                    <p>info@yourcompany.com</p>
                  </div>
                </div>

                <div className="mt-6 flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-200 hover:bg-green-600 hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 hover:bg-green-600 hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 hover:bg-green-600 hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
