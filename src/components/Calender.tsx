import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { Button } from "@mui/material";

export default function Calendar() {
  const getDayOfWeekDate = (dayOfWeek : any, time : any) => {
    const today = new Date();
    const daysUntilDesiredDay = getDaysUntilDayOfWeek(dayOfWeek);

    if (daysUntilDesiredDay > 0) {
      today.setDate(today.getDate() + daysUntilDesiredDay);
    } else if (daysUntilDesiredDay === 0) {
      if (today.getHours() >= parseInt(time.split(":")[0])) {
        today.setDate(today.getDate() + 7);
      }
    }

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${date}T${time}`;
  };

  // Function to get the number of days until the next occurrence of a specific day of the week.
  const getDaysUntilDayOfWeek = (dayOfWeek : any) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const desiredDayIndex = daysOfWeek.indexOf(dayOfWeek);
    const currentDayIndex = new Date().getDay();
    return (desiredDayIndex + 7 - currentDayIndex) % 7;
  };

  const [events, setEvents] = useState([
    {
      title: "event1",
      start: getDayOfWeekDate("Monday", "08:00:00"),
      end: getDayOfWeekDate("Monday", "09:15:00"),
      allDay: false,
    },
    {
      title: "event2",
      start: getDayOfWeekDate("Tuesday", "10:00:00"),
      end: getDayOfWeekDate("Tuesday", "15:15:00"),
      allDay: false,
    },
  ]);

  function insert(){
	let test = [
		...events,
		{
			title: "event1",
			start: getDayOfWeekDate("Friday", "08:00:00"),
			end: getDayOfWeekDate("Friday", "09:15:00"),
			allDay: false,
		  },
		  {
			title: "event2",
			start: getDayOfWeekDate("Wednesday", "10:00:00"),
			end: getDayOfWeekDate("Wednesday", "15:15:00"),
			allDay: false,
		  },
	]

	setEvents(test);
  }

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
		height='auto'
        headerToolbar={{ start: "", center: "", end: "" }}
        allDaySlot={false}
        weekends={false}
        slotMinTime="08:00:00"
        slotMaxTime="20:00:00"
        events={events}
      />
	  <Button onClick={insert} variant="outlined">Change</Button>
    </>
  );
}
