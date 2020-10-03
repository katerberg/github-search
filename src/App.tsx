import React from 'react';
import {AppBar, Button, Container, InputBase, Typography} from '@material-ui/core';
import {Search} from './Search';
import './App.css';

export function App(): JSX.Element {
  return (
    <div className="App">
      <AppBar className="App-appbar" position="static">
        <Typography className="App-header" variant="h6" component="h1">Github Searcher</Typography>
        <Search />
      </AppBar>
      <Container maxWidth="sm">
          <Button>hello</Button>
      </Container>
    </div>
  );
}
