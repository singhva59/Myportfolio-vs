import React from "react";
import {SiLeetcode} from "react-icons/si";
function Footer() {
  return (
    <>
      <div className="container ">
        <footer
          className="text-center text-dark"
          style={{ backgroundColor: "#f1f1f1", zIndex: 1 }}
        >
          <div className="container pt-4">
            <div className="display-5 lead" > <h1 id="counter " className="contact3 font-weight-bold text-black"
            >
           {/* <CountertopsIcon/>  views : {counter} */}
            </h1></div>
            <section className="mb-4">
            
              <a
                id="footicon"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://leetcode.com/vaibhaveagle59/"
                role="button"
                data-mdb-ripple-color="dark"
              > <SiLeetcode />
                
              </a>

              <a
                id="footicon"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.linkedin.com/in/vaibhav-singh-15a894194/"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                id="footicon"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://github.com/singhva59"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div
            className="text-center text-dark p-3"
            style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright:
            <a
              className="text-dark"
              href="https://vercel.com/vaibhaveagle59-gmailcom/myportfolio/"
            >
              portfolio-vs.vercel.app 
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
