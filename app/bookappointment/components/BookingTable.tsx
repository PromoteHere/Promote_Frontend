import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { FaBus, FaMapMarkerAlt, FaCalendarAlt, FaRedoAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';

export default function BookingTable() {
    const busHeaders = [
        'Select', 'Bus No.', 'Bus Name', 'From', 'To',
        'In Time', 'Out Time', 'Fare', 'Date', 'Slot'
    ];

    const busData = [
        { busNo: '100', busName: 'SETC', from: 'DR.M.G.R', to: 'Bangalore', inTime: '09:20 PM', outTime: '10:20 PM', fair: '500', date: '2024-10-28' },
        { busNo: '101', busName: 'SETC', from: 'Chennai', to: 'Bangalore', inTime: '09:40 PM', outTime: '10:50 PM', fair: '500', date: '2024-10-28' },
        { busNo: '102', busName: 'SETC', from: 'Trichy', to: 'Chennai', inTime: '08:15 PM', outTime: '09:20 PM', fair: '450', date: '2024-10-29' },
        { busNo: '103', busName: 'SETC', from: 'Madurai', to: 'Bangalore', inTime: '07:00 PM', outTime: '08:20 PM', fair: '600', date: '2024-10-29' },
        { busNo: '104', busName: 'SETC', from: 'Trichy', to: 'Perambalur', inTime: '05:15 PM', outTime: '07:20 PM', fair: '450', date: '2024-10-30' },
        { busNo: '105', busName: 'SETC', from: 'Madurai', to: 'Perambalur', inTime: '06:00 PM', outTime: '00:20 PM', fair: '600', date: '2024-10-31' },
    ];

    const [fromSearch, setFromSearch] = useState(null);
    const [toSearch, setToSearch] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [filteredBuses, setFilteredBuses] = useState(busData);

    const uniqueFromPlaces = [...new Set(busData.map((bus) => bus.from))];
    const uniqueToPlaces = [...new Set(busData.map((bus) => bus.to))];

    const placeOptions = (places: any[]) =>
        places.map((place: any) => ({ value: place, label: place }));

    // Helper: Format date to 'YYYY-MM-DD' in local timezone
    const formatDateLocal = (date: string | number | Date) => {
        const localDate = new Date(date);
        localDate.setMinutes(localDate.getMinutes() - localDate.getTimezoneOffset()); // Adjust for timezone
        return localDate.toISOString().split('T')[0];
    };

    // Filter buses based on search inputs
    useEffect(() => {
        const filtered = busData.filter((bus) =>
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
                        <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                        <Select
                            options={placeOptions(uniqueFromPlaces)}
                            onChange={setFromSearch}
                            value={fromSearch}
                            placeholder="Select starting point"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                        <Select
                            options={placeOptions(uniqueToPlaces)}
                            onChange={setToSearch}
                            value={toSearch}
                            placeholder="Select destination"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
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

                <div className="overflow-x-auto">
                    <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead className="bg-indigo-600 text-white">
                            <tr>
                                {busHeaders.map((header) => (
                                    <th key={header} className="py-3 px-4 text-left text-sm font-medium">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBuses.length > 0 ? (
                                filteredBuses.map((bus) => (
                                    <tr key={bus.busNo} className="hover:bg-indigo-100 transition-colors duration-200">
                                        <td className="py-3 px-4 border-b">
                                            <input type="checkbox" className="w-4 h-4" />
                                        </td>
                                        <td className="py-3 px-4 border-b">{bus.busNo}</td>
                                        <td className="py-3 px-4 border-b">{bus.busName}</td>
                                        <td className="py-3 px-4 border-b">{bus.from}</td>
                                        <td className="py-3 px-4 border-b">{bus.to}</td>
                                        <td className="py-3 px-4 border-b">{bus.inTime}</td>
                                        <td className="py-3 px-4 border-b">{bus.outTime}</td>
                                        <td className="py-3 px-4 border-b">{bus.fair}</td>
                                        <td className="py-3 px-4 border-b">{bus.date}</td>
                                        <td className="py-3 px-4 border-b">
                                            <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition">
                                                Book Slot
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={busHeaders.length} className="py-6 text-center text-gray-500">
                                        No buses found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
