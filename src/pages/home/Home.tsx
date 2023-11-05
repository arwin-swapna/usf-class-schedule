import { Alert, Badge, Box, Button, Card, CardActionArea, CardContent, Divider, Drawer, Grid,Snackbar,Typography } from "@mui/material"
import Calender from "../../components/Calender";
import SearchResult from "../../components/SearchResult";
import SectionSlideIn from "../../components/SectionSlideIn";
import { useState } from "react";
import { CourseData } from "../../components/courses";
import { ClassSectionData } from "../../components/class_sections";

export default function Home(){

    const [classCount ,setClassCount] = useState(0)
    const [open, setOpen] = useState(false);
    const [sopen, ssetOpen] = useState(false);
    const [calendarEvents, setCalendarEvents] = useState<ClassSectionData[]>([])
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [sectionSelectOpen, setSectionSelectOpen] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState<CourseData>()

    function addClassToCalendar(classSectionData : ClassSectionData){

        const exists = calendarEvents.some((data) => data.crn === classSectionData.crn)
        if(!exists){
            setCalendarEvents([...calendarEvents, classSectionData]);
            setClassCount(calendarEvents.length + 1)
            ssetOpen(true)
        }else{
            setOpen(true)
        }
    };

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

    return (
        <>
            <Box display='flex' my={2} justifyContent='space-between'>
                <Typography my='auto'>Spring 2024</Typography>
                <Badge badgeContent={classCount} color='primary' component='span'>
                    <Button variant="outlined" onClick={() => setDrawerOpen(true)} >Selected Classes</Button>
                </Badge>

            </Box>
            <Grid container spacing={2}>
                <Grid item xs={4} px={2} >
                    <SearchResult onSetSelectedCourse={openSectionSelector}/>
                </Grid>
                <Grid item xs={8}>
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
                <Alert severity="error">This class has already been added</Alert>
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

            <Drawer anchor="left" PaperProps={{sx:{ width: "35%", backgroundColor: "#006748" },}}
             open={sectionSelectOpen} onClose={() => setSectionSelectOpen(false)}>
                {selectedCourse === undefined ? (
                    <Typography>No course selected.</Typography>
                ) : (
                    <SectionSlideIn selectedCourse={selectedCourse} onAddClassToCalendar={addClassToCalendar}/>
                )}
            </Drawer>

            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
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
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography variant="h6" component="div">
                                                {result.course_title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Time: {result.days} {result.startTime}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Professor: {result.professor}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))
                    )}
                </Box>
            </Drawer>
        </>
    )
}