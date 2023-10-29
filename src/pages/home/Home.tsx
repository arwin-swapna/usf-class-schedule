import { Grid,Typography } from "@mui/material";
import Calender from "../../components/Calender";
import SearchResult from "../../components/SearchResult";
import { useState } from "react";
import { ClassData } from "../../components/data";

export default function Home(){

    const [calendarEvents, setCalendarEvents] = useState<ClassData[]>([])

    function addClassToCalendar(classData : ClassData){
        setCalendarEvents([...calendarEvents, classData]);
    };

    return (
        <>
            <Typography my={2}>Spring 2024</Typography>
            <Grid container spacing={2}>
                <Grid item xs={4} px={2} >
                    <SearchResult onAddClassToCalendar={addClassToCalendar}/>
                </Grid>
                <Grid item xs={8}>
                    <Calender items={calendarEvents}/>
                </Grid>
            </Grid>
        </>
    )
}