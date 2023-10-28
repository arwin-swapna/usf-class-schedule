import { Card, CardContent, Grid, TextField, Typography } from '@mui/material';
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
          return classInfo.className.toLowerCase().includes(value.toLowerCase());
        });
        setSearchResults(searchResults);
    }
  };

  return (
    <div>
      <TextField
        sx={{ marginTop: '1.5rem', borderWidth: '50px' }}
        id="outlined-basic"
        label="Class Search"
        size="small"
        variant="outlined"
        fullWidth
        onChange={handleTextChange}
        value={searchText}
      />

      <Grid container spacing={2} pt={2}>
        {searchResults.map((result, index) => (
            <Grid item xs={12}>
                <Card key={index}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {result.className}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Time: {result.classTime}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Professor: {result.professor}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))}
      </Grid>
    </div>
  );
}

