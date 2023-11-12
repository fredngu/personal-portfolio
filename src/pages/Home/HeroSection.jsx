export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section-content">
          <p className="section--title">Hey, I'm Fred</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{""}
            <br />
            Developer
          </h1>
          <p className="herro--section-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam id veniam nesciunt tempora illo, eum ullam distinctio, fugiat beatae voluptas cum similique facere, laboriosam nemo dolorum officia non est rerum.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maiores consequatur maxime.
          </p>
        </div>
        <button className="btn btn-primary">Get in Touch</button>
          <img src="./img/hero_img.png" alt="Hero Section"/>
      </div>
    </section>
  )
}