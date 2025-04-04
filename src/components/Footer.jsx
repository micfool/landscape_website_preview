import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaArrowRight,
  FaHeart
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Landscape Design", url: "#" },
        { name: "Garden Installation", url: "#" },
        { name: "Maintenance", url: "#" },
        { name: "Hardscaping", url: "#" },
        { name: "Water Features", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", url: "#" },
        { name: "Our Team", url: "#" },
        { name: "Portfolio", url: "#" },
        { name: "Testimonials", url: "#" },
        { name: "Careers", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", url: "#" },
        { name: "Plant Guide", url: "#" },
        { name: "FAQ", url: "#" },
        { name: "Care Tips", url: "#" },
        { name: "Privacy Policy", url: "#" },
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! ${email} has been subscribed to our newsletter.`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
     

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="flex items-center mb-4">
                <FaLeaf className="text-green-500 text-2xl mr-2" />
                <h3 className="text-xl font-bold">Your Company</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Transforming outdoor spaces into beautiful, functional landscapes that connect people with nature and enhance property value.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-green-500 mr-3" />
                  <p className="text-gray-300">Your Company Address</p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-green-500 mr-3" />
                  <p className="text-gray-300">(123) 456-7890</p>
                </div>
                <div className="flex items-center">
                  <MdEmail className="text-green-500 mr-3" />
                  <p className="text-gray-300">info@yourcompany.com</p>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                {[FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeIn, transition: { delay: 0.1 * (index + 1), duration: 0.6 } }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">{category.title}</h4>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-green-500 transition duration-300 flex items-center"
                      onMouseEnter={() => setIsHovered(`${index}-${linkIndex}`)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <span className="inline-block w-5">
                        {isHovered === `${index}-${linkIndex}` && (
                          <motion.span
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-green-500"
                          >
                            <FaArrowRight size={12} />
                          </motion.span>
                        )}
                      </span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Certification Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 py-8 border-t border-b border-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {['Certified Landscapers', 'Eco-Friendly Business', 'Professional Association', 'Best of 2024', 'Top Rated Service'].map((badge, index) => (
            <div key={index} className="flex items-center bg-gray-800 px-4 py-2 rounded-full">
              <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mr-2">
                <FaLeaf className="text-white text-xs" />
              </div>
              <span className="text-sm text-gray-300">{badge}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Copyright */}
        <div className="text-center mt-12">
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Your Company. All rights reserved. 
            <span className="inline-flex items-center ml-1">
              Made with <FaHeart className="text-green-600 mx-1" size={14} /> in Australia
            </span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;