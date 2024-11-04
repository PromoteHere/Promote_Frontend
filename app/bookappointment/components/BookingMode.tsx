"use client";

// Import necessary components and assets
import FalconButton from "@/Components/reuse/Buttons/FalconButton";
import PromoteImage from "@/Components/reuse/Image/Image";
import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Import Images
import eBusImage from "../assets/EBusPromte.png";
import ePosterImage from "../assets/ePosterImage.png";
import eBillboardImage from "../assets/eBillboardImage.png";
import eCutoutImage from "../assets/eCutoutImage.jpg";
import eTrainImage from "../assets/E-Trains.png";

export default function BookingMode({ selectedName }: any) {
  const [selectedType, setSelectedType] = useState("");
//   selectedName = selectedType;
  // Handler to update selected type
  const setSelectedPlan = (value: string) => {
    setSelectedType(value);
    selectedName(value);
    // Optional: Save to sessionStorage if needed
    // if (sessionStorage) sessionStorage.setItem('bookingType', value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <CardComponent
        name="E-Bus LED Screens:"
        subtitle="Captivate commuters with captivating visuals displayed on the exterior of buses."
        image={eBusImage}
        onClick={setSelectedPlan}
        selectedState={selectedType}
      />
      <CardComponent
        name="E-Posters :"
        subtitle="Showcase your brand digitally on virtual billboards, reaching a wide online audience."
        image={ePosterImage}
        onClick={setSelectedPlan}
        selectedState={selectedType}
      />

      <CardComponent
        name="E-Cutout Walls:"
        subtitle=" Create immersive brand experiences with lifelike virtual cutouts that appear in real-world settings"
        image={eCutoutImage}
        onClick={setSelectedPlan}
        selectedState={selectedType}
      />
      <CardComponent
        name="E-Billboards:"
        subtitle=" Dominate the digital landscape with dynamic, eye-catching ads on virtual billboards."
        image={eBillboardImage}
        onClick={setSelectedPlan}
        selectedState={selectedType}
      />
      <CardComponent
        name="E-Train LED Screens:"
        subtitle="Reach a captive audience with impactful ads on the interior and exterior of trains."
        image={eTrainImage}
        onClick={setSelectedPlan}
        selectedState={selectedType}
      />
    </div>
  );
}

// CardComponent to render each card with dynamic content
const CardComponent = ({
  name,
  subtitle,
  image,
  onClick,
  selectedState,
}: any) => {
  const isSelected = selectedState === name;

  return (
    <div
      className={`relative flex flex-col items-center justify-center p-6 border rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform 
                        ${
                          isSelected
                            ? "border-blue-500 bg-gradient-to-br from-blue-200 to-blue-400"
                            : "border-gray-300 bg-white"
                        }
                        hover:shadow-xl hover:scale-105`}
      onClick={() => onClick(name)}
    >
      <div className="text-lg font-semibold mb-2 flex items-center">
        {isSelected && <AiOutlineCheckCircle className="text-green-500 mr-2" />}
        {name}
      </div>
      <PromoteImage
        url={image}
        width="130"
        height="100"
        alt={name}
        className="mb-4 rounded-lg shadow-md"
      />
      <div className="text-sm mt-3 flex items-center">
        {name === name && subtitle}
      </div>
      {/* <FalconButton name={name} /> */}
    </div>
  );
};
