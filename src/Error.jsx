import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function Error() {
  const navigate = useNavigate();
  return (
    <div className='error-container'>
      <Button variant="contained" endIcon={<ArrowBackIcon />} onClick={() => navigate('/')}>Back</Button>
      <img src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" />
    </div>
  );
}
