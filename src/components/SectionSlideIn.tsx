import { Box, Card, CardActionArea, CardContent, Divider, Drawer, Grid,Table,TableBody,TableCell,TableHead,TableRow,Typography } from "@mui/material";

export default function SectionSlideIn() {
    return (
        /** Select Class Section slide-in */
            <Box p={3}>
                <Box mb={2}>
                    <Typography color='primary'>COP 4530 Data Structures </Typography>
                    <Divider/>
                </Box>
                <Grid item xs={12} key={1} pb={1}>
                    <Card variant='outlined' sx={{borderRadius:'18px'}}>
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {"COP 4530 Section 001"}
                                </Typography>
                                <Typography variant="body2">
                                    CRN: {"86627"}
                                </Typography>
                                <Typography variant="body2">
                                    Professor: {"Valentina Korzhova"}
                                </Typography>
                                <Typography variant="body2">
                                    Max Seats: {"95"}<br></br>
                                    Available Seats: {"22"}<br></br>
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
                                            <TableCell>{"In-Person"}</TableCell>
                                            <TableCell>Monday/<br></br>Wednesday</TableCell>
                                            <TableCell>8:00am<br></br>-<br></br>9:15am</TableCell>
                                            <TableCell>{"CPR 103"}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Box>
    )
}