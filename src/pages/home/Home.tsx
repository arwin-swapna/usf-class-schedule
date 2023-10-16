import { Grid, Typography } from "@mui/material";
import Calender from "../../components/Calender";

export default function Home(){
    return (
        <Grid container my={5} display="flex" flexDirection='row' justifyContent="space-between" >
            <Grid item xs={3}>
                <Typography>asdlkjnasdljk</Typography>
            </Grid>
            <Grid item xs={9}>
                <Calender/>
            </Grid>
        </Grid>
    )
}