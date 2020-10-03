import React, {useState} from 'react';
import './index.css';
import {UserDetails} from '../UserDetails';
import {Button, Card, CardContent, CardMedia, Typography} from '@material-ui/core';

export function User({data}) {
  const [needsDetails, setNeedsDetails] = useState(false);

  const handleExpandClick = () => setNeedsDetails(true);
  const link=`https://github.com/${data.login}`;

  return (
    <Card className="User">
      <a href={link}>
        <CardMedia
          className="User-picture"
          image={data.avatar_url}
          title="avatar"
        />
      </a>
      <CardContent className="User-content">
        <Typography component="h3" variant="h5">
          <a href={link}>{data.login}</a>
        </Typography>
        {needsDetails && <UserDetails url={data.url} />}
        {!needsDetails && <>
          <div className="spacer" />
          <Button color="primary" onClick={handleExpandClick}>{'More Info'}</Button>
        </>}
      </CardContent>
    </Card>
  );
}