import { Alert, Grid,Snackbar,Typography } from "@mui/material";
import Calender from "../../components/Calender";
import SearchResult from "../../components/SearchResult";
import { useState } from "react";
import { ClassData } from "../../components/data";
import { useOutletContext } from "react-router-dom";

export default function Home(){

    const [classCount ,setClassCount] = useOutletContext() as [number, React.Dispatch<React.SetStateAction<number>>];;
    const [open, setOpen] = useState(false);
    const [calendarEvents, setCalendarEvents] = useState<ClassData[]>([])

    function addClassToCalendar(classData : ClassData){

        const exists = calendarEvents.some((data) => data.id === classData.id)
        if(!exists){
            setCalendarEvents([...calendarEvents, classData]);
            setClassCount(calendarEvents.length + 1)
            console.log(classCount)
        }else{
            setOpen(true)
        }
    };

    const handleClose = () => {
        setOpen(false);
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
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                open={open}
                autoHideDuration={5000} 
                onClose={handleClose}
            >
                <Alert severity="error">This class has been already added</Alert>
            </Snackbar>
        </>
    )
}