import ButtonLink from "./ButtonLink";

function Hero() {
  return (
    <section className="hero">
      <div className=" grid-1x2 ">
        <picture className="hero__image-container">
          <source
            media="(max-width: 767px)"
            srcSet="images/image-intro-mobile.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="images/image-intro-desktop.jpg"
          />
          <img className="hero__image" src="images/image-intro-desktop.jpg" />
        </picture>
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
      </div>
    </section>
  );
}

export default Hero;
