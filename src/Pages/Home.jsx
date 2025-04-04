import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaTree,
  FaHandHoldingWater,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdOutlineDesignServices, MdOutlineEco, MdEmail } from "react-icons/md";
import { BsFillSunFill, BsArrowRight } from "react-icons/bs";
import Background from "../images/background.jpg";


const Home = () => {
  const [isHovered, setIsHovered] = useState(null);

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "Nature's Artistry transformed our backyard into an oasis we enjoy year-round. Their attention to detail is remarkable.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Thompson",
      role: "Commercial Property Manager",
      text: "The team delivered beyond our expectations. Our office building entrance now makes a stunning first impression.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emma Rodriguez",
      role: "Restaurant Owner",
      text: "Our outdoor dining area has become the talk of the town thanks to Nature's Artistry's beautiful design.",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
    },
  ];

  // Projects data
  const projects = [
    {
      title: "Modern Zen Garden",
      description:
        "A peaceful retreat featuring natural stone elements and minimalist plantings",
      image:
        "https://i.ytimg.com/vi/J7idlgm7KJg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHpaUW-KeHQAf0QkWDjMQILZZW4w",
    },
    {
      title: "Cottage Garden Oasis",
      description:
        "A lush, colorful garden with flowering perennials and meandering pathways",
      image:
        "https://www.assets.houfy.com/assets/images/properties/15294/cf4130ab64e4adf0af2752696427fee2.jpg",
    },
    {
      title: "Urban Rooftop Garden",
      description:
        "A city sanctuary featuring drought-tolerant plants and outdoor living space",
      image:
        "https://images.squarespace-cdn.com/content/v1/53319e08e4b0870ba2b53baa/1481586465732-F16FFTOJ021MX196WLZX/roof+garden+increase+real+estate+value",
    },
  ];

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

  const serviceHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Animation */}
      <div className="relative h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black z-10"
        ></motion.div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            /*/!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! backgroundimage */
            backgroundImage:
              `url(${Background})`,
          }}
        ></div>

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl xl:text-8xl font-bold mb-4 text-center"
          >
            {/*/!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! title */}
            hello worlddanwkdl
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl text-center"
          >
            Transform your outdoor space into a masterpiece with our premium
            landscaping services
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-medium transition duration-300 flex items-center"
          >
            Free Consultation <BsArrowRight className="ml-2" />
          </motion.button>
        </div>
      </div>

      {/* Services Section with Animation */}
      <div className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              Our Services
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto mb-12"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Service Card 1 */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border-t-4 border-green-600"
              variants={fadeIn}
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={serviceHover}
            >
              <div className="text-green-600 mb-4">
                <MdOutlineDesignServices size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Landscape Design
              </h3>
              <p className="text-gray-600">
                Customized landscape designs that blend aesthetics with
                functionality to enhance your outdoor living space. We create
                detailed 3D renderings to visualize your project.
              </p>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border-t-4 border-green-600"
              variants={fadeIn}
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={serviceHover}
            >
              <div className="text-green-600 mb-4">
                <FaTree size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Garden Installation
              </h3>
              <p className="text-gray-600">
                Professional planting and installation services to bring your
                garden vision to life with vibrant colors and textures. We
                source rare and native plants suited to your environment.
              </p>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border-t-4 border-green-600"
              variants={fadeIn}
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={serviceHover}
            >
              <div className="text-green-600 mb-4">
                <FaHandHoldingWater size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Maintenance
              </h3>
              <p className="text-gray-600">
                Regular garden maintenance and care to keep your landscape
                looking pristine throughout all seasons. We use organic
                practices and smart irrigation systems to minimize water usage.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto mb-12"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                  <button className="mt-4 text-green-600 font-medium flex items-center hover:text-green-700 transition duration-300">
                    View Project <BsArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-md text-lg font-medium transition duration-300">
              View All Projects
            </button>
          </motion.div>
        </div>
      </div>

      {/* Pricing Section */}
      <div
        className="py-20 px-4 md:px-8 bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/UxpWgzrLvrFTLYsryttH4-1280-80.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 "></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              Our Pricing
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto mb-12"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Basic Package */}
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Essential
                </h3>
                <p className="text-gray-600 mb-6">Perfect for small gardens</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold text-gray-800">$499</span>
                  <span className="text-gray-500 ml-2 mb-1">
                    starting price
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />
                    Basic landscape design
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />
                    Plant selection & placement
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />
                    Single garden bed installation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />1 maintenance
                    visit
                  </li>
                </ul>
              </div>
              <div className="p-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-md bg-green-100 text-green-600 font-medium hover:bg-green-200 transition duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-xl border border-green-600 transform scale-105 z-10"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-green-600 text-white text-center py-2">
                <p className="font-medium">Most Popular</p>
              </div>
              <div className="p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Premium
                </h3>
                <p className="text-gray-600 mb-6">
                  For medium-sized landscapes
                </p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold text-gray-800">
                    $1,299
                  </span>
                  <span className="text-gray-500 ml-2 mb-1">
                    starting price
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />
                    Custom landscape design with 3D rendering
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />
                    Premium plant selection & installation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />
                    Small hardscape features
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />
                    Irrigation system setup
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />4 seasonal
                    maintenance visits
                  </li>
                </ul>
              </div>
              <div className="p-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>

            {/* Luxury Package */}
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Luxury
                </h3>
                <p className="text-gray-600 mb-6">
                  Complete landscape transformation
                </p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold text-gray-800">
                    $3,499+
                  </span>
                  <span className="text-gray-500 ml-2 mb-1">
                    starting price
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />
                    Comprehensive master plan with detailed 3D renderings
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />
                    Premium plant selection & full installation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />
                    Custom hardscaping features
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />
                    Water features & lighting design
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />
                    Smart irrigation system
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaLeaf className="text-green-600 mr-2" />
                    12-month maintenance plan
                  </li>
                </ul>
              </div>
              <div className="p-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-md bg-green-100 text-green-600 font-medium hover:bg-green-200 transition duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          
        </div>
      </div>

      {/* About Section with Image and Animation */}
      <div className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                About Our Approach
              </h2>
              <div className="h-1 w-24 bg-green-600 mb-6"></div>
              <p className="text-gray-600 mb-6">
                At Nature's Artistry, we combine artistic vision with
                horticultural expertise to create sustainable, beautiful
                landscapes that thrive in their environment.
              </p>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience, our team of dedicated
                professionals brings passion and precision to every project,
                ensuring your outdoor space becomes a natural extension of your
                home.
              </p>
              <p className="text-gray-600 mb-6">
                We prioritize native plant selections and environmentally
                responsible practices in all our designs, creating resilient
                landscapes that support local ecosystems and reduce resource
                consumption.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  className="flex items-center text-green-600 bg-green-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <MdOutlineEco size={24} />
                  <span className="ml-2 text-gray-700">
                    Eco-friendly Practices
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center text-green-600 bg-green-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaLeaf size={24} />
                  <span className="ml-2 text-gray-700">
                    Sustainable Materials
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center text-green-600 bg-green-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <BsFillSunFill size={24} />
                  <span className="ml-2 text-gray-700">Natural Solutions</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="relative h-96"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://hayleyslandscaping.lk/wp-content/uploads/2022/01/DSC02197-min.jpg"
                  alt="Beautiful landscape garden"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold text-lg">15+ Years</p>
                <p>of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              What Our Clients Say
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto mb-12"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section with Animation */}
      <div className="bg-green-600 py-16 px-4 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 -mr-16 -mt-16 text-green-500 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <FaLeaf size={300} />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Ready to Transform Your Landscape?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-white mb-8"
          >
            Schedule a free consultation with our design experts
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition duration-300 flex items-center justify-center"
            >
              Contact Us <FaPhoneAlt className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
