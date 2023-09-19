import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { StyleClass } from "primereact/styleclass";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";

const Header = () => {
  const [isHidden] = useState(false);

  const menuRef = useRef();

  return (
    <div
      className="surface-0 flex "
      style={{
        width: "100%",
        background: "#00A54F !important",
      }}
    >
      <div id="home" className="landing-wrapper overflow-hidden ">
        <div className="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static">
        <span className="text-900 font-medium text-2xl line-height-3 mr-8">
            <img
              src="/images/Logo.jpg"
              alt="Descripción de la imagen"
              className="w-5 md:w-5"
            />
          </span>
          

          <StyleClass
            nodeRef={menuRef}
            selector="@next"
            enterClassName="hidden"
            leaveToClassName="hidden"
            hideOnOutsideClick="true"
          >
            <i
              ref={menuRef}
              className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"
            ></i>
          </StyleClass>
          <div
            className={classNames(
              "align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2",
              { hidden: isHidden }
            )}
            style={{
              top: "100%",
            }}
          >
            <ul
              className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer"
              style={{
                top: "100%",
              }}
            >
              <li>
                <Link
                  to="/"
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                  style={{ textDecoration: "none" }}
                >
                  <span>Inicio</span>
                  <Ripple />
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                  style={{ textDecoration: "none" }}
                >
                  <span>Nosotros</span>
                  <Ripple />
                </Link>
              </li>
              <li>
                <Link
                  to="/location"
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                  style={{ textDecoration: "none" }}
                >
                  <span>Ubicación</span>
                  <Ripple />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                  style={{ textDecoration: "none" }}
                >
                  <span>Catalogo</span>
                  <Ripple />
                </Link>
              </li>
            </ul>
            <div className="flex justify-content-left lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
              <Link
                to="/login"
                className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                style={{ textDecoration: "none" }}
              >
                <Button
                  to="/login"
                  label="Iniciar sesión"
                  text
                  rounded
                  className="border-none font-light line-height-2 text-blue-500"
                ></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
