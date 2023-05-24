import { Link } from "gatsby";
import React from "react";
import { useState } from "react";
import hamburger from '../assets/images/hamburger.png';
import x from '../assets/images/x.png';

const Header = ({ menuLinks }) => {

  const [isHidden, setIsHidden] = useState("hidden");
  const [menuButton, setMenuButton] = useState(hamburger);

  const toggleMobileMenu = (e) => {
      e.preventDefault();
      if (isHidden === "hidden") {
          setIsHidden("");
          setMenuButton(x);
      } else {
          setIsHidden("hidden");
          setMenuButton(hamburger);
      }
  };

  return (
    <header className="w-full flex justify-end">
    <div className={"md:hidden "}>
    <button onClick={toggleMobileMenu}><img alt="open menu button" className="absolute top-20 right-15" src={menuButton}/></button>
    </div>
      <nav className="py-3 md:flex flex-row">
        <ul className={"md:inline-flex " + isHidden}>
          {menuLinks.map(link => (
            <li key={link.name} className="mr-8">
              <Link className="text-2xl underline" to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
  </header>
  );

}

export default Header;
