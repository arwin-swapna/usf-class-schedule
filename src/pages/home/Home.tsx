import { Alert, Badge, Box, Button, Card, CardContent, Divider, Drawer, Grid,IconButton,Snackbar,Typography } from "@mui/material"
import Calender from "../../components/Calender";
import SearchResult from "../../components/SearchResult";
import SectionSlideIn from "../../components/SectionSlideIn";
import { useState } from "react";
import { CourseData } from "../../components/courses";
import { ClassSectionData } from "../../components/class_sections";
import { getWeekday, convertTime } from "../../helpers";
import CloseIcon from '@mui/icons-material/Close';

export default function Home(){

    const [classCount ,setClassCount] = useState(0)
    const [open, setOpen] = useState(false);
    const [sopen, ssetOpen] = useState(false);
    const [regSuccessOpen, regSuccessSetOpen] = useState(false);
    const [clearOpen, clearSetOpen] = useState(false);
    const [calendarEvents, setCalendarEvents] = useState<ClassSectionData[]>([])
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [sectionSelectOpen, setSectionSelectOpen] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState<CourseData>()

    function addClassToCalendar(classSectionData : ClassSectionData){

        const duplicate = calendarEvents.some((data) => data.course_id === classSectionData.course_id)
        if(!duplicate){
            setCalendarEvents([...calendarEvents, classSectionData]);
            setClassCount(calendarEvents.length + 1)
            ssetOpen(true)
        }else{
            setOpen(true)
        }
    };

    function clearCalendar() {
        setCalendarEvents([]);
        setClassCount(0);
        clearSetOpen(true)
    }

    function openSectionSelector(courseData : CourseData) {
        setSelectedCourse(courseData)
        setSectionSelectOpen(true)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const shandleClose = () => {
        ssetOpen(false);
    };

    const clearHandleClose = () => {
        clearSetOpen(false);
    };

    const regSuccessHandleClose = () => {
        regSuccessSetOpen(false);
    };

    function removeItem(courseCrn : number){
        const updatedEvents = calendarEvents.filter(events => events.crn !== courseCrn);
        setCalendarEvents(updatedEvents)
    }

    return (
        <>
            <Box display='flex' my={2} justifyContent='space-between'>
                <Typography my='auto'>Spring 2024</Typography>
            </Box>
            <Grid container spacing={2} marginBottom={"20px"}>
                <Grid item xs={4} px={2} >
                    <SearchResult onSetSelectedCourse={openSectionSelector}/>
                </Grid>
                <Grid item xs={8}>
                    <Button variant="secondary" style={{margin: "0px 20px 0px 0px"}}
                        disabled={!classCount} onClick={() => regSuccessSetOpen(true)}>Register</Button>
                    <Button variant="outlined" disabled={!classCount} onClick={() => clearCalendar()}>Clear Schedule</Button>
                    <div style={{float: "right"}}>
                        <Badge badgeContent={classCount} color='primary' component='span'>
                            <Button variant="outlined" onClick={() => setDrawerOpen(true)} >Selected Classes</Button>
                        </Badge>
                    </div>
                    <Calender items={calendarEvents}/>
                </Grid>
            </Grid>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={3000} 
                onClose={handleClose}
            >
                <Alert severity="error">Cannot add duplicate class</Alert>
            </Snackbar>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={sopen}
                autoHideDuration={1000} 
                onClose={shandleClose}
            >
                <Alert severity="success">Class Added</Alert>
            </Snackbar>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={clearOpen}
                autoHideDuration={1000} 
                onClose={clearHandleClose}
            >
                <Alert severity="info">Schedule Cleared</Alert>
            </Snackbar>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={regSuccessOpen}
                autoHideDuration={1000} 
                onClose={regSuccessHandleClose}
            >
                <Alert severity="success">Successfully registered!</Alert>
            </Snackbar>

            <Drawer anchor="left" PaperProps={{sx:{ width: "35%", backgroundColor: "#006748" },}}
             open={sectionSelectOpen} onClose={() => setSectionSelectOpen(false)}>
                {selectedCourse === undefined ? (
                    <Typography>No course selected.</Typography>
                ) : (
                    <SectionSlideIn selectedCourse={selectedCourse} onAddClassToCalendar={addClassToCalendar}/>
                )}
            </Drawer>

            <Drawer anchor="right" PaperProps={{sx:{ width: "20%"}}} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box p={3}>
                    <Box mb={2}>
                        <Typography color='primary'>Current Schedule: </Typography>
                        <Divider/>
                    </Box>
                    {calendarEvents.length === 0 ? (
                        <Typography variant="body1">No classes in the schedule</Typography>
                    ) : (
                        calendarEvents.map((result) => (
                            <Grid item xs={12} key={result.crn} pb={1}>
                                <Card variant='outlined' sx={{borderRadius:'18px'}}>
                                        <CardContent>
                                            <Box display='flex' justifyContent='space-between'>
                                                <Typography variant="h6" component="div">
                                                    {result.course_title}
                                                </Typography>
                                                <IconButton onClick={() => removeItem(result.crn)} >
                                                    <CloseIcon color="error" />
                                                </IconButton>
                                            </Box>
                                            <Typography variant="body2" color="text.secondary">
                                                {result.course_code}<br/>
                                                Days: {getWeekday(result.days[0])}, {getWeekday(result.days[1])}<br/>
                                                Time: {convertTime(result.startTime)} - {convertTime(result.endTime)}<br/>
                                                Professor: {result.professor}<br/>
                                                Location: {result.location}<br/>
                                            </Typography>
                                        </CardContent>
                                </Card>
                            </Grid>
                        ))
                    )}
                </Box>
            </Drawer>
        </>
    )
}