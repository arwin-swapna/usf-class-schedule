import { Grid,Typography } from "@mui/material";
import Calender from "../../components/Calender";
import SearchResult from "../../components/SearchResult";

export default function Home(){
    return (
        <>
            <Typography my={2}>Spring 2024</Typography>
            <Grid container spacing={2}>
                <Grid item xs={4} px={2} >
                    <SearchResult/>
                </Grid>
                <Grid item xs={8}>
                    <Calender/>
                </Grid>
            </Grid>
        </>
    )
}