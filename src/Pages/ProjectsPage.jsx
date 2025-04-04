import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaPhoneAlt,
  FaFilter,
  FaClock,
  FaUsers,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BsArrowRight, BsCheck2Circle, BsStarFill } from "react-icons/bs";
import { GiStonePath} from "react-icons/gi";
import { GiFlowers } from "react-icons/gi";

import { MdOutlineDesignServices, MdOutlineEco } from "react-icons/md";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedProject, setExpandedProject] = useState(null);

  // Project categories
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "garden", name: "Garden Design" },
    { id: "hardscape", name: "Hardscape" },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Modern Zen Garden",
      category: "residential",
      description:
        "A peaceful retreat featuring natural stone elements and minimalist plantings",
      fullDescription:
        "This award-winning residential project transformed a standard backyard into a tranquil zen garden. We incorporated large natural stone boulders, a custom water feature, and carefully selected low-maintenance plants to create a peaceful atmosphere that requires minimal upkeep.",
      location: "Portland, OR",
      completionTime: "8 weeks",
      clientName: "The Johnson Family",
      services: [
        "Landscape Design",
        "Garden Installation",
        "Water Features",
        "Lighting Design",
      ],
      image:
        "https://i.ytimg.com/vi/J7idlgm7KJg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHpaUW-KeHQAf0QkWDjMQILZZW4w",
      gallery: [
        "https://i.ytimg.com/vi/J7idlgm7KJg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHpaUW-KeHQAf0QkWDjMQILZZW4w",
        "https://cdn.mos.cms.futurecdn.net/aFp9vf4sxrnPDaoi5aXQrF-1280-80.jpg",
        "https://hayleyslandscaping.lk/wp-content/uploads/2022/01/DSC02197-min.jpg",
      ],
      testimonial: {
        text: "The zen garden completely transformed how we use our outdoor space. We spend time there every day now, and it's become our favorite place to relax.",
        author: "Sarah Johnson",
      },
    },
    {
      id: 2,
      title: "Cottage Garden Oasis",
      category: "garden",
      description:
        "A lush, colorful garden with flowering perennials and meandering pathways",
      fullDescription:
        "This charming cottage garden features over 45 varieties of flowering perennials, creating a continuous bloom cycle from early spring through late fall. Custom stone pathways wind through the lush plantings, creating intimate garden rooms and hidden seating areas.",
      location: "Seattle, WA",
      completionTime: "6 weeks",
      clientName: "Elizabeth & Robert Wilson",
      services: [
        "Garden Design",
        "Plant Selection",
        "Irrigation Installation",
        "Ongoing Maintenance",
      ],
      image:
        "https://www.assets.houfy.com/assets/images/properties/15294/cf4130ab64e4adf0af2752696427fee2.jpg",
      gallery: [
        "https://www.assets.houfy.com/assets/images/properties/15294/cf4130ab64e4adf0af2752696427fee2.jpg",
        "https://cdn.mos.cms.futurecdn.net/aFp9vf4sxrnPDaoi5aXQrF-1280-80.jpg",
        "https://hayleyslandscaping.lk/wp-content/uploads/2022/01/DSC02197-min.jpg",
      ],
      testimonial: {
        text: "Working with your team was a dream. They understood our vision perfectly and created a garden that looks like it's been established for decades.",
        author: "Elizabeth Wilson",
      },
    },
    {
      id: 3,
      title: "Urban Rooftop Garden",
      category: "commercial",
      description:
        "A city sanctuary featuring drought-tolerant plants and outdoor living space",
      fullDescription:
        "This 3,500 sq. ft. rooftop garden provides an urban oasis for a downtown office building. The design incorporates lightweight planters, custom seating areas, and drought-tolerant plantings that can withstand harsh rooftop conditions. The space includes a dining area, shade structures, and ambient lighting for evening events.",
      location: "Chicago, IL",
      completionTime: "12 weeks",
      clientName: "Skyline Properties",
      services: [
        "Commercial Design",
        "Lightweight Construction",
        "Drought-Tolerant Planting",
        "Custom Furniture",
      ],
      image:
        "https://images.squarespace-cdn.com/content/v1/53319e08e4b0870ba2b53baa/1481586465732-F16FFTOJ021MX196WLZX/roof+garden+increase+real+estate+value",
      gallery: [
        "https://images.squarespace-cdn.com/content/v1/53319e08e4b0870ba2b53baa/1481586465732-F16FFTOJ021MX196WLZX/roof+garden+increase+real+estate+value",
        "https://cdn.mos.cms.futurecdn.net/aFp9vf4sxrnPDaoi5aXQrF-1280-80.jpg",
        "https://hayleyslandscaping.lk/wp-content/uploads/2022/01/DSC02197-min.jpg",
      ],
      testimonial: {
        text: "The rooftop garden has become a major selling point for our building. Tenants love having access to outdoor space in the heart of downtown.",
        author: "James Reynolds, Skyline Properties",
      },
    },
    {
      id: 4,
      title: "Mediterranean Villa Landscape",
      category: "residential",
      description:
        "An elegant landscape design inspired by the Mediterranean coast",
      fullDescription:
        "This Mediterranean-inspired landscape complements the architecture of this luxury home with olive trees, cypress, lavender, and rosemary. The design includes a custom limestone fountain, terra cotta planters, and a covered outdoor kitchen with vine-covered pergola.",
      location: "San Diego, CA",
      completionTime: "16 weeks",
      clientName: "The Garcia Family",
      services: [
        "Landscape Architecture",
        "Hardscape Construction",
        "Water Feature Design",
        "Outdoor Kitchen",
      ],
      image:
        "https://cdn.mos.cms.futurecdn.net/aFp9vf4sxrnPDaoi5aXQrF-1280-80.jpg",
      gallery: [
        "https://cdn.mos.cms.futurecdn.net/aFp9vf4sxrnPDaoi5aXQrF-1280-80.jpg",
        "https://hayleyslandscaping.lk/wp-content/uploads/2022/01/DSC02197-min.jpg",
        "https://www.assets.houfy.com/assets/images/properties/15294/cf4130ab64e4adf0af2752696427fee2.jpg",
      ],
      testimonial: {
        text: "Every detail of our landscape is perfect. It truly feels like being transported to the Mediterranean every time we step outside.",
        author: "Elena Garcia",
      },
    },
    {
      id: 5,
      title: "Corporate Campus Renovation",
      category: "commercial",
      description:
        "Comprehensive landscape renovation for a multi-building corporate campus",
      fullDescription:
        "This ambitious project revitalized 5 acres of outdated landscape surrounding a technology company's headquarters. The new design incorporates sustainable water management features, native prairie gardens, outdoor meeting spaces, and walking paths that connect multiple buildings.",
      location: "Austin, TX",
      completionTime: "24 weeks",
      clientName: "TechVision Inc.",
      services: [
        "Campus Master Planning",
        "Sustainability Consulting",
        "Native Landscapes",
        "Stormwater Management",
      ],
      image:
        "https://hayleyslandscaping.lk/wp-content/uploads/2022/01/DSC02197-min.jpg",
      gallery: [
        "https://hayleyslandscaping.lk/wp-content/uploads/2022/01/DSC02197-min.jpg",
        "https://cdn.mos.cms.futurecdn.net/aFp9vf4sxrnPDaoi5aXQrF-1280-80.jpg",
        "https://www.assets.houfy.com/assets/images/properties/15294/cf4130ab64e4adf0af2752696427fee2.jpg",
      ],
      testimonial: {
        text: "Our new campus landscape has improved employee satisfaction and reduced our water usage by 65%. It's a win-win for our company culture and sustainability goals.",
        author: "Mark Chen, Facilities Director at TechVision",
      },
    },
    {
      id: 6,
      title: "Contemporary Stone Patio",
      category: "hardscape",
      description:
        "A modern outdoor living space featuring clean lines and natural materials",
      fullDescription:
        "This contemporary hardscape project features a multi-level patio using large-format porcelain pavers, built-in seating, a fire pit, and integrated LED lighting. The design creates distinct zones for dining, lounging, and entertaining while maintaining a cohesive aesthetic.",
      location: "Denver, CO",
      completionTime: "10 weeks",
      clientName: "The Miller Family",
      services: [
        "Hardscape Design",
        "Custom Stonework",
        "Outdoor Living Spaces",
        "Lighting Design",
      ],
      image:
        "https://i.ytimg.com/vi/J7idlgm7KJg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHpaUW-KeHQAf0QkWDjMQILZZW4w",
      gallery: [
        "https://i.ytimg.com/vi/J7idlgm7KJg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHpaUW-KeHQAf0QkWDjMQILZZW4w",
        "https://cdn.mos.cms.futurecdn.net/aFp9vf4sxrnPDaoi5aXQrF-1280-80.jpg",
        "https://hayleyslandscaping.lk/wp-content/uploads/2022/01/DSC02197-min.jpg",
      ],
      testimonial: {
        text: "The outdoor living space has essentially become another room of our home. The quality of the stonework and attention to detail is exceptional.",
        author: "David Miller",
      },
    },
  ];

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Animation variants
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

  const projectHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Animation */}
      <div className="relative h-96">
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
              "url('https://i.ytimg.com/vi/J7idlgm7KJg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHpaUW-KeHQAf0QkWDjMQILZZW4w')",
          }}
        ></div>

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl text-center"
          >
            Explore our portfolio of beautiful landscape transformations
          </motion.p>
        </div>
      </div>

      {/* Project Filters */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full text-lg transition-all duration-300 flex items-center ${
                  activeFilter === category.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.id === "all" && <FaFilter className="mr-2" />}
                {category.id === "residential" && <FaUsers className="mr-2" />}
                {category.id === "commercial" && (
                  <FaMapMarkerAlt className="mr-2" />
                )}
                {category.id === "garden" && <GiFlowers className="mr-2" />}
                {category.id === "hardscape" && (
                  <GiStonePath className="mr-2" />
                )}
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-6 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                variants={fadeIn}
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={projectHover}
                onClick={() => setExpandedProject(project)}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-xs uppercase font-bold rounded-full px-3 py-1">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-500 text-sm">
                      <FaMapMarkerAlt className="mr-1" />
                      {project.location}
                    </div>
                    <button className="text-green-600 font-medium flex items-center hover:text-green-700 transition duration-300">
                      View Details <BsArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Project Modal */}
      {expandedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <div className="h-80 overflow-hidden">
                <img
                  src={expandedProject.image}
                  alt={expandedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => setExpandedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800 hover:bg-gray-100"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">
                {expandedProject.title}
              </h2>
              <div className="flex items-center mb-6">
                <span className="bg-green-100 text-green-800 text-sm font-medium mr-4 px-3 py-1 rounded-full">
                  {expandedProject.category.charAt(0).toUpperCase() +
                    expandedProject.category.slice(1)}
                </span>
                <div className="flex items-center text-gray-500">
                  <FaMapMarkerAlt className="mr-1" />
                  {expandedProject.location}
                </div>
              </div>

              <p className="text-gray-700 mb-8">
                {expandedProject.fullDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Project Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FaClock className="text-green-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium">Timeline</h4>
                        <p className="text-gray-600">
                          {expandedProject.completionTime}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaUsers className="text-green-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium">Client</h4>
                        <p className="text-gray-600">
                          {expandedProject.clientName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Services Provided
                  </h3>
                  <ul className="space-y-2">
                    {expandedProject.services.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <BsCheck2Circle className="text-green-600 mr-2" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Project Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {expandedProject.gallery.map((image, index) => (
                  <div key={index} className="h-48 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${expandedProject.title} image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-600 mb-8">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex mr-2">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                  </div>
                </div>
                <p className="text-gray-700 italic mb-2">
                  "{expandedProject.testimonial.text}"
                </p>
                <p className="text-gray-600 font-medium">
                  — {expandedProject.testimonial.author}
                </p>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setExpandedProject(null)}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-300"
                >
                  Close
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition duration-300 flex items-center">
                  Request Similar Project <BsArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
              Our Project Process
            </h2>
            <div className="h-1 w-24 bg-green-600 mx-auto mb-12"></div>
          </motion.div>

          <div className="relative">
            {/* Process Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-100 transform -translate-x-1/2"></div>

            {/* Step 1 */}
            <motion.div
              className="relative flex flex-col md:flex-row mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Initial Consultation
                </h3>
                <p className="text-gray-600">
                  We meet to understand your vision, assess your space, and
                  discuss your budget and timeline. This helps us create a
                  project plan tailored to your specific needs.
                </p>
              </div>
              <div className="hidden md:flex absolute left-1/2 items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white transform -translate-x-1/2">
                1
              </div>
              <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0"></div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="relative flex flex-col md:flex-row mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2 md:pr-12"></div>
              <div className="hidden md:flex absolute left-1/2 items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white transform -translate-x-1/2">
                2
              </div>
              <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Design & Planning
                </h3>
                <p className="text-gray-600">
                  Our designers create a detailed concept based on your
                  requirements. We present you with thorough plans including 3D
                  renderings, material selections, and plant choices.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="relative flex flex-col md:flex-row mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Implementation
                </h3>
                <p className="text-gray-600">
                  Our skilled team brings your design to life, handling all
                  aspects of construction and installation with meticulous
                  attention to detail and quality craftsmanship.
                </p>
              </div>
              <div className="hidden md:flex absolute left-1/2 items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white transform -translate-x-1/2">
                3
              </div>
              <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0"></div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="relative flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2 md:pr-12"></div>
              <div className="hidden md:flex absolute left-1/2 items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white transform -translate-x-1/2">
                4
              </div>
              <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Follow-up & Care
                </h3>
                <p className="text-gray-600">
                  We provide detailed care instructions and offer ongoing
                  maintenance services to ensure your landscape continues to
                  thrive and fulfill your vision long-term.
                </p>
              </div>
            </motion.div>
          </div>
          
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

export default ProjectsPage;
