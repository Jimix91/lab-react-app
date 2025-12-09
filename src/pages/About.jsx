import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About IronCommerce</h1>

      <p className="about-text">
        IronCommerce is a clean and modern e-commerce project built during the Ironhack Bootcamp. 
        The goal of this platform is to practice and demonstrate real-world skills in React, 
        component architecture, API integration, user experience, and product management.
      </p>

      <p className="about-text">
        This project was created by <strong>Joan Jiménez</strong> and <strong>Anderson Valencia</strong>, 
        two passionate developers focused on building intuitive and efficient web applications.
      </p>

      <h2 className="about-subtitle">Meet the Developers</h2>

      <div className="about-cards">

       
        <div className="about-card">
          <h3 className="card-name">Joan Jiménez</h3>
          <p className="card-desc">
            Frontend-focused developer who enjoys crafting clean UI and smooth user experiences.
          </p>
          <div className="card-icons">
            <a href="https://github.com/Jimix91" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/joan-jim%C3%A9nez-camps-4084a8226/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="about-card">
          <h3 className="card-name">Anderson Valencia</h3>
          <p className="card-desc">
            Full-stack oriented developer with a strong interest in scalable logic and backend solutions.
          </p>
          <div className="card-icons">
            <a href="https://github.com/avalenciacs" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/anderson-valencia-885ba1143/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;