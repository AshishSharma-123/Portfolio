import React, { useRef, useState } from "react"; // Added useRef and useState
import emailjs from "@emailjs/browser"; // Added EmailJS import
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "./assets/profile.png";

function App() {
  // 1. Setup Form References and Loading States
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const skills = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Flask",
    "SQL",
    "NumPy",
    "Pandas",
    "Scikit-Learn",
    "OpenCV",
    "LangChain",
    "FAISS",
    "Git",
    "GitHub",
  ];

  // 2. Email Submission Handler
  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // PASTE YOUR EMAILJS STRINGS HERE:
    const serviceID = "service_5v4qggm"; 
    const templateID = "template_0a5ukuc"; 
    const publicKey = "tHcrYuaZJBSsp1eia"; 

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(
        () => {
          setLoading(false);
          alert("Thank you! Your message has been sent successfully.");
          formRef.current.reset(); // Clears form fields
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again or contact me directly.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-6 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
        <h1 className="text-2xl font-bold text-blue-500">
          Ashish Sharma
        </h1>

        <div className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#education" className="hover:text-blue-400 transition">
            Education
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-10 py-20 flex flex-col-reverse md:flex-row items-center justify-between"
      >
        <div className="md:w-1/2">
          <p className="text-blue-400 text-lg mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Ashish
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
            Software Developer | AI & Machine Learning Enthusiast
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            I build AI-powered web applications using Python,
            Flask, LangChain, FAISS, OpenCV and modern web
            technologies. Passionate about solving real-world
            problems through software and artificial intelligence.
          </p>

          <div className="flex gap-4 flex-wrap items-center">
            <a 
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition inline-block text-center"
            >
              View Projects
            </a>

            <a
              href="https://drive.google.com/file/d/16kC68zpit2dfd2n0Z4qaUwy-bWZHna4C/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-600 hover:border-blue-500 px-6 py-3 rounded-lg transition inline-block text-center"
            >
              Resume
            </a>
          </div>

          <div className="flex gap-6 mt-10 text-3xl">
            <a
              href="https://github.com/AshishSharma-123"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ashishsharmahr16/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={profile}
            alt="Ashish"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-blue-500 object-cover shadow-lg"
          />
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-10 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Who I Am
            </h3>

            <p className="text-slate-300 leading-8">
              I am a Computer Science undergraduate with a
              strong interest in Artificial Intelligence,
              Machine Learning, Full Stack Development, and
              Software Engineering.
              <br /><br />
              I have built projects involving Retrieval-
              Augmented Generation (RAG), Face Recognition,
              AI Chatbots, and intelligent web applications
              using Python, Flask, LangChain, FAISS, and
              OpenCV.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Overview
            </h3>
            <p className="text-slate-300 leading-8">
              Driven to transform complex algorithmic logic into elegant, 
              scalable user interfaces. Always excited to learn newer technologies 
              at the cross-section of LLMs and web engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-6xl mx-auto px-10 py-20 border-t border-slate-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold text-blue-400">
              Bachelor of Technology in Computer Science
            </h3>
            <p className="mt-3 text-slate-300">
              The Technological Institute of Textile and Sciences, Bhiwani
            </p>
            <p className="text-slate-400 mt-2">
              2022 - 2026
            </p>
            <p className="text-slate-400 mt-2">
              CGPA: 7.41 (Till 7th Semester)
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold text-blue-400">
              12th Class (Non-Medical)
            </h3>
            <p className="mt-3 text-slate-300">
              K M Public School, Bhiwani
            </p>
            <p className="text-slate-400 mt-2">
              2021 - 2022
            </p>
            <p className="text-slate-400 mt-2">
              Percentage: 79.6%
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-10 py-20 border-t border-slate-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* DocuMind AI */}
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              DocuMind AI
            </h3>
            <p className="text-slate-300 mb-4">
              Retrieval-Augmented Generation (RAG) application
              that allows users to upload PDF documents and ask
              questions in natural language. Provides context-aware
              answers using AI.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-slate-800 px-3 py-1 rounded">Python</span>
              <span className="bg-slate-800 px-3 py-1 rounded">Flask</span>
              <span className="bg-slate-800 px-3 py-1 rounded">LangChain</span>
              <span className="bg-slate-800 px-3 py-1 rounded">FAISS</span>
              <span className="bg-slate-800 px-3 py-1 rounded">Firebase</span>
            </div>
            <a
              href="https://github.com/AshishSharma-123/DocuMind-AI-RAG-Project/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              View Project →
            </a>
          </div>

          {/* Face Recognition */}
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Face Recognition System
            </h3>
            <p className="text-slate-300 mb-4">
              Developed a real-time face recognition application
              using OpenCV and Python capable of detecting and
              recognizing faces from live video streams.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-slate-800 px-3 py-1 rounded">Python</span>
              <span className="bg-slate-800 px-3 py-1 rounded">OpenCV</span>
              <span className="bg-slate-800 px-3 py-1 rounded">Computer Vision</span>
            </div>
            <a
              href="https://github.com/AshishSharma-123/face-recognition-flask"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              View Project →
            </a>
          </div>

          {/* AI Chatbot */}
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              AI Chatbot
            </h3>
            <p className="text-slate-300 mb-4">
              Built an AI-powered chatbot capable of understanding
              user queries and generating intelligent responses
              using modern language models.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-slate-800 px-3 py-1 rounded">Python</span>
              <span className="bg-slate-800 px-3 py-1 rounded">Flask</span>
              <span className="bg-slate-800 px-3 py-1 rounded">LLM</span>
            </div>
            <a
              href="https://chatbot-n3q4.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-10 py-20 border-t border-slate-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 p-5 rounded-xl border border-slate-800 text-center hover:border-blue-500 hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-10 py-20 border-t border-slate-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Let's Connect
            </h3>

            <p className="text-slate-300 leading-8 mb-6">
              I am actively looking for Software Developer,
              Python Developer, AI/ML and Full-Stack Development
              opportunities.
              <br /><br />
              If you have an internship, job opportunity,
              project collaboration, or just want to connect,
              feel free to send me a message.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-blue-400 font-semibold">Email</p>
                <a 
                  href="mailto:ashishsharmahr16@gmail.com" 
                  className="text-slate-300 hover:text-blue-400 break-all"
                >
                  ashishsharmahr16@gmail.com
                </a>
              </div>

              <div>
                <p className="text-blue-400 font-semibold">Location</p>
                <p className="text-slate-300">Bhiwani, Haryana, India</p>
              </div>

              <div>
                <p className="text-blue-400 font-semibold">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/ashishsharmahr16/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-blue-400 break-all"
                >
                  linkedin.com/in/ashishsharmahr16
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
            {/* 3. Bound formRef and onSubmit event handler here */}
            <form ref={formRef} onSubmit={handleSendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-blue-500 text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-blue-500 text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-blue-500 text-white resize-none"
                />
              </div>

              {/* 4. Added dynamically disabled button and interactive text */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  loading
                    ? "bg-blue-800 text-slate-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center">
        <p className="text-slate-500">
          © 2026 Ashish. Built with React & Tailwind CSS.
        </p>
      </footer>

    </div>
  );
}

export default App;