import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import Aos from "aos";
import "aos/dist/aos.css";
import './birdanime.scss';
// import Wave from 'react-wavify'
function Home() {
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
    
    <div className="hideonsmallwidth ">
	<div className="bird-container bird-container--one ">
		<div className="bird bird--one"></div>
	</div>
	
	<div className="bird-container bird-container--two">
		<div className="bird bird--two"></div>
	</div>
	
	<div className="bird-container bird-container--three">
		<div className="bird bird--three"></div>
	</div>
	
	<div className="bird-container bird-container--four">
		<div className="bird bird--four"></div>
	</div>
	
</div>

      <section id="Home" style={{ paddingBottom: "3rem" }}>
        <div
          className="card d-flex justify-content-center"
          style={{
            fontFamily: "Roboto Mono, monospace",
            fontSize: "30px",
            paddingTop: "30px",
            color: "white",
            background: "none",
            textAlign: "center",
          }}
        >
          <div className="container py-5">
            <div data-aos="flip-right"className="d-none d-sm-block ">
            {/* #37dfa3 */}
             <h1 className="bounce-in-top" style={{color:"#d6ca4a",paddingLeft:"5rem",marginTop:"2rem",fontWeight:"bold",}}>
               Vaibhav Singh
          
              </h1>
              <div className=" codesx"  >
             
              <iframe src="https://embed.lottiefiles.com/animation/82423"   frameBorder="0" title="animatedicons" scrolling="no"  style={{pointerEvents:"none" ,height:"13rem"}} > </iframe>
            <a className="btn rounded-circle btn-danger p-1 shake" target="_blank" href="https://linktr.ee/Vaibhavsingh59"  rel="noreferrer" >  </a>
              </div>
            </div>

            <div data-aos="flip-right" className="d-sm-none">
             <h1 style={{color:"white"}}>
              I'm
                <span className="cursorr"
                  style={{
                    color: "#d6ca4a",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                >
                  <Typewriter
                    loop 
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={55}
                    delaySpeed={1000}
                    words={["developer", "student", "vaibhav"]}
                  />
                </span>
              </h1>
            </div>
             

            <div className="container d-sm-none">
              <div className="row text-center d-flex justify-content-center shadow p-3 mb-5  rounded hidden" >
                <div
                  className="col-xl-3 col-sm-6 mb-5 bgmi"
                  style={{
                    width: "22rem",
                    height: "22rem",
                  }}
                >
                  <div className="rounded shadow-sm py-5 px-4 ">
                    <img
                      src="https://i.postimg.cc/x1LhqB2n/myimg.png"
                      data-aos="fade-zoom-in"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="600"
                      alt=""
                      width="130"
                      className="img-fluid rounded-circle img-thumbnail shadow-sm"
                    />
                    <br />
                    <h6 className="small text-uppercase ">
                      vaibhav singh
                    </h6>
                    <ul className="social mb-0 list-inline mt-4">
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/in/vaibhav-singh-15a894194/"
                          
                          className="social-link"
                        >
                          <FaLinkedin />
                        </a>
                      </li>
                      
                      <li className="list-inline-item">
                        <a
                          href="https://github.com/singhva59"
                          
                          className="social-link"
                        >
                          <FaGithub />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://github.com/singhva59"
                          
                          className="social-link"
                        >
                          <FaGithub />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://leetcode.com/vaibhaveagle59/"
                          
                          className="social-link"
                        >
                          <SiLeetcode />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
   
          <div style={{height: '100%'}} className="d-none d-sm-block" >
         
          <h3 className="  d-flex justify-content-center " data-aos="zoom-in-down">
          <br /><br /><br /> <br /><br /><br /><br />
           <div className="w-50"  >
            <span 
                >
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={55}
                    delaySpeed={1000}
                    words={["Hello , I'm a student with a focus on technical development.I'm hardworking, diligent, and  dedicated—all qualities I put forward in everything I do"]}
                  />
                </span>
                </div>
                
          </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
