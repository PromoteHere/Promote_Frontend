import React from 'react';
import './Bookappointment.css';
import InputComponent from '@/Components/reuse/Input/InputComponent';

export default function BookingTable() {
    const busHeaders = ['Select', "Bus No.", "Bus Name", "From", "To", "Dept. Time", "Total Fair", "Slot"]
    const busNames = [
        { busNo: '100', busName: 'SETC', from: 'DR.M.G.R', to: "Bengalore", deptTime: "09.20 PM", fair: "500" },
        { busNo: '100', busName: 'SETC', from: 'DR.M.G.R', to: "Bengalore", deptTime: "09.20 PM", fair: "500" },
        { busNo: '100', busName: 'SETC', from: 'DR.M.G.R', to: "Bengalore", deptTime: "09.20 PM", fair: "500" },
        { busNo: '100', busName: 'SETC', from: 'DR.M.G.R', to: "Bengalore", deptTime: "09.20 PM", fair: "500" },
        { busNo: '100', busName: 'SETC', from: 'DR.M.G.R', to: "Bengalore", deptTime: "09.20 PM", fair: "500" }
    ]
    return (
        <div>
            <div className='flex'> 
                <InputComponent label="From" type="text"/>
                <InputComponent label="To" type="text"/>
                <InputComponent label="Date" type="date"/>
            </div>
            <table>
                <thead>
                    <tr>
                        {busHeaders?.map((element: any) => {
                            return <th key={element}>{element}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {busNames?.map((element: any) => {
                        return <tr key={element?.busName}>
                            <td><input type='checkbox' /></td>
                            <td>{element?.busNo}</td>
                            <td>{element?.busName}</td>
                            <td>{element?.from}</td>
                            <td>{element?.to}</td>
                            <td>{element?.deptTime}</td>
                            <td>{element?.fair}</td>
                            <td><button>Book Slot</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
