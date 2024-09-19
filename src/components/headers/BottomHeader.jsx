import React, { useEffect, useState } from "react";
import NavLinks from "../../commonComponents/NavLinks";
import { Link } from "react-scroll";
import { appliedConfig, scrollDuration } from "../../config/commonConfig";

const HybridHeader = ({ appliedHeader }) => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  useEffect(() => {
    if (appliedConfig.isDarkHeader) {
      document.getElementById("header").setAttribute("data-bs-theme", "dark");
    }

    const checkScrollTop = () => {
      if (
        document.body.scrollTop > 1 ||
        document.documentElement.scrollTop > 1
      ) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", checkScrollTop);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", checkScrollTop);
      }
    };
  }, []);

  return (
    <header id="header" className="sticky-top">
      {/* Bottom Header */}
      <nav
        className={
          "primary-menu bottom-header navbar navbar-expand-lg position-relative bg-transparent " +
          (stickyHeader ? "sticky-on-top " : " ")
        }
      >
        <div className="container">
          {/* Logo */}
          <Link
            to="home"
            smooth="easeInOutQuint"
            duration={scrollDuration}
            style={{ cursor: "pointer" }}
            spy
            className="logo ms-3 ms-md-0"
            title="Mohansagar Killamsetty"
          >
            <img
              src={
                appliedConfig.isDarkHeader || appliedConfig.isDarkTheme
                  ? "images/logo-light.png"
                  : "images/logo.png"
              }
              alt="Mohansagar Killamsetty"
            />
          </Link>
          {/* Logo End */}
          <button
            className={
              "navbar-toggler ms-auto " +
              (isNavModalClose ? "collapsed" : "show")
            }
            onClick={() => setIsNavModalClose(!isNavModalClose)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
          {/* Hide background dropdown when overlay is active */}
          <div
            id="header-nav"
            className={
              "collapse navbar-collapse justify-content-end " +
              (isNavModalClose ? " " : "d-none")
            }
          >
            <ul className="navbar-nav">
              <NavLinks
                appliedHeader={appliedHeader}
                setIsNavModalClose={setIsNavModalClose}
              />
            </ul>
          </div>
        </div>
      </nav>
      {/* Overlay Menu */}
      <div
        className={"overlay-menu " + (isNavModalClose ? "d-none" : "d-flex")}
      >
        <div className="d-flex h-100 align-items-center justify-content-center w-100 position-relative">
          <button
            className="overlay-close-btn"
            onClick={() => setIsNavModalClose(true)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "transparent",
              border: "none",
              fontSize: "30px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
          <ul className="navbar-nav">
            <NavLinks
              appliedHeader={appliedHeader}
              setIsNavModalClose={setIsNavModalClose}
            />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HybridHeader;
