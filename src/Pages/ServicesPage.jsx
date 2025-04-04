import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaTree,
  FaHandHoldingWater,
  FaPhoneAlt,
  FaSeedling,
  FaWater,
  FaRulerCombined,
  
} from "react-icons/fa";
import { LuShovel } from "react-icons/lu";

import { MdOutlineDesignServices, MdOutlineEco, MdEmail, MdLandscape, MdAutoAwesomeMosaic } from "react-icons/md";
import { BsFillSunFill, BsArrowRight, BsCheck2Circle } from "react-icons/bs";
import { GiWateringCan, GiStonePath, GiGardeningShears } from "react-icons/gi";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Services data
  const services = [
    {
      id: 1,
      title: "Landscape Design",
      description: "Custom design solutions tailored to your space, preferences, and local climate.",
      icon: <MdOutlineDesignServices size={48} />,
      category: "design",
      features: [
        "3D visualizations",
        "Detailed planting plans",
        "Material selection",
        "Budget-conscious options",
      ],
      image: "https://cdn.mos.cms.futurecdn.net/aFp9vf4sxrnPDaoi5aXQrF-1280-80.jpg",
    },
    {
      id: 2,
      title: "Garden Installation",
      description: "Professional planting and installation services with premium plants and materials.",
      icon: <FaTree size={48} />,
      category: "installation",
      features: [
        "Native plant selection",
        "Soil preparation",
        "Precision planting",
        "Mulching and finishing",
      ],
      image: "https://hayleyslandscaping.lk/wp-content/uploads/2022/01/DSC02197-min.jpg",
    },
    {
      id: 3,
      title: "Garden Maintenance",
      description: "Regular care to keep your landscape looking pristine throughout all seasons.",
      icon: <FaHandHoldingWater size={48} />,
      category: "maintenance",
      features: [
        "Seasonal pruning",
        "Organic fertilization",
        "Pest management",
        "Irrigation monitoring",
      ],
      image: "https://www.assets.houfy.com/assets/images/properties/15294/cf4130ab64e4adf0af2752696427fee2.jpg",
    },
    {
      id: 4,
      title: "Hardscape Construction",
      description: "Create stunning outdoor living spaces with premium materials and expert craftsmanship.",
      icon: <GiStonePath size={48} />,
      category: "installation",
      features: [
        "Patios and walkways",
        "Retaining walls",
        "Outdoor kitchens",
        "Fire features",
      ],
      image: "https://i.ytimg.com/vi/J7idlgm7KJg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHpaUW-KeHQAf0QkWDjMQILZZW4w",
    },
    {
      id: 5,
      title: "Irrigation Systems",
      description: "Water-efficient irrigation solutions designed for your specific landscape needs.",
      icon: <FaWater size={48} />,
      category: "installation",
      features: [
        "Smart controllers",
        "Drip irrigation",
        "Rainwater harvesting",
        "Water conservation",
      ],
      image: "https://images.squarespace-cdn.com/content/v1/53319e08e4b0870ba2b53baa/1481586465732-F16FFTOJ021MX196WLZX/roof+garden+increase+real+estate+value",
    },
    {
      id: 6,
      title: "Eco-Friendly Consulting",
      description: "Expert guidance on creating sustainable and environmentally friendly landscapes.",
      icon: <MdOutlineEco size={48} />,
      category: "design",
      features: [
        "Native plant selection",
        "Water conservation",
        "Habitat creation",
        "Sustainable materials",
      ],
      image: "https://cdn.mos.cms.futurecdn.net/aFp9vf4sxrnPDaoi5aXQrF-1280-80.jpg",
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

  // Filter services based on active tab
  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Animation */}
      <div className="relative h-96">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black z-10"
        ></motion.div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://hayleyslandscaping.lk/wp-content/uploads/2022/01/DSC02197-min.jpg')",
            backgroundPosition: "center bottom",
          }}
        ></div>

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl text-center"
          >
            Expert landscaping solutions tailored to your vision
          </motion.p>
        </div>
      </div>

      {/* Services Filter */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ${
                activeTab === "design"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => setActiveTab("installation")}
              className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ${
                activeTab === "installation"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Installation
            </button>
            <button
              onClick={() => setActiveTab("maintenance")}
              className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ${
                activeTab === "maintenance"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Maintenance
            </button>
          </motion.div>
        </div>
      </div>

      {/* Services Cards with Animation */}
      <div className="py-6 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                variants={fadeIn}
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={serviceHover}
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-green-600 mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center mb-2">
                            <BsCheck2Circle className="text-green-600 mr-2" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="text-green-600 font-medium flex items-center hover:text-green-700 transition duration-300 mt-auto">
                      Learn More <BsArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              Our Process
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto mb-12"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <MdOutlineDesignServices size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">
                We meet to discuss your vision, needs, budget, and timeline for your project.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <MdAutoAwesomeMosaic size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design & Planning</h3>
              <p className="text-gray-600">
                We create detailed designs and proposals based on your requirements and preferences.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <LuShovel size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Installation</h3>
              <p className="text-gray-600">
                Our expert team brings your design to life with careful attention to detail.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <GiWateringCan size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Care</h3>
              <p className="text-gray-600">
                We provide maintenance services to ensure your landscape thrives for years to come.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto mb-12"></div>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* FAQ Item 1 */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                How much does a landscape design cost?
              </h3>
              <p className="text-gray-600">
                Design costs vary based on property size, complexity, and project scope. We offer tiered design packages starting at $X. During your initial consultation, we'll discuss your budget and provide transparent pricing options.
              </p>
            </motion.div>

            {/* FAQ Item 2 */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                How long does a typical landscaping project take?
              </h3>
              <p className="text-gray-600">
                Project timelines depend on scope and complexity. Small garden installations may take just a few days, while complete landscape transformations could span several weeks. We provide detailed timelines during the planning phase and keep you updated throughout the process.
              </p>
            </motion.div>

            {/* FAQ Item 3 */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Do you offer maintenance services after installation?
              </h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive maintenance packages tailored to your landscape's specific needs. Our services include regular pruning, fertilization, pest management, irrigation monitoring, and seasonal clean-ups to keep your landscape looking its best year-round.
              </p>
            </motion.div>

            {/* FAQ Item 4 */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                What makes your landscaping services eco-friendly?
              </h3>
              <p className="text-gray-600">
                We prioritize sustainable practices including native plant selection, water-efficient irrigation systems, organic fertilizers, integrated pest management, and locally-sourced materials when possible. Our designs consider local ecosystems and aim to reduce resource consumption while creating beautiful landscapes.
              </p>
            </motion.div>
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
            Ready to Start Your Landscape Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-white mb-8"
          >
            Contact us today for a free consultation and quote
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
              Schedule Consultation <BsArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;