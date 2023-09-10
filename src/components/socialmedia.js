import React, { useEffect } from "react";
import {  FaHackerrank} from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css"

function Socialmedia() {
  // const [Progress, setProgress] = useState(0);
 useEffect(()=>{
   Aos.init({duration:2000})
 },[])

  return (
    <>
  <nav className="side-menu d-none d-sm-block float-left" 
          data-aos="fade-right"
          data-aos-duration={2000} 
          style={{
            position: "sticky",
           
          }}
          data-aos-delay={500}>
    <ul>
      <li><a    href="https://www.linkedin.com/in/vaibhav-singh-15a894194/">linkedin<span><FaLinkedin/></span></a></li>
      <li><a   href="https://leetcode.com/vaibhaveagle59/">leetcode<span><SiLeetcode/></span></a></li>
      <li><a   href="https://www.hackerrank.com/coolvaibhavsing1?hr_r=1">Hackerrank<span><FaHackerrank/></span></a></li>
      <li><a   href="https://github.com/singhva59">Github<span><FaGithub/></span></a></li>
      <li><a   href="https://linktr.ee/Vaibhavsingh59">Linktree<span><FaGithub/></span></a></li>
    </ul>
  </nav>
    </>
  );
}

export default Socialmedia;
