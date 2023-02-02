import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext } from 'react';


export function Home({setuser,setnewuserdata}) {
  const navigate = useNavigate();
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [input3, setinput3] = useState();
  const [warning, setwarning] = useState(false);
  const [warning2, setwarning2] = useState(false);
  const styles = {
    display: warning ? "flex" : "none"
  };
  const styles2 = {
    display: warning2 ? "flex" : "none"
  };


  const [demo, setdemo] = useState(true);
  return (
    <div className='sign-in-page'>
      <div className='New-sign-container'>

        <div className='sign-in-container'>
          <div style={styles} className='sign-in-warning'><span className="material-symbols-outlined symbol">warning</span><span className='warning'>First name & Last name Maximum 8 Character </span></div>
          <div style={styles2} className='sign-in-warning'><span className="material-symbols-outlined symbol">warning</span><span className='warning'>Fill the form </span></div>
          <TextField variant="outlined" sx={{padding:"0px"}} type='text' onChange={(ee) => {
            setinput1(ee.target.value);
          }} className="new-name-first" label=" first name" aria-label='Enter your first name' />

          <TextField  variant="outlined" type='text' onChange={(ee) => setinput2(ee.target.value)} className="new-name-last" label="last name" aria-label='Enter your lasd name' />
          <TextField variant="outlined"  type='text' onChange={(ee) => setinput3(ee.target.value)} className="new-password" label="password" aria-label='Enter your password' />
          <Button className='new-sign-in-button' variant="contained" onClick={() => {
            // setdemo(demo)
            // console.log(input1)
            // navigate()
     
            const newdata = input1;
            const newdata2 = input2;
            const newdata3 = input3;
            console.log(typeof(newdata2))
            if (newdata !== undefined && newdata2 !== undefined && newdata3 !== undefined) {
              if (newdata.length <= 8 && newdata2.length <= 8 && newdata3.length <= 8) {
                if (newdata3 !== undefined) {
                  if (newdata2 !== undefined) {
                    if (newdata3.length >= 4) {
                   
                      const newuserdata1 = [{ name: `${input1}`, lastname: `${input2}`, password: `${input3}` }];
                   
                      setnewuserdata(newuserdata1);
                    
                        newuserdata1.map((nm,index)=>{setuser(index) 
                        })
                      navigate("/Loginnew")
                    } else {
                      // console.log("password minimum length is 4");
                    }

                  } else {
                    // console.log("last name is required");
                  }

                  setwarning2(false);
                  setwarning(false);
                } else {
                  // console.log("password fill");
                }

              } else {
                // console.log(newdata.length)
                // console.log("error")
                setwarning(true);
                setwarning2(false);
              }

            } else {
              // console.log("empty input");

              setwarning2(true);
            }

            var ssd = document.querySelector('.new-name-first');
            ssd.value = '';
            var ssd = document.querySelector('.new-name-last');
            ssd.value = '';
            var ssd = document.querySelector('.new-password');
            ssd.value = '';
            return false;
            // console.log(newuserdata)
          }} aria-label='sumbit data'>Submit</Button>
        </div>

      </div>
      {/* <div className='data'>{demo ? newuserdata.map((dd) => (<div>
        <div>first name:{dd.name}</div>

        <div>lastname:{dd.lastname}</div>
        <div>password:{dd.password}</div>

      </div>


      )) : "empty"}</div> */}
    </div>
  );

}
