import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import { BsArrowRight, BsCheck2Circle } from "react-icons/bs";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle the form submission with API call
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Animation */}
      <div className="relative h-80">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black z-10"
        ></motion.div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://cdn.mos.cms.futurecdn.net/aFp9vf4sxrnPDaoi5aXQrF-1280-80.jpg')",
            backgroundPosition: "center 30%",
          }}
        ></div>

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-2xl text-center"
          >
            Let's discuss how we can transform your outdoor space
          </motion.p>
        </div>
      </div>

      {/* Contact Information & Form Section */}
      <div className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-2 bg-gray-50 p-8 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Our Location
                    </h3>
                    <p className="text-gray-600">
                      123 Dan Road 
                      <br />
                      Sydney, Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">0401 452 395</p>
                    <p className="text-gray-500 text-sm">Mon-Fri: 8am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <MdEmail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">dansprop75@gmail.com</p>
                    <p className="text-gray-500 text-sm">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
                    <p className="text-gray-600">Saturday: 9am - 4pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition duration-300"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="#"
                    className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition duration-300"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition duration-300"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition duration-300"
                  >
                    <FaPinterestP size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3 bg-white p-8 rounded-lg shadow-md border border-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Send Us a Message
              </h2>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center"
                >
                  <BsCheck2Circle className="text-green-600 text-4xl mr-4" />
                  <div>
                    <h3 className="font-semibold text-green-800 text-lg">
                      Thank you!
                    </h3>
                    <p className="text-green-700">
                      Your message has been sent successfully. We'll get back to
                      you shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-1"
                      >
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-1"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-gray-700 mb-1"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Select a service</option>
                        <option value="landscape-design">
                          Landscape Design
                        </option>
                        <option value="garden-installation">
                          Garden Installation
                        </option>
                        <option value="maintenance">Maintenance</option>
                        <option value="hardscape">
                          Hardscape Construction
                        </option>
                        <option value="irrigation">Irrigation Systems</option>
                        <option value="eco-consulting">
                          Eco-Friendly Consulting
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-1"
                    >
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Tell us about your project or ask questions..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300 flex items-center"
                  >
                    Send Message <MdSend className="ml-2" />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Find Us
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our office for a face-to-face consultation with our
              landscape design experts
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg h-96"
          >
            {/* This would normally be a Google Maps or other map embed */}
              {/**<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424402.6861861317!2d150.61385170000003!3d-33.795639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c6dc7e0a32507%3A0xdc0274d6363a8ed4!2sDans%20property%20maintenance%20and%20pressure%20cleaning!5e0!3m2!1sen!2sau!4v1743816805928!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <div className="w-full h-screen">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424402.6861861317!2d150.61385170000003!3d-33.795639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c6dc7e0a32507%3A0xdc0274d6363a8ed4!2sDans%20property%20maintenance%20and%20pressure%20cleaning!5e0!3m2!1sen!2sau!4v1743816805928!5m2!1sen!2sau" 
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
