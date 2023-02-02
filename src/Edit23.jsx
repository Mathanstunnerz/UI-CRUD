import { useState } from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom/dist';
import { useContext } from 'react';
import TextField from '@mui/material/TextField';
export function Edit23({user, setvaluefont,newuserdata }) {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [input3, setinput3] = useState();
  const [input4, setinput4] = useState();
  const [input5, setinput5] = useState();

  const [fillform, setfillform] = useState(false);
  const [formpassword, setformpassword] = useState(false);
  const navigate = useNavigate();
  const fill = {
    display: fillform ? "flex" : "none"
  };
  const password = {
    display: formpassword ? "flex" : "none"
  };

  return (<div className='form-edit'>

    <div className='form-background'>
      <div className='form-edit-top'>
        <Avatar alt={newuserdata[0].name} src="/static/images/avatar/2.jpg" />
        <span style={fill} className='sign-in-warning'><span className="material-symbols-outlined symbol">warning</span>Fill the form or Reapply the value</span>
        <span style={password} className='sign-in-warning'><span className="material-symbols-outlined symbol">warning</span>Fill the form</span>
        <Button variant="contained" sx={{ margin: "0px" }} endIcon={<ArrowBackIcon />} onClick={() => navigate("/Loginnew")}>
          Back
        </Button>

      </div>
      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <TextField className='input-field' defaultValue={newuserdata[user].name}     placeholder='first name' aria-label='Edit your first name' onChange={(eex) => setinput1(eex.target.value)}/>
      <TextField className='input-field' defaultValue={newuserdata[user].lastname} placeholder='last name' aria-label='Edit  your last name' onChange={(ee1) => setinput2(ee1.target.value)}/>
      <TextField className='input-field' defaultValue={newuserdata[user].password} placeholder="Change your password" aria-label='Change your password' onChange={(ee2) => setinput3(ee2.target.value)}/>
      <TextField className='input-field' defaultValue={newuserdata[user].bio}      placeholder="Bio" variant="filled" aria-label='Add your Bio' onChange={(ee2) => setinput4(ee2.target.value)}/>
      <TextField className='input-field' defaultValue={newuserdata[user].url}  placeholder="Profile pic url" variant="filled" aria-label='Add your Profile photo' onChange={(ee2) => setinput5(ee2.target.value)}/>

      <span>
        <Button variant="contained" endIcon={<CheckIcon />} onClick={() => {
          const data1 = input1;
          const data2 = input2;
          const data3 = input3;
          const data4 = input4;
          const data5 = input5;
          const user2 = user;
          //  const data = [...newuserdata]
          // if(data1.length <=8 && data2.length <=8 && data3.length <=10){
          if (data1 !== undefined && data2 !== undefined && data3 !== undefined) {


            if (data2 !== undefined) {
              if (data3 !== undefined) {
                if (data2 !== undefined) {
                  // const maindata =  [...newuserdata]
                  newuserdata.splice(user2, 1, { name: `${data1}`, lastname: `${data2}`, password: `${data3}`, bio: `${data4}`, pic: `${data5}` });
       
                  navigate("/Loginnew");
                  setfillform(false);
                  setformpassword(false);
                }
                else {
                  // console.log("password not");
                }
              } else {
                // console.log("password is empty");
                setfillform(false);
                setformpassword(false);
              }
            } else {
              // console.log("last name is empty");
              setfillform(false);
              setformpassword(true);
            }
          } else {
            // console.log("fill the form")
            setfillform(true);
            setformpassword(false);
          }

        }}>click</Button>
      </span>
    </div>
  </div>);
}
