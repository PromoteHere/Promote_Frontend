// Importing necessary modules and styles
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PromoteImage from "@/Components/reuse/Image/Image"; // Adjust path as per your project structure
import page from "../../page";
import Billboardimage from "../../assets/E-Posters LED screen in each street advertisement for Promote in Chennai in top angle showing lot of led screens.png";
import Trainimage from "../../assets/E-Train LED screen advertisement for Promote web app in Chennai (1).png";
import Cutoutimage from "../../assets/E-cutouts LED screen advertisement for Promote web app in Chennai.png";
import Postersimage from "../../assets/E-Posters LED screen in each street advertisement for Promote web app in Chennai.png";
import Busimage from "../../assets/E-Bus LED screen advertisement for Promote web app in Chennai.png";
import Link from "next/link";

const ServiceSlider = () => {
  const settings = {
    dots: true, // Enable dots for navigation
    arrows: true, // Enable navigation arrows
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3-second autoplay interval
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2, // Show 2 cards on tablets
        },
      },
      {
        breakpoint: 600, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 card on small screens
        },
      },
    ],
  };

  const services = [
    {
      title: "E-Bus",
      description:
        "Take your message to the streets with eye-catching digital ads on buses, reaching a diverse audience wherever they go.",
      image: Busimage,
    },
    {
      title: "E-Posters",
      description:
        "Modernize traditional poster advertising with vibrant digital displays that deliver your message with impact.",
      image: Postersimage,
    },
    {
      title: "E-Cutout Walls",
      description:
        "Transform physical spaces into immersive brand experiences with interactive digital walls that leave a lasting impression.",
      image: Cutoutimage,
    },
    {
      title: "E-Train",
      description:
        "Reach commuters on the go with targeted digital advertising on trains, ensuring maximum exposure and engagement.",
      image: Trainimage,
    },
    {
      title: "E-Billboard",
      description:
        "Command attention with dynamic digital billboards that captivate audiences and drive brand visibility.",
      image: Billboardimage,
    },
  ];

  return (
    <section className="service-slider bg-gray-100 py-10 px-4">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Our Featured Services
      </h1>
      <div className="mx-auto max-w-3xl">
        <Slider {...settings}>
          {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white p-6 mx-2 shadow-lg rounded-lg flex flex-col items-center text-center"
              >
                <PromoteImage
                  url={service.image}
                  width="195"
                  height="90"
                  alt={service.title}
                  className="rounded-lg shadow-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServiceSlider;


// // Importing necessary modules and styles
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import PromoteImage from "@/Components/reuse/Image/Image"; // Adjust path as per your project structure

// import Billboardimage from "../../assets/E-Posters LED screen in each street advertisement for Promote in Chennai in top angle showing lot of led screens.png";
// import Trainimage from "../../assets/E-Train LED screen advertisement for Promote web app in Chennai (1).png";
// import Cutoutimage from "../../assets/E-cutouts LED screen advertisement for Promote web app in Chennai.png";
// import Postersimage from "../../assets/E-Posters LED screen in each street advertisement for Promote web app in Chennai.png";
// import Busimage from "../../assets/E-Bus LED screen advertisement for Promote web app in Chennai.png";

// const ServiceSlider = () => {
//   // Slider settings
//   const settings = {
//     dots: true, // Enable dots for navigation
//     arrows: true, // Enable navigation arrows
//     infinite: true, // Infinite scrolling
//     speed: 500, // Transition speed
//     slidesToShow: 1, // Show only 1 slide at a time for fade effect
//     slidesToScroll: 1, // Scroll 1 slide at a time
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 3000, // 3-second autoplay interval
//     fade: true, // Enable fade transition effect
//     responsive: [
//       {
//         breakpoint: 1024, // For tablets
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 600, // For mobile devices
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const services = [
//     {
//       title: "E-Bus",
//       description:
//         "Take your message to the streets with eye-catching digital ads on buses, reaching a diverse audience wherever they go.",
//       image: Busimage,
//     },
//     {
//       title: "E-Posters",
//       description:
//         "Modernize traditional poster advertising with vibrant digital displays that deliver your message with impact.",
//       image: Postersimage,
//     },
//     {
//       title: "E-Cutout Walls",
//       description:
//         "Transform physical spaces into immersive brand experiences with interactive digital walls that leave a lasting impression.",
//       image: Cutoutimage,
//     },
//     {
//       title: "E-Train",
//       description:
//         "Reach commuters on the go with targeted digital advertising on trains, ensuring maximum exposure and engagement.",
//       image: Trainimage,
//     },
//     {
//       title: "E-Billboard",
//       description:
//         "Command attention with dynamic digital billboards that captivate audiences and drive brand visibility.",
//       image: Billboardimage,
//     },
//   ];

//   return (
//     <section className="service-slider bg-gray-100 py-10 px-4">
//       <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
//         Our Featured Services
//       </h1>
//       <div className="mx-auto max-w-lg"> {/* Reduced slider width */}
//         <Slider {...settings}>
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="service-card bg-white p-6 mx-2 shadow-lg rounded-lg flex flex-col items-center text-center"
//             >
//               <PromoteImage
//                 url={service.image}
//                 width="120"
//                 height="90"
//                 alt={service.title}
//                 className="rounded-lg shadow-md mb-4"
//               />
//               <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
//               <p className="text-sm text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default ServiceSlider;
