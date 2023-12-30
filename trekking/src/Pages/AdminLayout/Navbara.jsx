import React, { useContext, useState } from "react";
import "./Navbara.css";
import { Links } from "../../Data/NavLinks";
import { Link, NavLink } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/icon/logo_main.png";
import logos from "../../assets/travel-svgrepo-com.svg"
import { AdminNavLinks } from "../../Data/AdminNavLinks";
import { MdLogout, MdSegment } from "react-icons/md";
import AuthContext from "../../AuthState";

export default function Navbara() {
  const {logout} = useContext(AuthContext)
  const [changeStyle, setChangeStyle] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setChangeStyle(true);
    } else {
      setChangeStyle(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const makeResponsive = () => {
    let x = document.getElementById("NavLinkSubContainer");
    if (x.className === "NavLinkSubContainer") {
      x.className += " responsiveNav";
    } else {
      x.className = "NavLinkSubContainer";
    }
  };

  return (
    <>
      <div
        className={"NavDiv_wrapper NavDiv_bg"} style={{backgroundColor:"#154c79"}}
      >
        
        <div className="NavDivContainer">
          <div className={ "logoContainer"  }>
            <div className="logoWrapper">
              <Link
                to={"/"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img src={logos} style={{height:"50px",width:"50px"}} alt="" />
              </Link>
            </div>
          </div>

       
          <div className="NavLinkContainer" >
            <div className="icon_res">
              <Link onClick={makeResponsive}>
                <MdSegment />
              </Link>
            </div>
            <div className="NavLinkSubContainer" style={{backgroundColor:"#154c79"}} id="NavLinkSubContainer">
              {AdminNavLinks.map((Link) => {
                return (
                  <li key={Link.Key}>
                    <NavLink
                      to={Link.Linkto}
                      className={
                        changeStyle ? "Nav-li-unselect" : "Nav-li-textColor "
                      }
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        makeResponsive();
                      }}
                    >
                      {Link.Title}
                    </NavLink>
                  </li>
                );
              })}
               <li >
                    <MdLogout
                      
                      className={
                        changeStyle ? "Nav-li-unselect" : "Nav-li-textColor "
                      }
                      onClick={logout}
                     
                    />
                    
                  </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}