import React, { useState } from 'react';
import {AppBar, Button, CircularProgress, Container, Typography} from '@material-ui/core';
import {Search} from '../Search';
import {useFetch} from 'use-http';
import './index.css';

export function App(): JSX.Element {
  const [query, setQuery] = useState<String>('');
  const { data = [], loading } = useFetch(`https://api.github.com/search/users?q=${query}`, {}, [query]);
  console.log(data)

  const handleChange = (newValue: String) => {
    setQuery(newValue);
  }
  return (
    <div className="App">
      <AppBar className="App-appbar" position="static">
        <Typography className="App-header" variant="h6" component="h1">Github Searcher</Typography>
        <Search onChange={handleChange} />
      </AppBar>
      <Container maxWidth="sm">
        {loading && <CircularProgress />}
        {!loading && <Button>hello</Button>}
      </Container>
    </div>
  );
}
