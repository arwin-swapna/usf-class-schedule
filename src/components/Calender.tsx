import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import getDayOfWeekDate from '../utils/calenderHelpers'
import listPlugin from '@fullcalendar/list';
import { ClassData } from "./data";
import { useEffect, useState } from "react";


interface Props {
	items: ClassData[];
}

export default function Calendar({items}:Props) {
	const [events, setEvents] = useState([{}]);

	const dayHeaderContent = (arg: any) => {
		const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		return weekdays[arg.date.getDay()];
	};
	
	useEffect(() => {
		let test = [{}]
		let i = 0
		for(const classD of items){
			let days = classD.days.split(',');
			if(days.length > 0){
				for(const day of days){
					test = [...test,{
						id:i,
						title:classD.title.toString(),
						start:getDayOfWeekDate(day.trim().toString(),classD.startTime.toString()),
						end:getDayOfWeekDate(day.trim().toString(),classD.endTime.toString()),
						allDay: false
					}]
					i += 1
				}
			}
			i += 1
		}
		setEvents(test)
	},[items])

	return (
		<>
			<FullCalendar
				eventOverlap={false}
				initialDate={getDayOfWeekDate("Monday", "08:00:00")}
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
				initialView="timeGridWeek"
				height='auto'
				headerToolbar={{ start: "", center: "", end: "timeGridWeek,listWeek" }}
				allDaySlot={false}
				weekends={false}
				slotMinTime="08:00:00"
				slotMaxTime="20:00:00"
				dayHeaderContent={dayHeaderContent}
				events={events}
			/>
		</>
	);
}
