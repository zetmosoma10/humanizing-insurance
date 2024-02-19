function Feature() {
  const featuresData = [
    {
      img: "images/icon-people-first.svg",
      header: "People First",
      text: "Our plans aren’t full of conditions and clauses to prevent payouts. Wemake sure you’re covered when you need it.",
    },
    {
      img: "images/icon-affordable-prices.svg",
      header: "Affordable Prices",
      text: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      img: "images/icon-snappy-process.svg",
      header: "Snappy Process",
      text: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
    },
  ];

  const renderFeatures = featuresData.map((item) => (
    <div className="feature" key={item.img}>
      <img src={item.img} />
      <h3 className="feature__heading">{item.header}</h3>
      <p>{item.text}</p>
    </div>
  ));

  return (
    <section className=" container feature-container">
      <h2>We’re different</h2>
      <div className="grid grid-1x3">{renderFeatures}</div>
    </section>
  );
}

export default Feature;
