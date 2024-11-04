import { useEffect, useState } from 'react';
import { useGeolocated } from 'react-geolocated';
import dynamic from 'next/dynamic';
import { DatePicker, TimePicker, Checkbox, Button, Modal, message } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

// Dynamically load Google Autocomplete to avoid SSR issues
const GoogleAutocomplete = dynamic(() => import('react-google-autocomplete'), {
  ssr: false,
});

interface LEDScreen {
  id: string;
  name: string;
  size: string;
  resolution: string;
  specialty: string;
  imageUrl: string;
  status: 'available' | 'unavailable';
  location: string;
}

interface Location {
  name: string;
  lat: number;
  lng: number;
  screens: LEDScreen[];
}

export default function Home() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [inTime, setInTime] = useState<string | null>(null);
  const [outTime, setOutTime] = useState<string | null>(null);
  const [selectedScreens, setSelectedScreens] = useState<string[]>([]);
  const [filteredScreens, setFilteredScreens] = useState<LEDScreen[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { coords } = useGeolocated({ positionOptions: { enableHighAccuracy: true } });

  // Sample Data
  useEffect(() => {
    const sampleLocations: Location[] = [
      {
        name: 'City Mall',
        lat: 10.7905,
        lng: 78.7047,
        screens: [
          {
            id: '1',
            name: 'City Mall Big Screen',
            size: '10x5 ft',
            resolution: '1920x1080',
            specialty: 'High brightness for daylight visibility',
            imageUrl: '/images/city-mall-big-screen.jpg',
            status: 'available',
            location: 'City Mall',
          },
          {
            id: '2',
            name: 'City Mall Small Screen',
            size: '8x4 ft',
            resolution: '1280x720',
            specialty: 'Compact for indoor advertising',
            imageUrl: '/images/city-mall-small-screen.jpg',
            status: 'unavailable',
            location: 'City Mall',
          },
        ],
      },
      {
        name: 'Central Plaza',
        lat: 10.8005,
        lng: 78.7057,
        screens: [
          {
            id: '3',
            name: 'Central Plaza Mega Screen',
            size: '12x6 ft',
            resolution: '2560x1440',
            specialty: 'Ultra HD for stunning visuals',
            imageUrl: '/images/central-plaza-mega-screen.jpg',
            status: 'available',
            location: 'Central Plaza',
          },
          {
            id: '4',
            name: 'Central Plaza Standard Screen',
            size: '10x5 ft',
            resolution: '1920x1080',
            specialty: 'Perfect for large events',
            imageUrl: '/images/central-plaza-standard-screen.jpg',
            status: 'available',
            location: 'Central Plaza',
          },
        ],
      },
    ];
    setLocations(sampleLocations);
  }, []);

  // Filter Screens Based on Selected Date and Time
  const filterScreens = () => {
    const availableScreens = locations.flatMap((location) => location.screens);
    const filtered = availableScreens.filter((screen) => screen.status === 'available');
    setFilteredScreens(filtered);
  };

  useEffect(() => {
    if (selectedDate && inTime && outTime) {
      filterScreens();
    }
  }, [selectedDate, inTime, outTime]);

  // Calculate Total Cost Based on Selected Screens and Duration
  const calculateTotalCost = () => {
    if (!inTime || !outTime) return 0;

    const startTime = dayjs(inTime, 'HH:mm');
    const endTime = dayjs(outTime, 'HH:mm');
    const durationMinutes = endTime.diff(startTime, 'minute');
    
    if (durationMinutes <= 0) return 0; // Invalid duration

    let total = 0;
    
    // Base price for the first 10 minutes
    if (durationMinutes <= 10) {
      total += 1199;
    } else {
      total += 1199; // Initial charge for the first 10 minutes
      // Additional cost for minutes exceeding 10
      const additionalMinutes = durationMinutes - 10;
      const additionalCost = additionalMinutes * (1199 / 10); // Calculate cost per minute
      total += additionalCost;
    }
    
    // Price adjustment for each second
    const additionalSeconds = (endTime.diff(startTime, 'second') % 60);
    if (additionalSeconds > 0) {
      total += (additionalSeconds / 60) * (1199 / 10); // Adjust for seconds
    }

    return Math.ceil(total); // Ensure the total cost is a whole number
  };

  // Update total cost whenever selected screens change
  useEffect(() => {
    setTotalCost(calculateTotalCost());
  }, [selectedScreens, inTime, outTime]);

  // Handle Screen Selection
  const handleScreenSelect = (screenId: string) => {
    setSelectedScreens((prev) =>
      prev.includes(screenId) ? prev.filter((id) => id !== screenId) : [...prev, screenId]
    );
  };

  const handleSubmit = () => {
    if (selectedScreens.length === 0) {
      message.warning('Please select at least one screen.');
      return;
    }
    setIsModalVisible(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Book LED Screen Slots</h1>
        <p className="text-gray-600 mt-2">Select a location, date, and time to publish your ads.</p>
      </div>

      {/* Location Search */}
      <div className="max-w-2xl mx-auto mb-6">
        <GoogleAutocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          onPlaceSelected={(place) => {
            const location = place.geometry.location;
            setUserLocation({ lat: location.lat(), lng: location.lng() });
            filterScreens();
          }}
          placeholder="Search for a location"
          className="border p-3 rounded-lg w-full shadow-md focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* Date and Time Pickers */}
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
        <div>
          <label className="block text-gray-700 mb-1"><CalendarOutlined /> Select Date</label>
          <DatePicker
            onChange={(date, dateString) => setSelectedDate(dateString)}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1"><ClockCircleOutlined /> In-Time</label>
          <TimePicker
            onChange={(time, timeString) => setInTime(timeString)}
            className="w-full border rounded-lg p-2"
            format="HH:mm"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1"><ClockCircleOutlined /> Out-Time</label>
          <TimePicker
            onChange={(time, timeString) => setOutTime(timeString)}
            className="w-full border rounded-lg p-2"
            format="HH:mm"
          />
        </div>
      </div>

      {/* LED Screens List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScreens.map((screen) => (
          <div
            key={screen.id}
            className={`border p-4 rounded-xl shadow-md bg-white transition-transform transform hover:scale-105 ${
              selectedScreens.includes(screen.id) ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <img src={screen.imageUrl} alt={screen.name} className="w-full h-40 object-cover rounded-lg mb-2" />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{screen.name}</h2>
            <p className="text-gray-500 mb-1">Size: {screen.size}</p>
            <p className="text-gray-500 mb-1">Resolution: {screen.resolution}</p>
            <p className="text-gray-500 mb-1">Specialty: {screen.specialty}</p>
            <p className="text-gray-500 mb-1">Price Per Hour: ₹{1199 / 10 * 60} (for 60 minutes)</p>
            <Checkbox
              checked={selectedScreens.includes(screen.id)}
              onChange={() => handleScreenSelect(screen.id)}
              className="mt-2"
            >
              Select this screen
            </Checkbox>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="text-center mt-8">
        <Button
          type="primary"
          size="large"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          Publish Ad
        </Button>
      </div>

      {/* Confirmation Modal */}
      <Modal
        title="Confirm Your Selection"
        visible={isModalVisible}
        onOk={() => {
          message.success('Ad successfully booked!');
          setIsModalVisible(false);
        }}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>You have selected {selectedScreens.length} screen(s).</p>
        <p>Total Cost: ₹{totalCost}</p>
      </Modal>
    </div>
  );
}
