import React from 'react';
import {useFetch} from 'use-http';
import './index.css';
import PeopleIcon from '@material-ui/icons/People';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';
import {CircularProgress, Typography} from '@material-ui/core';

export function UserDetails({url}) {
  const {data = [], loading} = useFetch(url, {}, []);
  
  if (loading) {
    return <CircularProgress />
  }

  return (
    <div className="UserDetails">
      {data.location && <div className="UserDetails-info"><LocationOnIcon/><Typography>{data.location}</Typography></div>}
      {data.twitter_username && <div className="UserDetails-info"><TwitterIcon/><Typography><a href={`https://twitter.com/${data.twitter_username}`}>{data.twitter_username}</a></Typography></div>}
      <div className="UserDetails-info"><PeopleIcon/><Typography>{data.followers}</Typography></div>
    </div>
  );
}