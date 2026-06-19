import React from "react";
import Heading from "../Components/Heading";
import ExperienceCard from "../Components/ExperienceCard";

const Experience = React.forwardRef(function Experience(props, ref) {
  return (
    <section ref={ref} data-name="Experience" className="scroll-mt-28">
      <div>
        <Heading FWord="RELEVANT" LWord="EXPERIENCE" />
      </div>
      <div className="mt-10 stagger-reveal">
                <ExperienceCard
          heading="Wordpress Developer"
          para="Currently working as a WordPress Developer at a software house, handling complete WordPress website development including theme customization, plugin setup, page builders (Elementor/WPBakery), and ongoing maintenance and support."
               />
        <ExperienceCard
          heading="SEO , Woocommerce , ACF"
          para="Previously worked as a WordPress Intern at a software house, specializing in custom WordPress development — with hands-on experience in ACF, WooCommerce, and on-page SEO to deliver functional and search-friendly websites."
        />
        <ExperienceCard
          heading="UI/UX"
          para="I design clean, user-focused interfaces using Figma and Canva to create intuitive layouts that enhance the user experience."
        />
      </div>
    </section>
  );
});

export default Experience;
