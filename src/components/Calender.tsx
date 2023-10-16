import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


export default function Calendar() {
	return (
		<>
			<Fullcalendar
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
				initialView={"timeGridWeek"}
				height={"80vh"}
				headerToolbar={false}
				allDaySlot={false}
				weekends={false}
				slotMinTime="08:00:00"
				slotMaxTime="20:00:00"
			/>
		</>
	)
}