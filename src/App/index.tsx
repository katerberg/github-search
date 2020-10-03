import {AppBar, Button, CircularProgress, Container, Typography} from '@material-ui/core';
import React, {useState} from 'react';
import {useFetch} from 'use-http';
import {Search} from '../Search';
import './index.css';

export function App(): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const {data, loading} = useFetch(`https://api.github.com/search/users?q=${query}`, {}, [query]);

  const handleChange = (newValue: string): void => {
    setQuery(newValue);
  };
  return (
    <div className="App">
      <AppBar className="App-appbar" position="static">
        <Typography className="App-header" variant="h6" component="h1">
          Github Searcher
        </Typography>
        <Search onChange={handleChange} />
      </AppBar>
      <Container maxWidth="sm">
        {loading && <CircularProgress />}
        {!loading && <Button>{data}</Button>}
      </Container>
    </div>
  );
}
