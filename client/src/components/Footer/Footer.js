import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="footer_desc">
          <h1>BIT</h1>
          <p>Bangalore Institute of Technology Bengaluru</p>
          <p id="phone">080 2661 5865</p>
        </div>
        <div className="footer_links">
          <h2 className="footer_title">About BIT</h2>
          <a
            href="https://bit-bangalore.edu.in/teaching-faculties/ise"
            target="blank"
            className="footer_link"
          >
            Faculty List of ISE Dept
          </a>
          <a
            href="https://bit-bangalore.edu.in/approvals-nirf"
            target="blank"
            className="footer_link"
          >
            NIRF Details
          </a>
          <a
            href="https://collegedunia.com/college/12989-bangalore-institute-of-technology-bit-bangalore"
            target="blank"
            className="footer_link"
          >
            CollegeDunia
          </a>
          <a
            href="https://bit-bangalore.edu.in/"
            target="blank"
            className="footer_link"
          >
            Admission
          </a>
        </div>
      </div>
      <div id="footer" className="footer_wrapper">
        <div className="footer_links">
          <h2 className="footer_title">Placements</h2>
          <a
            href="https://bit-bangalore.edu.in/"
            target="blank"
            className="footer_link"
          >
            Placements
          </a>
          <a
            href="https://bit-bangalore.edu.in/"
            target="blank"
            className="footer_link"
          >
            Campus Placements
          </a>
          <a
            href="https://bit-bangalore.edu.in/"
            target="blank"
            className="footer_link"
          >
            Additional Placements
          </a>
        </div>
        <div className="footer_links">
          <h2 className="footer_title">Get in Touch</h2>
          <a
            href="https://bit-bangalore.edu.in/"
            target="blank"
            className="footer_link"
          >
            BIT
          </a>
          <a
            href="https://www.facebook.com/bitsince79/"
            target="blank"
            className="footer_link"
          >
            Facebook
          </a>
          <a
            href="https://www.youtube.com/@bitsince1979"
            target="blank"
            className="footer_link"
          >
            Youtube
          </a>
          <a
            href="https://twitter.com/bitsince1979"
            target="blank"
            className="footer_link"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
