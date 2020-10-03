import React, {useState} from 'react';
import './index.css';
import {UserDetails} from '../UserDetails';
import {Button, Card, CardContent, CardMedia, Typography} from '@material-ui/core';

export function User({data}) {
  const [needsDetails, setNeedsDetails] = useState(false);

  const handleExpandClick = () => setNeedsDetails(true);

  return (
    <Card className="User">
      <CardMedia
        className="User-picture"
        image={data.avatar_url}
        title="avatar"
      />
      <CardContent className="User-content">
        <Typography component="h3" variant="h5">{data.login}</Typography>
        {needsDetails && <UserDetails url={data.url} />}
        {!needsDetails && <>
          <div className="spacer" />
          <Button color="primary" onClick={handleExpandClick}>{'More Info'}</Button>
        </>}
      </CardContent>
    </Card>
  );
}