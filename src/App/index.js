import {AppBar, CircularProgress, Container, Typography} from '@material-ui/core';
import React, {useState} from 'react';
import {useFetch} from 'use-http';
import {Search} from '../Search';
import {User} from '../User';
import './index.css';

export function App() {
  const [query, setQuery] = useState('');
  const {data, loading} = useFetch(`https://api.github.com/search/users?q=${query}`, {}, [query]);

  const handleChange = (newValue) => {
    setQuery(newValue);
  };

  return (
    <div className="App">
      <AppBar className="App-appbar" position="static">
        <Typography className="App-header" variant="h6" component="h1">
          Github Searcher
        </Typography>
        <Search onSearch={handleChange} />
      </AppBar>
      <Container className="App-userlist" maxWidth="sm">
        {loading && <CircularProgress />}
        {!loading && !data?.items && <Typography className="App-helper-text" variant="h4">Search for some users!</Typography>}
        {!loading && data.total_count !== undefined && <Typography>{`${data.total_count} results found!`}</Typography>}
        {!loading && data?.items && data.items.map(userData => <User key={userData.login} data={userData} />)}
      </Container>
    </div>
  );
}