import React, {useState} from "react";
import "../../assets/css/navbar/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../../assets/icons/logo.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons";
import Link from "./Link";
import { urlLink } from "./LinkNav";

const link = urlLink();

const Navbar = () => {

  const [open, setOpen] = useState(false)
  const [clssOpen, setClssOpen] = useState('')

  return (
    <>
      <nav className="navbar">
        <img src={logo} width="100px" alt={logo} />
        <FontAwesomeIcon icon={open ? faX : faBars} className="humberger" onClick={() => {
          setOpen(!open)
          setClssOpen(clssOpen === "active" ? "" : "active")
        }}/>
        <div className="containner-link" >
          <div className={`link ${clssOpen}`}>
            {link.map((li) => (
              <Link path={li.path} name={li.name} key={li.name} />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
