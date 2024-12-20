"use client";
import React, { useEffect } from "react";
import "./homepage.css";
import PromoteImage from "@/Components/reuse/Image/Image";
import Billboardimage from "../bookappointment/assets/E-Posters LED screen in each street advertisement for Promote in Chennai in top angle showing lot of led screens.png";
import Trainimage from "../bookappointment/assets/E-Train LED screen advertisement for Promote web app in Chennai (1).png";
import Cutoutimage from "../bookappointment/assets/E-cutouts LED screen advertisement for Promote web app in Chennai.png";
import Postersimage from "../bookappointment/assets/E-Posters LED screen in each street advertisement for Promote web app in Chennai.png";
import Busimage from "../bookappointment/assets/E-Bus LED screen advertisement for Promote web app in Chennai.png";
import Slicker from "../bookappointment/components/SlickComponent/slick";

const Homepage = () => {
  const myFunction = () => {
    const x = document.getElementById("myTopnav");
    if (x && x.className === "topnav") {
      x.className += " responsive";
    } else {
      if (x) x.className = "topnav";
    }
  };

  useEffect(() => {
    const acc = document.getElementsByClassName("accordion");
    const scrollFunction = () => {
      let navbar = document.getElementById("navbar");
      let scrollUp = document.getElementById("scroll-up");
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        if (navbar) navbar.style.top = "0";
        if (scrollUp) scrollUp.style.display = "block";
      } else {
        if (navbar) navbar.style.top = "-60px";
        if (scrollUp) scrollUp.style.display = "none";
      }
    };

    const loop = () => {
      const elementsToShow = document.querySelectorAll(".show-on-scroll");
      const isElementInViewport = (el: {
        getBoundingClientRect: () => any;
      }) => {
        const rect = el.getBoundingClientRect();
        return (
          (rect.top <= 0 && rect.bottom >= 0) ||
          (rect.bottom >=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <=
              (window.innerHeight || document.documentElement.clientHeight)) ||
          (rect.top >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight))
        );
      };

      Array.prototype.forEach.call(elementsToShow, (element) => {
        if (isElementInViewport(element)) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }
      });

      window.requestAnimationFrame(loop);
    };

    const myLoader = () => {
      let loader = document?.getElementById("loader");
      let myDiv = document?.getElementById("myDiv");
      setTimeout(() => {
        if (loader) loader.style.display = "none";
        if (myDiv) myDiv.style.display = "block";
      }, 3000);
    };

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function (this: any) {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    window.addEventListener("scroll", scrollFunction);
    loop();
    myLoader();

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <div>
      <>
        {/*ICON*/}
        <link rel="shortcut icon" href="images/logo.svg" />
        {/*META TAGS*/}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="author" content="Mahesh" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="Promote" />
        {/*EXTERNAL CSS*/}
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/custom.css" />
        {/*PLUGIN*/}
        {/*FONT AWESOME*/}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/*GOOGLE FONTS*/}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Fredoka+One&family=Kanit:wght@300&display=swap"
          rel="stylesheet"
        />
        {/*IF LOADER NEEDED
  <body onload="myLoader()" style="margin:0;">
  <div class="loading" id="loader">
  <div class="load">
  <div class="loader">
  </div>
  </div>
  </div>
  <div style="display:none;" id="myDiv" class="animate-bottom">*/}
        {/*NAV-BAR*/}
        <header>
          <div className="topnav" id="myTopnav">
            <a className="logo">Promote</a>
            <a href="#team">Sitemap</a>
            <a href="#team">Team</a>
            <div className="dropdown">
              <button className="dropbtn">
                Services
                <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <a href="/MAHESHBYL/details/mdOmWZG">Contact</a>
            <a href="about.html">About</a>
            <a href="#" className="active">
              Home
            </a>
            <a
              href="javascript:void(0);"
              style={{ fontSize: 15 }}
              className="icon"
              onClick={myFunction}
            >
              ☰
            </a>
          </div>
        </header>
        <div id="navbar">
          <div className="slide-menu">
            <a className="logo">Promote</a>
            <a href="#team">Sitemap</a>
            <a href="#team">Team</a>
            <div className="dropdown">
              <button className="dropbtn">
                Services
                <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <a href="https://codepen.io/MAHESHBYL/details/mdOmWZG">Contact</a>
            <a href="about.html">About</a>
            <a href="#" className="active">
              Home
            </a>
          </div>
        </div>
        {/*MAIN*/}
        <div className="main">
          <table>
            <tbody>
              <tr>
                <td>
                  <section>
                    <br></br>
                    <br></br>
                    <h5 className="sub-title">
                      Welcome To Promote Technologies
                    </h5>
                    <h1 className="Homepagetitle">
                      Elevate Your Brand with Powerful Online Ads.
                    </h1>
                    <h5 className="sub-title">
                      Hi Customers! 
                    </h5>
                    <p>
                      At Promote, we specialize in effective digital marketing
                      solutions. From captivating social media campaigns to
                      targeted display ads, we help your brand shine online.
                      Experience the difference with Promote.
                    </p>
                    {/* <br></br> */}
                    <a href="/bookappointment" style={{textDecoration:'none'}} className="btn1">
                      Book a Slot
                    </a>
                  </section>
                  
                  <section>
                    <h5 className="sub-title">
                      Hi Landowners! 
                    </h5>
                    <p>
                    At Promote, register your LED screen and start earning 
                    with our expert promotional services. From social media 
                    campaigns to display ads, we help your brand shine online. 
                    Discover the difference with Promote!
                    </p>
                    {/* <br></br> */}
                    <a href="/registerscreen" style={{textDecoration:'none'}} className="btn1">
                      Register Your Screen
                    </a>
                  </section>
                </td>
                <td>
                  <img
                    src="https://i.ibb.co/6R10B7H/main-01.png"
                    className="inline-photo show-on-scroll"
                    alt="INFERNO"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*CARDS*/}
        <div>
          <Slicker/>
        </div>

        {/*CONTAINER*/}
        <div className="homepagecontainer">
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://i.ibb.co/w4dySWD/01.webp"
                    className="inline-photo show-on-scroll"
                    alt="About Us"
                  />
                </td>
                <td>
                  <h6 className="sub-title">Discover Our Company</h6>
                  <h1 className="title">Your Partner in Digital Success.</h1>
                  <div>
                    <p>
                      At Promote, we're more than just a marketing agency –
                      we're your trusted ally in navigating the digital
                      landscape. With a focus on innovation and excellence, we
                      specialize in crafting tailored solutions that elevate
                      brands and drive results.
                    </p>
                    <br></br>
                    <p>
                      Our company is built on a foundation of creativity,
                      expertise, and a deep understanding of the digital world.
                      From our dynamic team of professionals to our cutting-edge
                      technologies, we're dedicated to helping our clients
                      thrive in an ever-evolving market.
                    </p>
                    <br></br>
                    <p>
                      When you choose Promote, you're choosing a partner
                      committed to your success. Explore what sets us apart and
                      discover how we can empower your brand to reach new
                      heights."
                    </p>
                    <br></br>
                  </div>
                  <a href="#moreaboutus" className="btn2">
                    Discover More
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <section className="slick" id="moreaboutus">
          <div className="banner">
            <h1 className="title">How You Can Benifit </h1>
            <h5 className="sub-title">
              Unlock Your Potential with the Promote App. With the Promote app,
              customers gain access to a world of benefits designed to
              supercharge their marketing efforts. Seamlessly integrated with
              our suite of digital marketing services, our app offers
              unparalleled convenience and effectiveness
            </h5>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>
                      <h3> Streamlined Campaign Management:</h3>
                      <p>
                        Easily create, monitor, and adjust digital marketing
                        campaigns all in one place{" "}
                      </p>
                    </li>
                    <li>
                      <h3>Real-Time Analytics: </h3>
                      <p>
                        Gain instant insights into campaign performance,
                        allowing for quick optimization and better
                        decision-making.{" "}
                      </p>
                    </li>
                    <li>
                      <h3> Personalized Recommendations: </h3>
                      <p>
                        Receive tailored suggestions to enhance marketing
                        strategies based on individual business needs and goals.
                      </p>
                    </li>
                  </ul>
                </td>
                <td>
                  <div className="card inline-photo show-on-scroll">
                    <div className="card_part card_part-one"></div>
                    {/* Photo 2 */}
                    <div className="card_part card_part-two"></div>
                    {/* Photo 3 */}
                    <div className="card_part card_part-three"></div>
                    {/* Photo 4 */}
                    <div className="card_part card_part-four"></div>
                  </div>
                </td>
                <td>
                  <ul>
                    <li>
                      <h3>Expert Insights:</h3>
                      <p>
                        Access valuable industry insights and best practices
                        from our team of digital marketing experts.
                      </p>
                    </li>
                    <li>
                      <h3> Competitive Edge: </h3>
                      <p>
                        Stay ahead of competitors with advanced tools and
                        data-driven strategies, ensuring maximum impact and ROI.
                      </p>
                    </li>
                    <li>
                      <h3> Convenient Accessibility: </h3>
                      <p>
                        Enjoy the convenience of managing marketing efforts
                        anytime, anywhere, with the Promote app at your
                        fingertips.
                      </p>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="section1">
          <div className="banner">
            <h1 className="title">
              Empowering Clients with Expertise in Networking Infrastructure and
              Display Screen E-Advertisement Technologies"
            </h1>
            <h5 className="sub-title">
              we develop visually stunning and dynamic ad designs. Additionally,
              we employ remote management tools for efficient monitoring and
              control of display screens, ensuring optimal performance and
              uptime.On the networking side, we ensure robust infrastructure,
              implement stringent security measures, and offer scalable
              solutions to support digital advertising operations. Our focus on
              performance optimization guarantees fast and responsive digital ad
              displays.{" "}
            </h5>
          </div>
          <button className="accordion">Question-1</button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="accordion">Question-2</button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="accordion">Question-3</button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="accordion">Question-4</button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
        {/*FOOTER*/}
        <footer>
          <div className="footer">
            <section>
              <p>
                <img src="img/logo.png" alt="Promote" />
              </p>
              <p> </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p />
            </section>
            <section>
              <p className="title">OTHER LINKS</p>
              <p>
                <a href="#">Ticket</a>
              </p>
              <p>
                <a href="#">Terms &amp; Conditions</a>
              </p>
              <p>
                <a href="#">Cookie Policy</a>
              </p>
              <p>
                <a href="#">Privacy Policy</a>
              </p>
            </section>
            <section>
              <p className="title">SHORT CUT</p>
              <p>
                <a href="https://codepen.io/MAHESHBYL/details/mdOmWZG">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#">Services</a>
              </p>
              <p>
                <a href="#">About Us</a>
              </p>
              <p>
                <a href="#">Our Fields</a>
              </p>
            </section>
            <section>
              <p className="title">News Letter</p>
              <p>
                <input type="email" placeholder="Email*" />
                <button type="submit">
                  <i className="fa fa-paper-plane" />
                </button>
              </p>
              <p>
                <a title="Address, Country, Pincode">
                  <i className="fa fa-map-marker" />
                </a>{" "}
                <a href="#">
                  <i className="fa fa-phone" />
                </a>{" "}
                <a href="#">
                  <i className="fa fa-envelope" />
                </a>
              </p>
            </section>
          </div>
          <div className="sub-footer">
            Copyright © 2021 Promote, All Right Reserved || Designed By: Mahesh
          </div>
        </footer>
        <a href="#" id="scroll-up">
          <i className="fa fa-angle-up" />
        </a>
      </>
    </div>
  );
};

export default Homepage;
