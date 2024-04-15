// import React, { useState } from 'react';
// import { Button, Modal } from 'antd';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom"; 

// import '../styles/Log.css';
// import profileimg from '../assets/logimg/profileimg.jpg';
// import emailimg from '../assets/logimg/emailimg.png';
// import passimg from '../assets/logimg/passimg.jpg';
// import roleimg from '../assets/logimg/roleimg.jpg';

// function Log() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');
//   const [error, setError] = useState('');
//   const [visible, setVisible] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/v1/users/login', {
//         email: email,
//         password: password,
//         role: role
//       });

//       // console.log('Login successful:', response.data['token']);
//       // navigate('/ContentWise'); 


//       if (role === 'Student') {
//         console.log('Login successful:', response.data['token']);
//         navigate('/ContentWise');
//       } else if (role === 'Teacher') {
//         console.log('Login successful:', response.data['token']);
//         navigate('/TeacherDashboard');
//       } else {
//         setError("Unknown role received from the server");
//         setVisible(true);
//       }


//     } catch (error) {
//       console.error('Login failed:', error.response ? error.response.data : error.message);
//       setError(error.response ? error.response.data.message : error.message);
//       setVisible(true);
//     }
//   };

//   const closeModal = () => {
//     setVisible(false);
//   };

//   return (
//     <div className="main">
//       <div className="sub-main">
//         <div className="imgs">

//           <div className="container-image">
//             <img src={profileimg} alt="profile" className="profile" />
//           </div>
//           <div>
//             <div className="log">
//               <h1>Login</h1>
//             </div>
//             <div className="drop-down">
//               <img src={roleimg} alt="role" className="email" />
//               <select 
//                 className="name"
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//               >
//                 <option value="" disabled hidden>Role</option>
//                 <option value="Student">Student</option>
//                 <option value="Teacher">Teacher</option>
//               </select>
//             </div>
//             <div className="first-input">
//               <img src={emailimg} alt="email" className="email" />
//               <input
//                 type="text"
//                 placeholder="email"
//                 className="name"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="second-input">
//               <img src={passimg} alt="pass" className="email" />
//               <input
//                 type="password"
//                 placeholder="password"
//                 className="name"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="log-button">
//               <Button type="primary" onClick={handleLogin}>Login</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Modal to display error message */}
//       <Modal
//         title="Error"
//         open = {visible}
//         onCancel={closeModal}
//         footer={[
//           <Button key="close" onClick={closeModal}>
//             Close
//           </Button>
//         ]}
//       >
//         <p>{error}</p>
//       </Modal>
//     </div>
//   );
// } 

// export default Log;


import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoginA from './lottiefile';
//import { jwtDecode } from 'jwt-decode';


import '../styles/Log.css';
import profileimg from '../assets/logimg/profileimg.jpg';
import emailimg from '../assets/logimg/emailimg.png';
import passimg from '../assets/logimg/passimg.jpg';
import roleimg from '../assets/logimg/roleimg.jpg';
import AuthService from '../AuthService';

function Log() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/users/login', {
        email: email,
        password: password,
        role: role
      });

      // console.log('Login successful:', response.data['token']);
      // navigate('/ContentWise'); 
      //     const token = response.data.token;
      //     const decodedToken = jwtDecode(token);
      //     const userEmail = decodedToken.email;
      //     setEmail(userEmail);
      //     localStorage.setItem('token', token);

      //     if (role === 'Student') {
      //       console.log('Login successful:', token);//console.log('Login successful:', response.data['token']);
      //       navigate('/ContentWise');
      //     } else if (role === 'Teacher') {
      //       console.log('Login successful:', token);
      //       navigate('/TeacherDashboard');
      //     } else {
      //       setError("Unknown role received from the server");
      //       setVisible(true);
      //     }


      //   } catch (error) {
      //     console.error('Login failed:', error.response ? error.response.data : error.message);
      //     setError(error.response ? error.response.data.message : error.message);
      //     setVisible(true);
      //   }
      // };


      const token = response.data.token; // Extract the token from the response
      localStorage.setItem('token', token); // Store the token in localStorage

      //const decodedToken = jwtDecode(token);
//console.log(decodedToken);

      if (role === 'Student') {
        AuthService.login();
        console.log('Login successful:', token);
        
        navigate('/ContentWise');
      } else if (role === 'Teacher') {
        AuthService.login();
        console.log('Login successful:', token);
        
        navigate('/TeacherDashboard');
      } else {
        setError("Unknown role received from the server");
        setVisible(true);
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message : error.message);
      setVisible(true);
    }
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div className="main">
      
      <div className="sub-main">
        <div className="imgs">

          <div className="container-image">
            <img src={profileimg} alt="profile" className="profile" />
          </div>
          <div>
            <div className="log">
              <h1>Login</h1>
            </div>
            <div className="drop-down">
              <img src={roleimg} alt="role" className="email" />
              <select
                className="name"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="" disabled hidden>Role</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>
            <div className="first-input">
              <img src={emailimg} alt="email" className="email" />
              <input
                type="text"
                placeholder="email"
                className="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="second-input">
              <img src={passimg} alt="pass" className="email" />
              <input
                type="password"
                placeholder="password"
                className="name"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="log-button">
              <Button type="primary" onClick={handleLogin}>Login</Button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal to display error message */}
      <Modal
        title="Error"
        open={visible}
        onCancel={closeModal}
        footer={[
          <Button key="close" onClick={closeModal}>
            Close
          </Button>
        ]}
      >
        <p>{error}</p>
      </Modal>
      <div>
        <LoginA/>
      </div>
    </div>
  );
}

export default Log;
