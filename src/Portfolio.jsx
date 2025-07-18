import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import profile from "./assets/profile.jpg";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
const resume = "/R_Rahul_21cse156.pdf";

const typingTexts = ["Software Developer", "UI/UX Designer", "Editor"];

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [backspace, setBackspace] = useState(false);

  useEffect(() => {
    if (subIndex === typingTexts[index].length + 1 && !backspace) {
      setTimeout(() => setBackspace(true), 1000);
    } else if (subIndex === 0 && backspace) {
      setBackspace(false);
      setIndex((prev) => (prev + 1) % typingTexts.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => (backspace ? prev - 1 : prev + 1));
      setText(typingTexts[index].substring(0, subIndex));
    }, backspace ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, backspace]);

  return <span className="text-violet-500 dark:text-violet-300 font-bold">{text}|</span>;
};

const Card = ({ children }) => (
  <motion.div
    className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg text-black dark:text-white border border-violet-500 hover:shadow-violet-500/50 transition duration-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded-full font-semibold border hover:scale-105 transition-all ${className}`} {...props}>
    {children}
  </button>
);

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen font-sans transition duration-300`}>

      {/* Navbar */}
      <section className="py-6 px-4 max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-heading font-bold text-violet-500">Hi Guys</h1>
        <div className="flex items-center gap-3">
          <a href={resume} download>
            <Button className="bg-violet-600 border-violet-300 text-white dark:text-white">Download Resume</Button>
          </a>
        </div>
      </section>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-10 text-center">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-2 text-black dark:text-white">RAHUL</h2>
        <p className="text-lg md:text-2xl mb-4">
          <TypingEffect />
        </p>
      </section>

      {/* Introduce Myself */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-2/3 space-y-4 text-left">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white">
            LET ME <span className="text-violet-500 dark:text-violet-400">INTRODUCE</span> MYSELF
          </h2>
          <p className="text-md md:text-lg leading-relaxed">I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
          <p className="text-md md:text-lg leading-relaxed">I am fluent in classics like <span className="text-violet-500 dark:text-violet-400 font-semibold">HTML</span>, <span className="text-violet-500 dark:text-violet-400 font-semibold">JavaScript</span>, and <span className="text-violet-500 dark:text-violet-400 font-semibold">React</span>.</p>
          <p className="text-md md:text-lg leading-relaxed">I love building new <span className="text-violet-500 dark:text-violet-400 font-semibold">Web Technologies and Products</span>, and exploring areas related to <span className="text-violet-500 dark:text-violet-400 font-semibold">UI/UX</span>.</p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img src={profile} alt="Rahul Avatar" className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-violet-500 shadow-lg" />
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center space-y-10">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-heading font-semibold text-violet-500 dark:text-violet-400" viewport={{ once: true }}>Skills</motion.h3>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          {["HTML", "CSS", "JavaScript", "React", "Node.js", "MySQL", "Tailwind CSS", "Git"].map((skill, i) => (
            <motion.div key={i} className="bg-white/10 backdrop-blur-md text-black dark:text-white px-6 py-4 rounded-xl border border-violet-500 shadow-lg hover:shadow-violet-500/60 hover:scale-105 transition-all duration-300 font-semibold text-lg" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.1, delay: i * 0.1 }} viewport={{ once: true }}>
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center space-y-6">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-heading font-semibold text-violet-500 dark:text-violet-400" viewport={{ once: true }}>Projects</motion.h3>
        <motion.div className="grid md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
          {[{
            name: "Employee Performance Tracker",
            desc: "Track employee attendance and performance with modern UI.",
            img: project1,
            github: "https://github.com/rahulrathinam/EployeePerformance",
            live: "#"
          }, {
            name: "EcoNest",
            desc: "Eco-cart website with discount via email registration.",
            img: project2,
            github: "https://github.com/rahulrathinam/Econest-Frontend",
            live: "https://econestshop.netlify.app/"
          }].map((project, i) => (
            <Card key={i}>
              <img src={project.img} alt={project.name} className="rounded-lg mb-4 shadow-md" />
              <h4 className="text-xl font-semibold mb-1">{project.name}</h4>
              <p className="text-sm mb-2">{project.desc}</p>
              <div className="flex justify-center gap-3">
                <a href={project.github} target="_blank"><Button className="border-violet-500 text-black dark:text-white">GitHub</Button></a>
                <a href={project.live} target="_blank"><Button className="bg-white text-black">Live</Button></a>
              </div>
            </Card>
          ))}
        </motion.div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center space-y-10">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-heading font-semibold text-violet-500 dark:text-violet-400" viewport={{ once: true }}>Contact</motion.h3>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
          {[{
            icon: <FaEnvelope size={22} />,
            label: "Email",
            value: "rahulrathinam012@gmail.com",
            href: "mailto:rahulrathinam012@gmail.com"
          }, {
            icon: <FaGithub size={22} />,
            label: "GitHub",
            value: "github.com/rahulrathinam",
            href: "https://github.com/rahulrathinam"
          }, {
            icon: <FaLinkedin size={22} />,
            label: "LinkedIn",
            value: "LinkedIn (update link)",
            href: "#"
          }, {
            icon: <FaMapMarkerAlt size={22} />,
            label: "Location",
            value: "Erode",
            href: null
          }].map((item, i) => (
            <motion.div key={i} className="bg-white/10 backdrop-blur-md text-black dark:text-white p-6 rounded-xl border border-violet-500 hover:shadow-violet-500/60 hover:scale-105 transition-all duration-300" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}>
              <div className="flex items-center justify-center gap-3 mb-2 text-violet-600 dark:text-violet-300">
                {item.icon}
                <span className="font-semibold">{item.label}</span>
              </div>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="text-sm hover:underline text-gray-800 dark:text-violet-100">
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-gray-800 dark:text-violet-100">{item.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs py-4 bg-black text-violet-400">
        © {new Date().getFullYear()} Rahul R · All rights reserved.
      </footer>
    </main>
  );
}
