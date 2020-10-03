import * as parse from 'parse-link-header';
import {Button} from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import React from 'react';
import './index.css';

export function Pagination({links, onChange}) {
  if (!links) { return};

  const parsedLinks = parse(links);

  return (
    <div className="Pagination">
      <Button disabled={!parsedLinks.first} onClick={() => onChange(parsedLinks.first.url)}><FirstPageIcon/></Button>
      <Button disabled={!parsedLinks.prev} variant="outlined" onClick={() => onChange(parsedLinks.prev.url)}>Previous Page</Button>
      <Button disabled={!parsedLinks.next} variant="outlined" onClick={() => onChange(parsedLinks.next.url)}>Next Page</Button>
      <Button disabled={!parsedLinks.last} onClick={() => onChange(parsedLinks.last.url)}><LastPageIcon/></Button>
    </div>
  );
}