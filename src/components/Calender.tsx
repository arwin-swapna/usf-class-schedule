import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import { ClassSectionData } from "./class_sections";
import { useEffect, useState } from "react";


interface Props {
	items: ClassSectionData[];
}

export default function Calendar({items}:Props) {
	const [events, setEvents] = useState([{	}]);

	const dayHeaderContent = (arg: any) => {
		const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		return weekdays[arg.date.getDay()];
	};
	
	useEffect(() => {
		let test = [{}]
		let i = 0
		for(const classD of items){
				test = [...test,{
					id:i,
					title:classD.course_title.toString(),
					startTime:classD.startTime,
					endTime:classD.endTime,
					allDay: false,
					groupId: 1,
					daysOfWeek: classD.days
				}]
			i += 1
		}
		setEvents(test)
	},[items])

	return (
		<>
			<FullCalendar
				eventOverlap={false}
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
				initialView="timeGridWeek"
				height='auto'
				headerToolbar={{ start: "", center: "", end: "" }}
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
