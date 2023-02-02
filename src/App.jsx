import { useState } from 'react'
import reactLogo from './assets/react.svg'     
import { createContext } from 'react';
import { useContext } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Home } from './Home';
import { Error } from './Error';
import { Loginnew } from './Loginnew';
import { Edit23 } from './Edit23';
import { Addprofile } from './Addprofile';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {

  return (

    <div className="App">
   <Leyout />
    </div>
  )
}

function Leyout(){
  const ThemeContext = createContext();
const [newuserdata,setnewuserdata] = useState([{name: "demo",
lastname:"new"}])
const [log,setlog] =useState(true)
const[user,setuser] = useState()
const [valuefont,setvaluefont] =useState()
  return ( 
    <ThemeContext.Provider value={[newuserdata,setnewuserdata]}>
  <div>
    <Routes>
    <Route path="/" element={<Home setnewuserdata={setnewuserdata} setuser={setuser}/>} />
     <Route  path="/Loginnew" log={log} element={<Loginnew  newuserdata={newuserdata} setuser={setuser} user={user}  />}/>
     <Route path="/Edit23"  element={<Edit23 newuserdata={newuserdata} user={user} setvaluefont={setvaluefont}/>} />
     <Route path="/Addprofile" element={<Addprofile newuserdata={newuserdata} setnewuserdata={setnewuserdata} user={user} setuser={setuser} />} />
 
    <Route path="/:id" element={<Error  />} />
  </Routes>
  </div>
  </ThemeContext.Provider>
  )
}
export function Accountlist ({nm,addaccountlist,index,newuserdata,setuser,user}){
 const [error,seterror] = useState(true)
 const styles ={
  color:error?"black":"red",
  
 }
  return (

    <MenuItem >
   <span style={styles} onClick={addaccountlist}>{error?`${nm.name}`:"This is main id"}</span> 
  <div className='delt-item'> 

     <Button><DeleteIcon sx={{marginLeft: 0 ,}}  onClick={()=>{
      
      if(index !==0){
        setuser(0)
    
        newuserdata.splice(index,1)
      }else{
        seterror(!error)
      }
    
    }} /></Button>
 </div> 
    </MenuItem>

  )
}
export default App
