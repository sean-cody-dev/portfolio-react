import { useState } from "react";
import "./Navbar.css";
import { PAGE_SECTIONS } from "../../page-sections";

export default function NavBar() {

    // state of whether menu is open or closed
    const [isOpen, setIsOpen] = useState(false);

    function handleMenuClick() {
        // toggle menu open/closed state
        setIsOpen(open => !open);
    }
    const menuItems = PAGE_SECTIONS.map((item, index) => {
      // menuItem Component
      // This component is not extracted, because it is not stateful?
      return <li key={index} className={isOpen ? `slide-in-${index+1}` : `slide-out-${index+1}`} id={`nav-${index+1}`} onClick={handleMenuClick}><a href={item.target}>{item.text}</a></li>
    })

    return (
      <>
      <div className={`overlay ${isOpen ? 'overlay-active overlay-slide-right' : 'overlay-slide-left'}`} id="overlay">
      <nav>
        <ul>
          {menuItems}
        </ul>
      </nav>
    </div>
      <div className={`menu-bars ${isOpen ? 'change' : ''}`} id="menu-bars" onClick={handleMenuClick}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      </>
  );
}
