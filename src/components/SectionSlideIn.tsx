import { Box, Card, CardActionArea, CardContent, Divider, Grid,Table,TableBody,TableCell,TableHead,TableRow,Typography } from "@mui/material";
import { useState, useEffect } from 'react';
import { ClassSectionData, dummyClassSectionData } from "./class_sections";

export default function SectionSlideIn({selectedCourse} : any) {

    const [courseSections, setCourseSections] = useState<ClassSectionData[]>([]);

    useEffect(() => {
        if (selectedCourse === undefined) {
            setCourseSections([]);
        }
        else {
            const courseSections = dummyClassSectionData.filter((section) => {
                return section.course_id == selectedCourse.id;
            });
            setCourseSections(courseSections);
        }
    });

    return (
        /** Select Class Section slide-in */
            <Box p={3}>
                <Box mb={2}>
                    <Typography color='white'>{selectedCourse.course_code} {selectedCourse.title}</Typography>
                    <Divider/>
                </Box>
                {courseSections.length === 0 ? (
                    <Typography align='center' variant="body1">No course sections found.</Typography>
                ) : (
                    <Grid container spacing={2} columns={1}>
                        {courseSections.map((result) => (
                            <Grid item xs={12} key={result.crn}>
                                <Card variant='outlined' sx={{borderRadius:'18px'}}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography variant="h6" component="div">
                                                {result.course_code} {result.course_title}
                                            </Typography>
                                            <Typography variant="body2">
                                                CRN: {result.crn}
                                            </Typography>
                                            <Typography variant="body2">
                                                Professor: {result.professor}
                                            </Typography>
                                            <Typography variant="body2">
                                                Max Seats: {result.max_seats}<br></br>
                                                Available Seats: {result.available_seats}<br></br>
                                            </Typography>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Format</TableCell>
                                                        <TableCell>Days</TableCell>
                                                        <TableCell>Time</TableCell>
                                                        <TableCell>Location</TableCell>
                                                    </TableRow>
                                            </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>{result.format}</TableCell>
                                                        <TableCell>{result.days}</TableCell>
                                                        <TableCell>{result.startTime}<br></br>-<br></br>{result.endTime}</TableCell>
                                                        <TableCell>{result.location}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>
            
    )
}