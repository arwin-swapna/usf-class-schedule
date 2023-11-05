import { Box, Card, CardActionArea, CardContent, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CourseData, dummyCourseData } from './courses';

export default function SearchResult({onSetSelectedCourse} : any) {
  const [searchText, setSearchText] = useState<string>('');
  const [searchResults, setSearchResults] = useState<CourseData[]>([]);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const value = event.target.value;
    setSearchText(value);

    if (value === '') {
        setSearchResults([]);
    }else{
        const searchResults = dummyCourseData.filter((classInfo) => {
          return classInfo.title.toLowerCase().includes(value.toLowerCase());
        });
        setSearchResults(searchResults);
    }
  };

  return (
    <Box px={2}>
        <TextField
            sx={{ borderWidth: '50px',paddingBottom:2 }}
            id="outlined-basic"
            label="Class Search"
            size="small"
            variant="outlined"
            fullWidth
            onChange={handleTextChange}
            value={searchText}
        />
        <Box style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            {searchResults.length === 0 ? (
                <Typography align='center' variant="body1">No classes found</Typography>
            ) : (
                <Grid container spacing={2} pt={2}>
                    {searchResults.map((result) => (
                        <Grid item xs={12} key={result.id}>
                            <Card variant='outlined' sx={{borderRadius:'18px'}}>
                                <CardActionArea onClick={() => onSetSelectedCourse(result)}>
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            {result.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {result.course_code}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>

    </Box>
  );
}

