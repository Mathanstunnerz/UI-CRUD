import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom/dist';
import { useContext } from 'react';
export function Addprofile({setnewuserdata,newuserdata,setuser,user }) {
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
  return (
    <div className='form-edit'>
      <div className='form-background'>

        <div style={styles} className='sign-in-warning'><span className="material-symbols-outlined symbol">warning</span><span className='warning'>First name & Last name Maximum 8 Character </span></div>
        <div style={styles2} className='sign-in-warning'><span className="material-symbols-outlined symbol">warning</span><span className='warning'>Fill the form </span></div>
        <TextField id="outlined-basic" label="First name" variant="outlined" className='input-field' aria-label='Edit your first name' onChange={(eex) => setinput1(eex.target.value)} />
        <TextField id="outlined-basic" label="Last name" variant="outlined" className='input-field' aria-label='Edit your first name' onChange={(eex) => setinput2(eex.target.value)} />
        <TextField id="outlined-basic" label="Password" variant="outlined" className='input-field' aria-label='Edit your first name' onChange={(eex) => setinput3(eex.target.value)} />
        <div className='form-button-container'>
          <Button variant="contained" sx={{ margin: "0px" }} endIcon={<ArrowBackIcon />} onClick={() => navigate("/Loginnew")}>
            Back
          </Button>

          <Button variant="contained" endIcon={<CheckIcon />} onClick={() => {

            const newdata = input1;
            const newdata2 = input2;
            const newdata3 = input3;
            const val = user
            // console.log(typeof(newdata2))
            if (newdata !== undefined && newdata2 !== undefined && newdata3 !== undefined) {
              if (newdata.length <= 9 && newdata2.length <= 9 && newdata3.length <= 8) {
                if (newdata3 !== undefined) {
                  if (newdata2 !== undefined) {
                    if (newdata3.length >= 4) {
                      //  if(newdata2 === object )
                      const maindata = [...newuserdata];
                      const newuserdata1 = { name: `${input1}`, lastname: `${input2}`, password: `${input3}` };
                      const local = [...maindata, newuserdata1];
                      setnewuserdata(local);
                      // localStorage.setItem("3",local)
                      // <Link to={"/"} >Home</Link>
                      // console.log(local)
                      setuser(newuserdata.length)
                      navigate("/Loginnew");
                    } else {
                      // console.log("password minimum length is 4");
                    }

                  } else {
                    // console.log("last name is required");
                  }

                  setwarning2(false);
                  setwarning(false);
                } else {
                
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



          }}>Submit</Button>

        </div>
      </div>
    </div>

  );
}
