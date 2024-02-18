function Footer() {
  const footerLinks = [
    {
      menuName: "OUR COMPANY",
      menuList: ["HOW WE WORK", "WHY INSURE?", "VIEW PLANS", "REVIEWS"],
    },
    {
      menuName: "HELP ME",
      menuList: ["FAQ", "TERMS OF USE", "PRIVACY POLICY", "COOKIES"],
    },
    {
      menuName: "CONTACT",
      menuList: ["SALE", "SUPPORT", "LIVE CHAT"],
    },
    {
      menuName: "OTHERS",
      menuList: ["CAREERS", "PRESS", "LICENSES"],
    },
  ];

  const renderFooterLinks = footerLinks.map((item) => (
    <div key={item.menuName}>
      <h4>{item.menuName}</h4>
      <ul>
        {item.menuList.map((linkItem, index) => (
          <li key={index}>
            <a href="#">{linkItem}</a>
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <footer>
      <div className="container">
        <div className="footer__media">
          <img src="images/logo.svg" />
          <div className="media-icons">
            <a href="#">
              <img src="images/icon-facebook.svg" alt="" />
            </a>
            <a href="#">
              <img src="images/icon-instagram.svg" alt="" />
            </a>
            <a href="#">
              <img src="images/icon-twitter.svg" alt="" />
            </a>
            <a href="#">
              <img src="images/icon-pinterest.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="footer__links grid grid-4x1">{renderFooterLinks}</div>
      </div>
    </footer>
  );
}

export default Footer;
