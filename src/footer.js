import React from "react";

export default function Footer() {
  return (
    <div className="bg-dark text-primary">
      footer
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 ">
          <div className="container ">
            <a className="navbar-brand" href="#">
              Sohaib <span className="text-warning">Trading</span> Company
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent "
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item me-2 home_menu">
                  <a
                    className="nav-link active text-white "
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item me-2 menu_hover">
                  <a className="nav-link text-white" href="#">
                    Sohaib
                  </a>
                </li>

                <li className="nav-item me-2 menu_hover">
                  <a className="nav-link text-white" href="#" tabindex="-1">
                    About Us
                  </a>
                </li>

                <li className="nav-item me-2 menu_hover">
                  <a className="nav-link text-white" href="#" tabindex="-1">
                    Contect Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

<p>
   i am Sohaib full stack developer 
</p>

<p>
   i am shaharyar full stack developer i am shaharyar full stack developer i am shaharyar full stack developer 
   i am shaharyar full stack developer i am shaharyar full stack developer i am shaharyar full stack developer 
   i am shaharyar full stack developer 
</p>



    </div>
  );
}
