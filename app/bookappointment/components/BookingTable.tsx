import React, { useState, useEffect } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { FaBus, FaMapMarkerAlt, FaRedoAlt, FaTimes } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingTable.css";

interface Bus {
  busNo: string;
  busName: string;
  from: string;
  to: string;
//   inTime: string;
//   outTime: string;
  fare: string;
  date: string;
  adInTime?: string;
  adOutTime?: string;
  adDuration?: string;
}

interface Option {
  value: string;
  label: string;
}

export default function BookingTable() {
  const busData: Bus[] = [
    {
      busNo: "100",
      busName: "SETC",
      from: "DR.M.G.R",
      to: "Bangalore",
    //   inTime: "09:20 PM",
    //   outTime: "10:20 PM",
      fare: "500",
      date: "2024-10-28",
    },
    {
      busNo: "101",
      busName: "SETC",
      from: "Chennai",
      to: "Bangalore",
    //   inTime: "09:40 PM",
    //   outTime: "10:50 PM",
      fare: "500",
      date: "2024-10-28",
    },
    {
      busNo: "102",
      busName: "TNSTC",
      from: "Trichy",
      to: "Chennai",
    //   inTime: "09:40 PM",
    //   outTime: "10:50 PM",
      fare: "500",
      date: "2024-10-28",
    },
    {
      busNo: "103",
      busName: "SETC",
      from: "Perambalur",
      to: "Bangalore",
    //   inTime: "09:40 PM",
    //   outTime: "10:50 PM",
      fare: "500",
      date: "2024-10-28",
    },
  ];

  const [fromSearch, setFromSearch] = useState<Option | null>(null);
  const [toSearch, setToSearch] = useState<Option | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filteredBuses, setFilteredBuses] = useState<Bus[]>(busData);
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [adInTime, setAdInTime] = useState<string>("");
  const [adOutTime, setAdOutTime] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [calculatedFare, setCalculatedFare] = useState<any>(0);
  //@ts-ignore
  const uniqueFromPlaces = [...new Set(busData.map((bus) => bus.from))];
  //@ts-ignore
  const uniqueToPlaces = [...new Set(busData.map((bus) => bus.to))];

  const placeOptions = (places: string[]): Option[] =>
    places.map((place) => ({ value: place, label: place }));

  const formatDateLocal = (date: Date): string => {
    const localDate = new Date(date);
    localDate.setMinutes(
      localDate.getMinutes() - localDate.getTimezoneOffset()
    );
    return localDate.toISOString().split("T")[0];
  };

  useEffect(() => {
    const filtered = busData.filter(
      (bus) =>
        (!fromSearch || bus.from === fromSearch.value) &&
        (!toSearch || bus.to === toSearch.value) &&
        (!selectedDate || bus.date === formatDateLocal(selectedDate))
    );
    setFilteredBuses(filtered);
  }, [fromSearch, toSearch, selectedDate]);

  const handleClear = () => {
    setFromSearch(null);
    setToSearch(null);
    setSelectedDate(null);
    setFilteredBuses(busData);
    setCalculatedFare(0);
  };

  const calculateAdDuration = () => {
    const start = new Date(`1970-01-01T${adInTime}:00`);
    const end = new Date(`1970-01-01T${adOutTime}:00`);
    const durationMinutes = (end.getTime() - start.getTime()) / (1000 * 60);

    if (durationMinutes < 10) {
      setError("Minimum ad duration is 10 minutes.");
      return null;
    }

    setError("");
    return {
      durationMinutes,
      fare: 499 + (durationMinutes - 10) * 50,
    };
  };

  const handleSaveAdTiming = () => {
    const result = calculateAdDuration();
    if (result && selectedBus) {
      const updatedBus = {
        ...selectedBus,
        adInTime,
        adOutTime,
        adDuration: `Duration: ${result.durationMinutes} mins, Fare: ₹${result.fare}`,
      };
   
      setFilteredBuses((prevBuses) =>
        prevBuses.map((bus) =>
          bus.busNo === selectedBus.busNo ? updatedBus : bus
        )
      );

      closePopup();
    }
  };

  const handleBusClick = (bus: Bus) => {
    setSelectedBus(bus);
    setAdInTime(bus.adInTime || "");
    setAdOutTime(bus.adOutTime || "");
    const result = calculateAdDuration();
    setCalculatedFare(result ? result?.fare : 0);
  };

  const closePopup = () => {
    setSelectedBus(null);
    setAdInTime("");
    setAdOutTime("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-indigo-200 to-purple-400 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          <FaBus className="inline-block mr-2 text-indigo-600" />
          Book Your Bus
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From
            </label>
            <Select
              options={placeOptions(uniqueFromPlaces)}
              onChange={setFromSearch}
              value={fromSearch}
              placeholder="Select starting point"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To
            </label>
            <Select
              options={placeOptions(uniqueToPlaces)}
              onChange={setToSearch}
              value={toSearch}
              placeholder="Select destination"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={setSelectedDate}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-400"
              placeholderText="Select a date"
            />
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <button
            onClick={handleClear}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition flex items-center gap-2"
          >
            <FaRedoAlt />
            Clear Filters
          </button>
        </div>

        <div className="flex flex-wrap justify-center">
          {filteredBuses.length > 0 ? (
            filteredBuses.map((bus) => (
              <div
                key={bus.busNo}
                className="bus-container mx-4 my-4"
                onClick={() => handleBusClick(bus)}
              >
                <div className="bus">
                  <div className="roof"></div>
                  <div className="body">
                    <div className="windows">
                      <div className="window front-window"></div>
                      <div className="window back-window"></div>
                      <div className="window middle-window"></div>
                    </div>
                    <div className="led-screen">Your Ad Here</div>
                    <div className="bus-info">
                      <p className="bus-name">
                        {bus.busName} - Bus No: {bus.busNo}
                      </p>
                      <p className="route">
                        <FaMapMarkerAlt className="inline-block mr-1" />{" "}
                        {bus.from} to {bus.to}
                      </p>
                      <p className="in-out-time">
                        <strong>Ad InTime:</strong> {bus.adInTime || "00:00"}{" "}
                        <strong>Ad OutTime:</strong> {bus.adOutTime || "00:00"}
                      </p>
                      {bus.adDuration && (
                        <p className="ad-duration">{bus.adDuration}</p>
                      )}
                    </div>
                  </div>
                  <div className="wheel front-wheel"></div>
                  <div className="wheel back-wheel"></div>
                </div>
                <button className="book-button">Book Slot</button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No buses found.</p>
          )}
        </div>
        {selectedBus && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative text-gray-800">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={closePopup}
              >
                <FaTimes className="text-lg" />
              </button>

              <h3 className="text-xl font-bold mb-4 text-center">
                Ad Booking Details
              </h3>
              <div className="space-y-3">
                <div>
                  <strong>Bus Name:</strong> {selectedBus.busName}
                </div>
                <div>
                  <strong>Route:</strong> {selectedBus.from} to {selectedBus.to}
                </div>
                <div>
                  <strong>Ad Fare:</strong> {  calculatedFare|| "₹00"}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ad In Time
                </label>
                <input
                  type="time"
                  value={adInTime}
                  onChange={(e) => setAdInTime(e.target.value)}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ad Out Time
                </label>
                <input
                  type="time"
                  value={adOutTime}
                  onChange={(e) => setAdOutTime(e.target.value)}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              <div className="mt-6 flex justify-between">
                <button
                  onClick={closePopup}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveAdTiming}
                  className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition"
                >
                  Save Timing
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
