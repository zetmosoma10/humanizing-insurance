import classNames from "classnames";

function ButtonLink({ children, type }) {
  const linkType = type && `link-${type}`;
  const allClasses = classNames(linkType);
  return (
    <a href="#" className={`button-link ${allClasses}`}>
      {children}
    </a>
  );
}

export default ButtonLink;
