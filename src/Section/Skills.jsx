import React from "react";
import Heading from "../Components/Heading";
import SkillCard from "../Components/SkillCard";
import { FaFigma, FaGithub, FaBootstrap, FaWordpress, FaGlobe } from "react-icons/fa";
import { SiElementor } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";

const skills = [
  { logo: <FaWordpress />, title: "WordPress", disc: "CMS Platform", color: "#21759B" },
  { logo: <FaGlobe />, title: "SEO", disc: "Search Engine Optimization", color: "#FF5722" },
  { logo: <SiElementor />, title: "Elementor", disc: "Page Builder", color: "#92003B" },
  { logo: <FaFigma />, title: "Figma", disc: "Design Tool", color: "#F24E1E" },
  { logo: <IoLogoJavascript />, title: "JavaScript", disc: "Client-side scripting", color: "#F7DF1E" },
  { logo: <FaGithub />, title: "Github", disc: "Code collaboration", color: "#E6EDF3" },
  { logo: <FaBootstrap />, title: "BootStrap", disc: "CSS Framework", color: "#7952B3" },
  { logo: <IoLogoCss3 />, title: "CSS", disc: "Responsive styling", color: "#264DE4" },
];

const Skills = React.forwardRef(function Skills(props, ref) {
  return (
    <section ref={ref} data-name="Skills" className="scroll-mt-28">
      <div className="mb-8">
        <Heading FWord="TECHNICAL" LWord="SKILLS" />
      </div>
      <div className="grid lg:grid-cols-2 gap-3 stagger-reveal">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>
    </section>
  );
});

export default Skills;
