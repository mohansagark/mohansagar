import $ from "jquery";
import { createSearchParams, useLocation } from "react-router-dom";

import { appliedConfig, headerConfig } from "../config/commonConfig";
import { useEffect } from "react";

const ThemeSwitcher = () => {
  const {
    appliedHeader,
    appliedIntro,
    isDarkHeader,
    isDarkTheme,
    isFrameLayout,
    isPrimaryBackground,
  } = appliedConfig;
  const searchParams = useLocation().search;
  const themeColor = new URLSearchParams(searchParams).get("themeColor");
  useEffect(() => {
    // Accessing scss variable "--background-color"
    // and "--text-color" using plain JavaScript
    // and changing the same according to the state of "darkTheme"
    $(".switcher-toggle").on("click", function () {
      var div = $("#styles-switcher.left");
      var divright = $("#styles-switcher.right");

      if (divright.css("right") === "-202px") {
        $(divright)
          .animate(
            {
              right: "0px",
            },
            300
          )
          .addClass("shadow");
      } else {
        $(divright)
          .animate(
            {
              right: "-202px",
            },
            300
          )
          .removeClass("shadow");
      }

      if (div.css("left") === "-202px") {
        $(div)
          .animate(
            {
              left: "0px",
            },
            300
          )
          .addClass("shadow");
      } else {
        $(div)
          .animate(
            {
              left: "-202px",
            },
            300
          )
          .removeClass("shadow");
      }
    });
    $("#styles-switcher ul li").on("click", function () {
      var path = $(this).data("path");
      $("#color-switcher").attr("href", path);
      $(this).parent().find("li").removeClass("active");
      $(this).addClass("active");
    });

    $("#reset-color").on("click", function () {
      $("#color-switcher").removeAttr("href");
      $("#styles-switcher ul li").parent().find("li").removeClass("active");
    });
  }, []);

  const redirectToColor = (redirectColor) => {
    const searchParams = createSearchParams({
      header: appliedHeader,
      intro: appliedIntro,
      themeColor: redirectColor ?? themeColor,
      isDarkHeader: isDarkHeader,
      isDarkTheme: isDarkTheme,
      isFrameLayout: isFrameLayout,
      isPrimaryBackground: isPrimaryBackground,
    });
    let queryString = searchParams.toString();
    // if (appliedHeader) queryString += "?theme=" + appliedTheme;
    // else queryString += "?theme=" + appliedConfig.appliedTheme;

    // if (appliedIntro) queryString += "&intro=" + appliedIntro;
    // else queryString += "&intro=" + appliedConfig.appliedIntro;

    // if (themeColor) queryString += "&themeColor=" + redirectColor;
    // else queryString += "&themeColor=" + redirectColor;

    // navigate(`/${queryString}`)
    console.log(window.location);

    window.location.href =
      window.location.origin + window.location.pathname + "?" + queryString;
  };
  const redirectToTheme = (theme) => {
    const searchParams = createSearchParams({
      header: appliedHeader,
      intro: appliedIntro,
      themeColor: themeColor,
      isDarkHeader: isDarkHeader,
      isDarkTheme: theme,
      isFrameLayout: isFrameLayout,
      isPrimaryBackground: isPrimaryBackground,
    });
    let queryString = searchParams.toString();
    // if (appliedHeader) queryString += "?theme=" + appliedTheme;
    // else queryString += "?theme=" + appliedConfig.appliedTheme;

    // if (appliedIntro) queryString += "&intro=" + appliedIntro;
    // else queryString += "&intro=" + appliedConfig.appliedIntro;

    // if (themeColor) queryString += "&themeColor=" + redirectColor;
    // else queryString += "&themeColor=" + redirectColor;

    // navigate(`/${queryString}`)
    console.log(window.location);

    window.location.href =
      window.location.origin + window.location.pathname + "?" + queryString;
  };
  return (
    <div
      id="styles-switcher"
      className={
        " bg-light-subtle " +
        (appliedHeader === headerConfig.SideHeader ? "right" : "left")
      }
    >
      <h2 className="text-3"> Color Switcher </h2> <hr />
      <ul>
        <li
          className="pink"
          data-bs-toggle="tooltip"
          data-path="css/color-pink.css"
          title="Pink (Default)"
          onClick={() => {
            redirectToColor("pink");
          }}
        />
        <li
          className="indigo"
          data-bs-toggle="tooltip"
          title="Indigo"
          data-path="css/color-indigo.css"
          onClick={() => {
            redirectToColor("indigo");
          }}
        />
        <li
          className="blue"
          data-bs-toggle="tooltip"
          title="Blue"
          data-path="css/color-blue.css"
          onClick={() => {
            redirectToColor("blue");
          }}
        />
        <li
          onClick={() => {
            redirectToColor("purple");
          }}
          className="purple"
          data-bs-toggle="tooltip"
          title="Purple"
          data-path="css/color-purple.css"
        />
        <li
          onClick={() => {
            redirectToColor("cyan");
          }}
          className="cyan"
          data-bs-toggle="tooltip"
          title="Cyan"
          data-path="css/color-cyan.css"
        />
        <li
          onClick={() => {
            redirectToColor("red");
          }}
          className="red"
          data-bs-toggle="tooltip"
          title="Red"
          data-path="css/color-red.css"
        />
        <li
          onClick={() => {
            redirectToColor("teal");
          }}
          className="teal"
          data-bs-toggle="tooltip"
          title="Teal"
          data-path="css/color-teal.css"
        />
        <li
          onClick={() => {
            redirectToColor("green");
          }}
          className="green"
          data-bs-toggle="tooltip"
          title="Green"
          data-path="css/color-green.css"
        />
        <li
          onClick={() => {
            redirectToColor("yellow");
          }}
          className="yellow"
          data-bs-toggle="tooltip"
          title="Yellow"
          data-path="css/color-yellow.css"
        />
        <li
          onClick={() => {
            redirectToColor("orange");
          }}
          className="orange"
          data-bs-toggle="tooltip"
          title="Orange"
          data-path="css/color-orange.css"
        />
      </ul>
      <button className="btn switcher-toggle">
        <i className="fas fa-cog" />
      </button>
      <div className="d-grid">
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            onClick={() => {
              redirectToTheme(false);
            }}
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            data-bs-theme-value="light"
            defaultChecked
          />
          <label
            className="btn btn-outline-secondary border-1 shadow-none p-2"
            htmlFor="btnradio1"
          >
            Light
          </label>
          <input
            onClick={() => {
              redirectToTheme(true);
            }}
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            data-bs-theme-value="dark"
          />
          <label
            className="btn btn-outline-secondary border-1 shadow-none p-2"
            htmlFor="btnradio2"
          >
            Dark
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
