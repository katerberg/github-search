import {AppBar, CircularProgress, Container, Typography} from '@material-ui/core';
import React, {useState} from 'react';
import {useFetch} from 'use-http';
import {Search} from '../Search';
import {Pagination} from '../Pagination';
import {User} from '../User';
import './index.css';

export function App() {
  const [url, setUrl] = useState('');
  const {data, response, loading} = useFetch(url, {}, [url]);

  const handleChange = (newValue) => {
    setUrl(`https://api.github.com/search/users?q=${newValue}`);
  };

  const handlePageChange = (url) => setUrl(url);

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
        {!loading && <>
          {!data?.items && <Typography className="App-helper-text" variant="h4">Search for some users!</Typography>}
          {data.total_count !== undefined && <Typography>{`${data.total_count} results found!`}</Typography>}
          {data.total_count > data?.items?.length && response.headers && <Pagination links={response.headers.get('link')} onChange={handlePageChange} />}
          {data?.items && data.items.map(userData => <User key={userData.login} data={userData} />)}
        </>}
      </Container>
    </div>
  );
}