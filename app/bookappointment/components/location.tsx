// // pages/book/[location].tsx
// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import { format } from 'date-fns';

// const availableSlots = [
//   '10:00 AM - 11:00 AM',
//   '11:00 AM - 12:00 PM',
//   '12:00 PM - 1:00 PM',
//   '2:00 PM - 3:00 PM',
// ];

// export default function BookLocation() {
//   const router = useRouter();
//   const { location } = router.query;
//   const [selectedSlot, setSelectedSlot] = useState('');

//   const handleBooking = () => {
//     alert(`Booking confirmed for ${location} at ${selectedSlot}`);
//     router.push('/');
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">
//         Book a Slot at {location}
//       </h1>

//       <div className="grid grid-cols-1 gap-4">
//         {availableSlots.map((slot) => (
//           <button
//             key={slot}
//             className={`p-2 border rounded ${
//               selectedSlot === slot ? 'bg-blue-500 text-white' : ''
//             }`}
//             onClick={() => setSelectedSlot(slot)}
//           >
//             {slot}
//           </button>
//         ))}
//       </div>

//       <button
//         className="mt-4 bg-green-500 text-white p-2 rounded"
//         onClick={handleBooking}
//         disabled={!selectedSlot}
//       >
//         Confirm Booking
//       </button>
//     </div>
//   );
// }
