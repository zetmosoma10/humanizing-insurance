import ButtonLink from "./ButtonLink";

function Hero() {
  return (
    <section className="hero">
      <div className="grid grid-1x2  container">
        <div className="hero__content">
          <div className="underline"></div>
          <h1>Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <ButtonLink type="hero">View Plans</ButtonLink>
        </div>
        <img
          className="hero__image"
          src="images/image-intro-desktop.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

export default Hero;
