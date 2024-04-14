'use client'
import FalconButton from "@/Components/reuse/Buttons/FalconButton"
import PromoteImage from "@/Components/reuse/Image/Image";
import './Bookappointment.css';
import { useState } from "react";
import Bus from '../../../public/bus.jpg'

export default function BookingMode() {
    const [selectedType, setSelectedType] = useState('');
    const setSelectedPlan = (value: string) => {
        setSelectedType(value)
        // if(sessionStorage) sessionStorage.setItem('bookingType',value)
    }
    return (
        <div className='grid grid-rows-2 grid-flow-col gap-20'>
            <CardComponent name='E-Bus' onClick={setSelectedPlan} selectedState={selectedType}/>
            <CardComponent name='E-Train' onClick={setSelectedPlan} selectedState={selectedType}/>
            <CardComponent name='E-Bill board' onClick={setSelectedPlan} selectedState={selectedType}/>
            <CardComponent name='E-Cutout Walls' onClick={setSelectedPlan} selectedState={selectedType}/>
            <CardComponent name='E-Posters' onClick={setSelectedPlan} selectedState={selectedType}/>
      </div>
  )
}
const CardComponent = ({ title, name, onClick,selectedState }: any) => {
    return <div className={`relative ${selectedState==name ?`selected`:null }`} onClick={()=>onClick(name)}>
        <div>{title}</div>
        <PromoteImage url={Bus} width='130' height='100' alt={title} />
        <FalconButton name={name}  />
    </div>
}
