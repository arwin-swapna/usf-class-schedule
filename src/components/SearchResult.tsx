import { Box, Card, CardActionArea, CardContent, Drawer, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ClassData, dummyClassData } from './data';

export default function SearchResult() {
  const [searchText, setSearchText] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ClassData[]>([]);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const value = event.target.value;
    setSearchText(value);

    if (value === '') {
        setSearchResults([]);
    }else{
        const searchResults = dummyClassData.filter((classInfo) => {
          return classInfo.title.toLowerCase().includes(value.toLowerCase());
        });
        setSearchResults(searchResults);
    }
  };

  return (
    <Box px={2}>
        <TextField
            sx={{ marginTop: '1.5rem', borderWidth: '50px' }}
            id="outlined-basic"
            label="Class Search"
            size="medium"
            variant="outlined"
            fullWidth
            onChange={handleTextChange}
            value={searchText}
        />

        <Grid container spacing={2} pt={2}>
            {searchResults.map((result) => (
                <Grid item xs={12}>
                    <Card key={result.id} variant='outlined' sx={{borderRadius:'18px'}}>
                        <CardActionArea >
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {result.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Time: {result.times}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Professor: {result.professor}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>

    </Box>
  );
}

