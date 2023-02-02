import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom/dist';

export function Home2({ newuserdata, val,log}) {
  
// console.log("demo",newuserdata[0])
  const navigate = useNavigate();
  let lastname = newuserdata;
  let name = newuserdata;
  var bio = newuserdata;
 
  let pic = newuserdata;


  if( bio === "undefined" ){
    bio = null
  
  }else{
    bio = newuserdata[0].bio
    // console.log(" bio 123");
  }
  if (newuserdata) {
    bio = newuserdata[0].bio;
    name = newuserdata[0].name;
    lastname = newuserdata[0].lastname;
    pic = newuserdata[0].pic;
    // console.log("val 1")
  }
  console.log(val);
  if (val) {
    // console.log("val 4",typeof(newuserdata[val].name))
    bio = newuserdata[val].bio;
    name = newuserdata[val].name;
    lastname = newuserdata[val].lastname;
    pic = newuserdata[val].pic;
    // console.log("index");
  }

  
  return (
    <div className="content-container">

      <div className='row'>
        <div className='col'>
          <Avatar alt={name} src={pic}

            sx={{ width: "200px", height: "200px" }} />
          <h3>{bio}</h3>
        </div>
        <div className='col'>
          <h1 className='inside-name'>{name + lastname}</h1>
          {/* <h3 className='inside-name'>password : {newuserdata[0].password}</h3> */}
          <Button variant="contained" sx={{ margin: "10px" }} endIcon={<EditIcon />} onClick={() => navigate("/Edit23")}>
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
