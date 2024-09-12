export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kaluya Simbi</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Civil Engineer</span>{" "}
          </h1>
          <p className="hero--section-description">
          I am currently pursuing a Bachelor of Technology in Civil Engineering and a Bachelor of Business Administration in Human Resource Management at Jain University.
          </p>
        </div>
        <a href="https://www.linkedin.com/in/kaluya-simbi-122989253/" target="_blank" rel="noopener noreferrer">
        <button className="btn btn-primary">Get In Touch</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/Ka.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
