import React, {useState} from 'react';
import default_pic from '../../assets/default_profile_icon.png'
import './Profile.css'

function Profile(props) {
  const [sidebarFull, setSidebarFull] = useState('300px')
  const [sidebarMini, setSidebarMini] = useState('0px')
  const [authVisibility, setAuthVisibility] = useState('hidden')
  const [authBox, setAuthBox] = useState('login')


  const toggleAuth = () => {
    authVisibility === 'hidden' ? setAuthVisibility('visible') : setAuthVisibility('hidden')
  }
  
  return (
    <>
      {/* sidebar open */}
      <div  className='profile-open'
            style={{transform: `translateX(${sidebarFull})`}}
            >
        {/* profile header */}
        <div className='user-info'>
          <img  src={default_pic}
                onClick={() => {
                  setSidebarFull('300px')
                  setSidebarMini('0px')
                }}
                alt='default profile'
                className='profile-pic'/>
          <div>
            <p>Username</p>
            <p>email@email.com</p>
          </div>
        </div>

        {/* authentication toggle */}
        <div className='auth-links'>
          <p className='auth-link-item' onClick={toggleAuth}>Login</p>
          <p>/</p>
          <p className='auth-link-item' >Create an Account</p>
        </div>
          <div className={`${authVisibility}`}>
            {authBox === 'login' ?
                <div className={`auth-box ${authVisibility}`}>
                  <input placeholder='Username or Email'></input>
                  <input placeholder='Password' type='password'></input>
                </div>
              :
                <div className='auth-box'>
                  <input placeholder='Username'></input>
                  <input placeholder='Email'></input>
                  <input placeholder='Password' type='password'></input>
                </div>
            }
          </div>

        <h3>Main Character(s):</h3>
        <p>Mario</p>
        <p>Yoshi</p>
      </div>

      {/* sidebar closed */}
      <img  src={default_pic}
            onClick={() => {
              setSidebarMini('100px')
              setSidebarFull('0px')
            }}
            style={{transform: `translateX(${sidebarMini})`}}
            alt='default profile'
            className='profile-closed'/>

    </>
  );
}

export default Profile;