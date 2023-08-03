// import React, { useState } from 'react'
// import "./join.css";
// import logo from '../../images/logo.png'
// import{Link} from 'react-router-dom';


// let user;
// const join = () => {
//   const [Name, setName] = useState("");

//   const sendUser=()=>{
//     user=document.getElementById('JoinInput').value;
//     document.getElementById('JoinInput').value=' ';
    
//   }
//   return (
//     <div className='JoinPage'>
//           <div className='JoinContainer'>
//               <img src={logo} alt='logo'/>
//                <h1>ChatBox</h1>
//               <input onChange={ (e)=> setName(e.target.value)} placeholder='Enter Your Name' type='text' id='JoinInput'/>
         
//              <Link onClick={(e)=> !Name ? e.preventDefault():null} to= "/chat"> <button onClick={sendUser} className='joinbtn'> Login</button> </Link> 
//          </div> 
//       </div>
//       )
// }

// export default join
// export {user}


import React, { useState } from 'react';
import "./join.css";
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

let user;
const Join = () => {
  const [Name, setName] = useState("");

  const sendUser = () => {
    user = document.getElementById('JoinInput').value;
    document.getElementById('JoinInput').value = '';
  };

  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
        <img src={logo} alt='logo' />
        <h1>ChatBox</h1>
        <input onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' type='text' id='JoinInput' />

        <Link onClick={(e) => !Name ? e.preventDefault() : null} to="/chat">
          <button onClick={sendUser} className='joinbtn'> Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };


