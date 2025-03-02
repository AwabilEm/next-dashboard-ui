"use client"

import { time } from "console";
import { describe } from "node:test";
import { title } from "process";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Image from "next/image";



type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

//TEMPORARY
const events = [
    {
        id: 1,
        title: 'Morning Yoga Session',
        time: "6:30 AM - 7:30 AM",
        description: "A refreshing yoga session to start the day."
    },
    {
        id: 2,
        title: 'Team Standup Meeting',
        time: "9:00 AM - 9:30 AM",
        description: "Daily team sync-up to discuss progress and blockers."
    },
    {
        id: 3,
        title: 'Lunch Break',
        time: "12:30 PM - 1:30 PM",
        description: "Time to relax and have a meal."
    }
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white rounded-md p-4'>
        <Calendar onChange={onChange} value={value} />
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold my-4">Events</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20} />


        </div>
        <div className="flex flex-col gap-4">
            {events.map(events=>(
                <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
                 key={events.id}>
                    <div className="flex items-center justify-between">
                        <h1 className="font-semibold text-gray-600">{events.title}</h1>
                        <span className="text-gray-300 text-sm">{events.time}</span>
                    </div>
                    <p>{events.description}</p>

                </div>
            ))}
        </div>
</div>
  )
}

export default EventCalendar