import photo from "../../assets/headshot.png";
import "../../styles/components/hero.css";

function Hero() {
  return (
    <section id="Home" className="container">
      <div className="hero__section">
        <img src={photo} alt="headshot image" className="hero__img" />
        <h2 className="hero__subtitle">Hi I am Anthony 😃</h2>
      </div>
      <div className="hero__section">
        <h1 className="title">Data Engineer & AI Enthusiast</h1>
        <p className="intro__p">
          I am currently a <strong>Data Engineer</strong>, looking to shift into
          a software engineering role. I specialize in harnessing the power of{" "}
          <strong>big data</strong> and enjoy tinkering with
          <strong> machine learning</strong> models using PyTorch. My enthusiasm
          extends to crafting visually appealing,
          <strong> user focused UI/UX </strong> designs.
        </p>
      </div>
    </section>
  );
}

export default Hero;
