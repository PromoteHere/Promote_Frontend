"use client";
import React, { useEffect, useState } from "react";
import "./homepage.css";
import Billboard from "../../assets/billboard.gif";
const Homepage = () => {
  useEffect(() => {
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
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
    // myLoader();

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: number | null) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("scroll-up").style.display = "block";
    } else {
      document.getElementById("navbar").style.top = "-60px";
      document.getElementById("scroll-up").style.display = "none";
    }
  };
  const myFunction = () => {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  const loop = () => {
    const elementsToShow = document.querySelectorAll(".show-on-scroll");
    const isElementInViewport = (el: { getBoundingClientRect: () => any }) => {
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
        {/*NAV-BAR*/}
        <header>
          <div className="topnav" id="myTopnav">
            <a className="logo">Promote</a>
            <a href="#team">Sitemap</a>
            <a href="#team">Team</a>
            {/* <div className="dropdown">
              <button className="dropbtn">
                Services
                <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div> */}
            <a href="">Contact</a>
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
            <a href="">Contact</a>
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
                    <h5 className="sub-title">
                      Welcome To Promote Technologies
                    </h5>
                    <h1 className="title">
                      Elevate Your Brand with Powerful Online Ads.
                    </h1>

                    <p>
                      At Promote, we specialize in effective digital marketing
                      solutions. From captivating social media campaigns to
                      targeted display ads, we help your brand shine online.
                      Experience the difference with Promote.
                    </p>
                    <br></br>
                    <a href="#sections" className="btn1">
                      Explore Our Features
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
        <section className="section0" id="sections">
          <div className="card banner">
            <h1 className="title">Our Featured Services</h1>
            <h5 className="sub-title">
              Promote's featured services offer innovative solutions to elevate
              your brand and connect with your audience in the digital age
            </h5>
          </div>
          <div className="card inline-photo show-on-scroll">
            {/* <i className="fa fa-desktop" /> */}
            <img
              style={{
                padding: "0% 20% 0% 23%",
                height: "11rem",
                width: "100%",
              }}
              src="https://visme.co/blog/wp-content/uploads/2019/08/header-1200.gif"
              alt="billboard"
            />
            <h5>
              <b>E-Billboard:</b> Command attention with dynamic digital
              billboards that captivate audiences and drive brand visibility.
            </h5>
          </div>
          <div className="card inline-photo show-on-scroll">
            {/* <i className="	fa fa-television" /> */}
            <img
              style={{
                padding: "0% 20% 0% 23%",
                height: "11rem",
                width: "100%",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhK4PloTFMf5YVMNI4ipUEFQPowCuSeeEpQ&usqp=CAU"
              alt="billboard"
            />
            <h5>
              {" "}
              <b>E-Posters:</b> Modernize traditional poster advertising with
              vibrant digital displays that deliver your message with impac
            </h5>
          </div>
          <div className="card inline-photo show-on-scroll">
            {/* <i className="fa fa-line-chart" /> */}
            {/* <i className="	fa fa-television" /> */}
            <img
              style={{
                padding: "0% 20% 0% 23%",
                height: "11rem",
                width: "100%",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXtoANRJXNKnG3eZXa6lEtq95wszILD0k_g&usqp=CAU"
              alt="billboard"
            />
            <h5>
              {" "}
              <b> E-Cutout Walls:</b> Transform physical spaces into immersive
              brand experiences with interactive digital walls that leave a
              lasting impression..
            </h5>
          </div>
          <div className="card inline-photo show-on-scroll">
            {/* <i className="fa fa-train" /> */}
            <img
              style={{
                padding: "0% 20% 0% 23%",
                height: "11rem",
                width: "100%",
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAq1BMVEX////r5u86M0ckHy7h2uctJDyqp64hFjPq6uvv6vP7+vz39fm5tL4qIjo1LkPn4utmYHDj4uUaFCainagwKD6yrbgTCyDg2Obm3+xEPVCXkZ3Tztioo64MABv49vny7/QuKDkAABYAABEpIzN5c4EkGzXEwchuaXZeWGgZCi0dFSqJhJAgGyrX1doAAAh/eYdTTV47N0TKx81WUWFLR1M3MUBHQVOPi5WysLafFM3CAAAEpUlEQVR4nO2cfVfaMBSHTaVqsA0yCk5wZW7yNmUwcbDv/8lWtjMPwdKbpOlb9nv+7jnJw829afPC2RkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIIZS1wXStzeU7bh7SEtVg6cj8dxXI5g+7Z1SEmGb6bjuPCQVmv4V/O6UMsaGO4lx8VJ1sNwz7igvKyP4V6yiEjWyrAQyboZJjlp2bF+hrYd62iYOFqsOvU0tBnHuhraqzn1NUwc7Sh+lOBq5Ou5YiMJNsI4Hkr0VOhPO3kk+fJeop9BcJXbsPswOCRSZBYYO/LRt4Fym74X5Db8cH6Ip4gQjx1DRd7/IjV5/jWzIf8p58xhaOh50dw4hp+fZcXPmQ2F82U1hp7/aBrE6fdzHUXhX1Rj6E3uTRWHD0eKVEuragzFumNmyPhqoJGKCf6NeU3NYeiFgWk97czlZolxmmT92jgZ8xgK00zUrjZJW96oCsO1oeC+2mimoifCaQWG26W5otas+IeJ2eSfx9C7G5m/vPEnzWqT1BujWaMyQ8Z0q01Sb0wUqzPkrR9HinSDvsFArTCGfPrhWVdxoV9uKjRMqs1RQaXHqRe9NMmQ8d1AV1Hc6U79lRoyfnOUioJsM9poLm5UbNjRrzbRrEmGjL98lasNPSt6/q5JhowHA1lRodrovdxUbfj+Y5FORXHXbZIhG8+OCirdrlYqVm/I2Ebug0Iqhr1GGfLRD+1UFOqzYq6vp1c7uwA80J4Vxbocw40VwZRqQ7cd3pdhGBmvYrxTPKo2KqmoWk9zrUT1bRky/ir3Q+Fb8bF4Q7G2txnHRz/lakOnoq/4IZXDMOxZC+G+2uh+K4qN2oaGuWE0syiYKN7LS1N0Koa/ijWM5lYF90tTn/RSUXhFGorIeHfttOJas9qorb11v3w6JFTBF9tZwGwLMt56fZA6MyE7orILHsubzIES01HerfwTiort/6PfUQmi0UmFIvyYzhGGfygI1vm0iQIKE0bDDRWC2HBDRteaphvSS4tNN2TuG147b0jWmsYbksO0+YbUMG2+ITVMm29IDVMHDIk3NwcMiUnfAUMiER0wJN5NXTDMni9cMMwepjBsBM4buh9D9w3dr6XOz4fuv7URy23NN6QWhRtv6PpKlMIdzHYrp2FHAb3H1fXUrnzHEm1dzoY3FPPp2dvjnQ35+Opaue1y2IWC4PLgaHa8oJ7WPSBbPNOQ2oy+PLh31t5Sx0givfOxJdCNqC1/6UDBinp8Yni9qTjiOREVOSi/qJCL/Le3bdPzs7vsSzck4gXxe+S5LloQV9lREVv5cWKYXua71lwMw8wgHh8/62b/HvNqHLKJRUYmvi/+mT+IX8cQJhPG6YGXcqw+qzRFwyr6r8BucqrLi5SLWF3vlKJfu9n+jV66oki/TLf00xXDWen/qahOL62girsTs3d3naborwoRvLLERUqft9NTTy9TclE8GTeetY6xjC7tkFpswlNPh2kxNO+Kl1GBd8QLSTPIukITLHwHyLwd/HLhANp3gwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4vfgPl+9oR578k5AAAAABJRU5ErkJggg=="
              alt="billboard"
            />
            <h5>
              {" "}
              <b> E-Train: </b>Reach commuters on the go with targeted digital
              advertising on trains, ensuring maximum exposure and engagement.
            </h5>
          </div>
          <div className="card inline-photo show-on-scroll">
            {/* <i className="fa fa-bus" /> */}
            <img
              style={{
                padding: "0% 20% 0% 23%",
                height: "11rem",
                width: "100%",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFHm6UCrEwtJ6KStgwfCpP1OelYlqAxUG_A&usqp=CAU"
              alt="billboard"
            />
            <h5>
              {" "}
              <b> E-Bus: </b>Take your message to the streets with eye-catching
              digital ads on buses, reaching a diverse audience wherever they
              go.
            </h5>
          </div>
        </section>
        {/*CONTAINER*/}
        <div className="container">
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
                      <h5> Streamlined Campaign Management:</h5>
                      <p>
                        Easily create, monitor, and adjust digital marketing
                        campaigns all in one place{" "}
                      </p>
                    </li>
                    <li>
                      <h5>Real-Time Analytics: </h5>
                      <p>
                        Gain instant insights into campaign performance,
                        allowing for quick optimization and better
                        decision-making.{" "}
                      </p>
                    </li>
                    <li>
                      <h5> Personalized Recommendations: </h5>
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
                      <h5>Expert Insights:</h5>
                      <p>
                        Access valuable industry insights and best practices
                        from our team of digital marketing experts.
                      </p>
                    </li>
                    <li>
                      <h5> Competitive Edge: </h5>
                      <p>
                        Stay ahead of competitors with advanced tools and
                        data-driven strategies, ensuring maximum impact and ROI.
                      </p>
                    </li>
                    <li>
                      <h5> Convenient Accessibility: </h5>
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
          {/* <button className="accordion">Question-1</button>
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
          </div> */}
          <div>
            <div className="container-lg">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="page-title">FAQs</h1>
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <div
                        className={`card-header ${
                          activeIndex === 0 ? "highlight" : ""
                        }`}
                        id="headingOne"
                        onClick={() => toggleAccordion(0)}
                      >
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            aria-expanded={activeIndex === 0}
                          >
                            <i className="fa fa-chevron-circle-down"></i> What
                            is Bootstrap Framework?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseOne"
                        className={`collapse ${
                          activeIndex === 0 ? "show" : ""
                        }`}
                        aria-labelledby="headingOne"
                      >
                        <div className="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam eu sem tempor, varius quam at, luctus dui.
                          Mauris magna metus, dapibus nec turpis vel, semper
                          malesuada ante. Vestibulum id metus ac nisl bibendum
                          scelerisque non non purus. Suspendisse varius nibh non
                          aliquet sagittis. In tincidunt orci sit amet elementum
                          vestibulum.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className={`card-header ${
                          activeIndex === 1 ? "highlight" : ""
                        }`}
                        id="headingTwo"
                        onClick={() => toggleAccordion(1)}
                      >
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            aria-expanded={activeIndex === 1}
                          >
                            <i className="fa fa-chevron-circle-down"></i> How to
                            Create Responsive Website with Bootstrap?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo"
                        className={`collapse ${
                          activeIndex === 1 ? "show" : ""
                        }`}
                        aria-labelledby="headingTwo"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className={`card-header ${
                          activeIndex === 2 ? "highlight" : ""
                        }`}
                        id="headingThree"
                        onClick={() => toggleAccordion(2)}
                      >
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            aria-expanded={activeIndex === 2}
                          >
                            <i className="fa fa-chevron-circle-down"></i> Does
                            Bootstrap Framework Provide Cross-browser Support?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseThree"
                        className={`collapse ${
                          activeIndex === 2 ? "show" : ""
                        }`}
                        aria-labelledby="headingThree"
                      >
                        <div className="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam eu sem tempor, varius quam at, luctus dui.
                          Mauris magna metus, dapibus nec turpis vel, semper
                          malesuada ante. Vestibulum id metus ac nisl bibendum
                          scelerisque non non purus. Suspendisse varius nibh non
                          aliquet sagittis. In tincidunt orci sit amet elementum
                          vestibulum.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        className={`card-header ${
                          activeIndex === 3 ? "highlight" : ""
                        }`}
                        id="headingFour"
                        onClick={() => toggleAccordion(3)}
                      >
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            aria-expanded={activeIndex === 3}
                          >
                            <i className="fa fa-chevron-circle-down"></i> Can I
                            Use Bootstrap for Mobile App Development?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseFour"
                        className={`collapse ${
                          activeIndex === 3 ? "show" : ""
                        }`}
                        aria-labelledby="headingFour"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <div className="sub-footer">Copyright © 2021 Promote</div>
        </footer>
        <a href="#" id="scroll-up">
          <i className="fa fa-angle-up" />
        </a>
      </>
    </div>
  );
};

export default Homepage;
